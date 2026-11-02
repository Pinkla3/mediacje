"use client";

import AppointmentForm from "./AppointmentForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="kontakt">
      <div className={styles.container}>
        <div className={styles.photo}>
          <div className={styles.photoOverlay} />
        </div>

        <div className={styles.info}>
          <p className={styles.eyebrow}>KONTAKT</p>
          <h2>Skontaktuj się ze mną</h2>
          <p className={styles.description}>
            Umów się na spotkanie lub zadaj pytanie. Chętnie odpowiem i pomogę dobrać
            odpowiednią formę mediacji do Twojej sytuacji.
          </p>

          <div className={styles.details}>
            <a href="tel:+48600123456" className={styles.detail}>
              <span className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-2-2 3a15 15 0 0 1-7-7l3-2-2-5Z" />
                </svg>
              </span>
              <span><strong>+48 600 123 456</strong></span>
            </a>

            <a href="mailto:kontakt@mediacje.pl" className={styles.detail}>
              <span className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span><strong>kontakt@mediacje.pl</strong></span>
            </a>

            <div className={styles.detail}>
              <span className={styles.detailIcon}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>
                <strong>Szczecin i okolice</strong>
                <small>Możliwość spotkania stacjonarnie lub online</small>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <h3>Napisz do mnie</h3>
          <AppointmentForm embedded />
        </div>
      </div>
    </section>
  );
}
