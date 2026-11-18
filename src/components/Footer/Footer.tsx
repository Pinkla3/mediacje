
"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Mediacje. Wszelkie prawa zastrzeżone.
        </p>

        <div className={styles.legal}>
          <a href="/polityka-prywatnosci">
            Polityka prywatności
          </a>

          <a href="/polityka-cookies">
            Polityka cookies
          </a>

          <button
            type="button"
            className={styles.cookieSettings}
            onClick={openCookieSettings}
          >
            Ustawienia cookies
          </button>
        </div>

        <p className={styles.author}>
          Projekt i wykonanie: <strong>Klaudia Bonter</strong>
          <span className={styles.authorSeparator}> · </span>
          <a href="mailto:klaudia@bonter.eu">
            klaudia@bonter.eu
          </a>
        </p>
      </div>
    </footer>
  );
}
