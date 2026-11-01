"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Błąd aplikacji:", error);
  }, [error]);

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
        <span className={styles.code}>500</span>

        <p className={styles.eyebrow}>CHWILOWE UTRUDNIENIA</p>

        <div className={styles.ornament} aria-hidden="true">
          <span />
        </div>

        <h1>Coś poszło nie tak</h1>

        <p className={styles.description}>
          Podczas wyświetlania strony wystąpił nieoczekiwany błąd.
          Spróbuj ponownie za chwilę.
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
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </main>
  );
}