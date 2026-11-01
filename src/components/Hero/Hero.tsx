import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          DIALOG <span>•</span> ZROZUMIENIE <span>•</span> ROZWIĄZANIE
        </p>

        <h1>
          Rozwiązania
          <span>zamiast sporu</span>
        </h1>

        <p className={styles.description}>
          Pomagam stronom znaleźć porozumienie w sposób spokojny,
          dyskretny i dostosowany do ich potrzeb. Mediacja to realna
          alternatywa dla długotrwałych sporów sądowych.
        </p>

        <div className={styles.actions}>
          <a href="/umow-spotkanie" className={styles.primaryButton}>
            Umów spotkanie
            <span>→</span>
          </a>

          <a href="zakres-mediacji" className={styles.secondaryButton}>
            Dowiedz się więcej
          </a>
        </div>
      </div>

<div className={styles.imageWrapper}>
  <Image
    src="/images/hero.png"
    alt="Eleganckie wnętrze gabinetu mediacyjnego z wagą sprawiedliwości"
    fill
    priority
    sizes="(max-width: 900px) 100vw, 50vw"
    className={styles.heroImage}
  />

  <div className={styles.imageGradient} />
</div>
    </section>
  );
}