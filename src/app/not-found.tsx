import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div
        className={`${styles.decor} ${styles.decorLeft}`}
        aria-hidden="true"
      />
      <div
        className={`${styles.decor} ${styles.decorRight}`}
        aria-hidden="true"
      />

      <div className={styles.content}>
        <span className={styles.code}>404</span>

        <p className={styles.eyebrow}>NIE TA DROGA</p>

        <div className={styles.ornament} aria-hidden="true">
          <span />
        </div>

        <h1>Czasem wystarczy zawrócić</h1>

        <p className={styles.description}>
          Strona, której szukasz, nie jest dostępna.
          <br className={styles.desktopBreak} />
          Wróćmy do miejsca, od którego wszystko się zaczyna.
        </p>

        <Link href="/" className={styles.button}>
          Wróć na stronę główną
          <span aria-hidden="true">→</span>
        </Link>

        <Link href="/umow-spotkanie" className={styles.contactLink}>
          Przejdź do kontaktu
        </Link>
      </div>
    </main>
  );
}