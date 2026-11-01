"use client";

import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";

type ConsentSettings = {
  necessary: true;
  analytics: boolean;
  external: boolean;
};

const STORAGE_KEY = "mediacje-cookie-consent";

const defaultSettings: ConsentSettings = {
  necessary: true,
  analytics: false,
  external: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] =
    useState<ConsentSettings>(defaultSettings);

  useEffect(() => {
    // Odczyt localStorage odkładamy do klatki renderowania po hydracji,
    // aby zachować zgodność SSR i uniknąć synchronicznej aktualizacji stanu w efekcie.
    const frame = window.requestAnimationFrame(() => {
      const savedConsent = localStorage.getItem(STORAGE_KEY);

      if (savedConsent) {
        try {
          const parsed = JSON.parse(savedConsent) as ConsentSettings;

          // Zachowujemy zgodę na analitykę z wcześniejszych wersji panelu,
          // jeśli użytkownik rzeczywiście ją wcześniej wybrał.
          setSettings({
            necessary: true,
            analytics: parsed.analytics === true,
            external: parsed.external === true,
          });
        } catch {
          localStorage.removeItem(STORAGE_KEY);
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function saveConsent(consent: ConsentSettings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));

    setSettings(consent);
    setVisible(false);
    setShowSettings(false);

    window.dispatchEvent(
      new CustomEvent("cookie-consent-updated", {
        detail: consent,
      })
    );
  }

  function acceptAll() {
    saveConsent({
      necessary: true,
      analytics: true,
      external: true,
    });
  }

  function rejectOptional() {
    saveConsent(defaultSettings);
  }

  function savePreferences() {
    saveConsent(settings);
  }

  function openSettings() {
    const savedConsent = localStorage.getItem(STORAGE_KEY);

    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent) as ConsentSettings;

        setSettings({
          necessary: true,
          analytics: parsed.analytics === true,
          external: parsed.external === true,
        });
      } catch {
        setSettings(defaultSettings);
      }
    }

    setVisible(true);
    setShowSettings(true);
  }

  useEffect(() => {
    function handleOpenSettings() {
      openSettings();
    }

    window.addEventListener(
      "open-cookie-settings",
      handleOpenSettings
    );

    return () => {
      window.removeEventListener(
        "open-cookie-settings",
        handleOpenSettings
      );
    };
  }, []);

  if (!visible) {
    return (
      <button
        type="button"
        className={styles.reopen}
        onClick={openSettings}
        aria-label="Otwórz ustawienia cookies"
      >
        Ustawienia cookies
      </button>
    );
  }

  return (
    <div className={styles.backdrop}>
      <section
        className={styles.banner}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <p className={styles.eyebrow}>TWOJA PRYWATNOŚĆ</p>

        <h2 id="cookie-title">Szanujemy Twoją prywatność</h2>

        <p id="cookie-description" className={styles.description}>
          Strona korzysta z niezbędnych mechanizmów działania. Za Twoją
          odrębną zgodą możemy prowadzić statystyczną analizę odwiedzin
          oraz korzystać z usług zewnętrznych, takich jak mapa Google.
        </p>

        <p className={styles.links}>
          Przeczytaj naszą{" "}
          <a href="/polityka-prywatnosci">politykę prywatności</a>{" "}
          i <a href="/polityka-cookies">politykę cookies</a>.
        </p>

        {showSettings && (
          <div className={styles.preferences}>
            <div className={styles.preference}>
              <div>
                <strong>Niezbędne</strong>
                <p>Zapewniają podstawowe działanie strony.</p>
              </div>
              <span className={styles.alwaysActive}>Zawsze aktywne</span>
            </div>

            <label className={styles.preference}>
              <div>
                <strong>Analityka</strong>
                <p>
                  Pomaga zrozumieć, jak użytkownicy korzystają ze strony.
                  Google Analytics 4 będzie uruchamiany dopiero po wyrażeniu zgody.
                </p>
              </div>

              <input
                type="checkbox"
                checked={settings.analytics}
                onChange={(event) =>
                  setSettings((previous) => ({
                    ...previous,
                    analytics: event.target.checked,
                  }))
                }
              />
            </label>

            <label className={styles.preference}>
              <div>
                <strong>Technologie zewnętrzne</strong>
                <p>
                  Umożliwiają korzystanie z wybranych usług,
                  np. mapy Google.
                </p>
              </div>

              <input
                type="checkbox"
                checked={settings.external}
                onChange={(event) =>
                  setSettings((previous) => ({
                    ...previous,
                    external: event.target.checked,
                  }))
                }
              />
            </label>
          </div>
        )}

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            onClick={acceptAll}
          >
            Akceptuję
          </button>

          <button
            type="button"
            className={styles.secondary}
            onClick={rejectOptional}
          >
            Odrzucam
          </button>

          {showSettings ? (
            <button
              type="button"
              className={styles.secondary}
              onClick={savePreferences}
            >
              Zapisz ustawienia
            </button>
          ) : (
            <button
              type="button"
              className={styles.secondary}
              onClick={() => setShowSettings(true)}
            >
              Ustawienia
            </button>
          )}
        </div>
      </section>
    </div>
  );
}