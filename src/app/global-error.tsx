"use client";

import Link from "next/link";
import styles from "./global-error.module.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pl">
      <body>
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
            <span className={styles.code}>500</span>

            <p className={styles.eyebrow}>
              PRZEPRASZAMY ZA UTRUDNIENIA
            </p>

            <div className={styles.ornament} aria-hidden="true">
              <span />
            </div>

            <h1>Strona chwilowo niedostępna</h1>

            <p className={styles.description}>
              Wystąpił nieoczekiwany błąd. Spróbuj ponownie
              lub wróć do strony głównej.
            </p>

            <div className={styles.actions}>
              <button
                type="button"
                onClick={() => reset()}
                className={styles.button}
              >
                Spróbuj ponownie <span aria-hidden="true">→</span>
              </button>

              <Link href="/" className={styles.secondaryButton}>
                Strona główna
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}