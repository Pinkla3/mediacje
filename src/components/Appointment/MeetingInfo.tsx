"use client";

import { useEffect, useState } from "react";
import styles from "./MeetingInfo.module.css";

const meetingOptions = [
  {
    title: "Stacjonarnie",
    description: "W komfortowej przestrzeni w Szczecinie.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9v11h13V9M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Online",
    description: "Za pośrednictwem bezpiecznego połączenia wideo.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="13" height="14" rx="1" />
        <path d="m16 10 5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    title: "Elastyczne terminy",
    description: "Możliwe wieczorami lub w wybrane dni weekendu.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="1" />
        <path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h7" />
      </svg>
    ),
  },
];

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Szczecin";

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
        aria-label="Otwórz mapę Szczecina w Google Maps"
      >
        {externalConsent ? (
          <iframe
            className={styles.map}
            title="Mapa Szczecina"
            src="https://www.google.com/maps?q=Szczecin&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            aria-hidden="true"
          />
        ) : (
          <span className={styles.mapConsentNotice}>
            Mapa Google zostanie wyświetlona po wyrażeniu zgody na technologie
            zewnętrzne. Możesz też otworzyć ją bezpośrednio w Google Maps.
          </span>
        )}

        <span className={styles.mapOverlay}>
          Otwórz w Google Maps <span aria-hidden="true">↗</span>
        </span>
      </a>
    </section>
  );
}