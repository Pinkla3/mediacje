"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import styles from "./BlogLoadingLink.module.css";

type BlogLoadingLinkProps = {
  href: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
  /** Gdy true, kliknięcie uruchamia loader na linku ze zdjęciem o tym samym href. */
  loadingOnImage?: boolean;
};

const IMAGE_LOADING_EVENT = "blog-image-loading";

export default function BlogLoadingLink({
  href,
  className,
  "aria-label": ariaLabel,
  children,
  loadingOnImage = false,
}: BlogLoadingLinkProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Linki ze zdjęciami nasłuchują kliknięć przycisków prowadzących do tego samego artykułu.
    if (loadingOnImage) return;

    function handleImageLoading(event: Event) {
      const customEvent = event as CustomEvent<{ href: string }>;
      if (customEvent.detail?.href === href) {
        setLoading(true);
      }
    }

    window.addEventListener(IMAGE_LOADING_EVENT, handleImageLoading);
    return () => {
      window.removeEventListener(IMAGE_LOADING_EVENT, handleImageLoading);
    };
  }, [href, loadingOnImage]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Nie pokazuj loadera dla otwierania w nowej karcie ani kliknięć innym przyciskiem.
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (loadingOnImage) {
      // Uruchom loader na zdjęciu artykułu, a nie na klikniętym przycisku.
      window.dispatchEvent(
        new CustomEvent(IMAGE_LOADING_EVENT, { detail: { href } }),
      );
    } else {
      // Kliknięcie samego zdjęcia nadal uruchamia loader bezpośrednio na nim.
      setLoading(true);
    }
  }

  return (
    <Link
      href={href}
      className={`${className ?? ""} ${styles.loadingLink} ${loading ? styles.isLoading : ""}`}
      aria-label={ariaLabel}
      aria-busy={loading}
      onClick={handleClick}
    >
      {children}
      {loading && (
        <span className={styles.loadingOverlay} aria-hidden="true">
          <span className={styles.spinner} />
        </span>
      )}
    </Link>
  );
}
