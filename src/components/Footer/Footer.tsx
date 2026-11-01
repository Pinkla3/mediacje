
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Mediacje. Wszelkie prawa zastrzeżone.
        </p>

        <div className={styles.legal}>
          <a href="/polityka-prywatnosci">Polityka prywatności</a>
          <a href="/polityka-cookies">Polityka cookies</a>
        </div>

        <p className={styles.author}>
          Projekt i wykonanie: <strong>Klaudia Bonter</strong>
          <span className={styles.authorSeparator}> · </span>
          <a href="mailto:klaudia@bonter.eu">klaudia@bonter.eu</a>
        </p>
      </div>
    </footer>
  );
}