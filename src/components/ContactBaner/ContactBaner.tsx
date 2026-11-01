import Image from "next/image";
import Link from "next/link";
import styles from "./ContactBaner.module.css";

export default function ContactBanner() {
  return (
  <section id="kontakt-banner" className={styles.contactBanner}>
      <div className={styles.contactImage}>
        <Image
          src="/images/consultation-desk.png"
          alt="Przytulne miejsce do rozmowy i konsultacji"
          fill
          sizes="(max-width: 768px) 100vw, 36vw"
        />
      </div>

      <div className={styles.contactContent}>
        <p className={styles.eyebrow}>KOLEJNY KROK</p>

        <h2>Porozmawiajmy</h2>

        <span className={styles.goldLine} />

        <p>
          Jeśli szukasz wsparcia w rozwiązaniu konfliktu
          – zapraszam do kontaktu.
        </p>
      </div>

      <Link
        href="/umow-spotkanie"
        className={styles.contactButton}
      >
        Umów spotkanie <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}