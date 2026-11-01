"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type ConsentSettings = {
  analytics?: boolean;
};

type DataLayerItem = Record<string, unknown> | IArguments;

declare global {
  interface Window {
    dataLayer: DataLayerItem[];
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "mediacje-cookie-consent";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const SCRIPT_ID = "mediacje-google-tag-manager";

function readAnalyticsConsent(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as ConsentSettings;
    return parsed.analytics === true;
  } catch {
    return false;
  }
}

function pushConsentUpdate(granted: boolean) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args as unknown as DataLayerItem);
  };

  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function GoogleTagManager() {
  const pathname = usePathname();
  const loaded = useRef(false);
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (!GTM_ID) return;

    const syncConsent = () => {
      const granted = readAnalyticsConsent();

      if (granted) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function gtag(...args: unknown[]) {
          window.dataLayer.push(args as unknown as DataLayerItem);
        };

        if (!loaded.current) {
          // Domyślne odmowy są umieszczane w dataLayer przed uruchomieniem GTM.
          window.gtag("consent", "default", {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
          });
          pushConsentUpdate(true);

          // Zdarzenie inicjalizujące GTM trafia do kolejki przed pobraniem skryptu.
          window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
          if (!document.getElementById(SCRIPT_ID)) {
            const script = document.createElement("script");
            script.id = SCRIPT_ID;
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
            document.head.appendChild(script);
          }
          loaded.current = true;
        } else {
          pushConsentUpdate(true);
        }

        // Pierwszą odsłonę wysyłamy dopiero po uzyskaniu zgody.
        const currentPath = window.location.pathname;
        if (previousPath.current !== currentPath) {
          previousPath.current = currentPath;
          window.dataLayer.push({
            event: "mediacje_page_view",
            page_path: currentPath,
            page_title: document.title,
          });
        }
      } else if (loaded.current) {
        // GTM pozostaje załadowany, ale zgoda analityczna jest natychmiast wycofywana.
        pushConsentUpdate(false);
      }
    };

    syncConsent();
    window.addEventListener("cookie-consent-updated", syncConsent);
    window.addEventListener("storage", syncConsent);

    return () => {
      window.removeEventListener("cookie-consent-updated", syncConsent);
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!GTM_ID || !loaded.current || !readAnalyticsConsent()) return;
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "mediacje_page_view",
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
