import Image from "next/image";
import Link from "next/link";
import styles from "./AppointmentHero.module.css";

export default function AppointmentHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            JESTEŚMY W KONTAKCIE
            <span className={styles.dot}>•</span>
            ZRÓB PIERWSZY KROK
          </span>

          <h1>
            Porozmawiajmy
            <span> o porozumieniu</span>
          </h1>

          <p>
            Każda zmiana zaczyna się od rozmowy. Napisz do mnie,
            a wspólnie ustalimy, jaka forma mediacji będzie
            odpowiednia w Twojej sytuacji.
          </p>

          <Link href="#formularz" className={styles.button}>
            UMÓW SPOTKANIE
            <span aria-hidden="true">→</span>
          </Link>
        </div>

<div className={styles.imageWrapper}>
  <Image
    src="/images/umow-spotkanie.png"
    alt="Eleganckie, przytulne wnętrze sprzyjające spokojnej rozmowie"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    className={styles.image}
  />
</div>
      </div>

  
        <span />
        <span />
        <span />
    </section>
  );
}