import styles from "./WhyMediation.module.css";

export default function WhyMediation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>DLACZEGO WARTO?</p>

          <h2>
            Zaufanie to najlepsza
            <span>podstawa porozumienia</span>
          </h2>

          <p className={styles.description}>
            Mediacja daje przestrzeń do spokojnej rozmowy,
            wzajemnego zrozumienia i znalezienia rozwiązania,
            które uwzględnia potrzeby każdej ze stron.
          </p>

          <div className={styles.benefits}>
            <article className={styles.benefit}>
              <div className={styles.benefitIcon} aria-hidden="true">
<svg viewBox="0 0 48 48" aria-hidden="true">
  {/* Górny dymek z zaokrąglonymi rogami */}
  <path
   d="M16 6H40Q42 6 42 8V21Q42 23 40 23H37V30L30 23H16Q14 23 14 21V8Q14 6 16 6Z"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
  />

  {/* Maska w kolorze kafelka — usuwa fragmenty konturu z tyłu */}
  <path
    d="M7 15H31Q33 15 33 17V32Q33 34 31 34H20L13 41V34H7Q5 34 5 32V17Q5 15 7 15Z"
    fill="#f0dfc3"
    stroke="none"
  />

  {/* Dolny dymek na pierwszym planie */}
  <path
    d="M7 15H31Q33 15 33 17V32Q33 34 31 34H20L13 41V34H7Q5 34 5 32V17Q5 15 7 15Z"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
  />
</svg>
              </div>

              <div>
                <h3>Pełna dyskrecja</h3>
                <p>
                  Rozmowy odbywają się w atmosferze zaufania
                  i wzajemnego szacunku.
                </p>
              </div>
            </article>

            <article className={styles.benefit}>
              <div className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="17" />
                  <path d="M24 13v12l8 5" />
                </svg>
              </div>

              <div>
                <h3>Oszczędność czasu</h3>
                <p>
                  Możliwość rozwiązania sporu bez długotrwałego
                  postępowania sądowego.
                </p>
              </div>
            </article>

            <article className={styles.benefit}>
              <div className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="14" r="6" />
                  <circle cx="11" cy="19" r="4" />
                  <circle cx="37" cy="19" r="4" />
                  <path d="M12 39c0-9 4-14 12-14s12 5 12 14" />
                  <path d="M2 38c0-6 3-10 9-10M46 38c0-6-3-10-9-10" />
                </svg>
              </div>

              <div>
                <h3>Indywidualne podejście</h3>
                <p>
                  Poszukiwanie rozwiązania dopasowanego do
                  sytuacji i potrzeb stron.
                </p>
              </div>
            </article>

            <article className={styles.benefit}>
              <div className={styles.benefitIcon} aria-hidden="true">
<svg viewBox="0 0 48 48" aria-hidden="true">
  <rect x="7" y="27" width="9" height="15" />
  <rect x="20" y="17" width="9" height="25" />
  <rect x="33" y="7" width="9" height="35" />
</svg>
              </div>

              <div>
                <h3>Trwałe porozumienie</h3>
                <p>
                   Wspólnie wypracowane ustalenia, które pomagają uporządkować spór.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.imageWrapper}>
<img
  src="/images/why-mediation.png"
  alt="Elegancki gabinet mediacyjny w ciepłym świetle"
/>

        </div>
      </div>
    </section>
  );
}