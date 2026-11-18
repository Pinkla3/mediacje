"use client";

import { useEffect, useState } from "react";
import styles from "./MeetingInfo.module.css";

const meetingOptions = [
  {
    title: "Stacjonarnie",
    description: "ul. Krzywoustego 69/5, 70-313 Szczecin – po wcześniejszym ustaleniu terminu.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9v11h13V9M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Online",
    description: "Za pośrednictwem połączenia wideo.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="13" height="14" rx="1" />
        <path d="m16 10 5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    title: "Termin spotkania",
    description: "Ustalany indywidualnie po kontakcie.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="1" />
        <path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h7" />
      </svg>
    ),
  },
];

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=ul.+Krzywoustego+69%2F5%2C+70-313+Szczecin";

type ConsentSettings = {
  external?: boolean;
};

const CONSENT_STORAGE_KEY = "mediacje-cookie-consent";

export default function MeetingInfo() {
  const [externalConsent, setExternalConsent] = useState(false);

  useEffect(() => {
    function readConsent() {
      try {
        const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
        const parsed = storedConsent
          ? (JSON.parse(storedConsent) as ConsentSettings)
          : null;

        setExternalConsent(parsed?.external === true);
      } catch {
        setExternalConsent(false);
      }
    }

    readConsent();
    window.addEventListener("cookie-consent-updated", readConsent);

    return () => {
      window.removeEventListener("cookie-consent-updated", readConsent);
    };
  }, []);

  return (
    <section className={styles.section} aria-labelledby="meeting-heading">
      <div className={styles.infoPanel}>
        <h2 id="meeting-heading">Jak się spotykamy?</h2>

        <div className={styles.options}>
          {meetingOptions.map((option) => (
            <article className={styles.option} key={option.title}>
              <div className={styles.icon}>
                {option.icon}
              </div>

              <div className={styles.optionText}>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <a
        className={styles.mapLink}
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Otwórz mapę adresu ul. Krzywoustego 69/5 w Szczecinie w Google Maps"
      >
        {externalConsent ? (
          <iframe
            className={styles.map}
            title="Mapa adresu ul. Krzywoustego 69/5 w Szczecinie"
            src="https://www.google.com/maps?q=ul.+Krzywoustego+69%2F5%2C+70-313+Szczecin&z=13&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            aria-hidden="true"
          />
        ) : (
          <span className={styles.mapConsentNotice}>
            Mapa Google zostanie wyświetlona po wyrażeniu zgody na technologie
            zewnętrzne. Możesz też otworzyć mapę lokalizacji bezpośrednio w Google Maps.
          </span>
        )}

        <span className={styles.mapAddressLabel}>
          ul. Krzywoustego 69/5, 70-313 Szczecin
        </span>

        <span className={styles.mapOverlay}>
          Otwórz w Google Maps <span aria-hidden="true">↗</span>
        </span>
      </a>
    </section>
  );
}
