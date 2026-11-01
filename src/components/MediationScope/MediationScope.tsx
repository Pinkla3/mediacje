import styles from "./MediationScope.module.css";

export default function MediationScope() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>



        <div className={styles.cards}>

          <article className={styles.card}>
            <div className={styles.image}>
<img
  src="/images/mediacje-rodzinne.png"
  alt="Rozmowa podczas mediacji rodzinnej"
/>

<div className={`${styles.icon} ${styles.familyIcon}`}>
<svg viewBox="0 0 48 48" aria-hidden="true">
  <g
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Głowy */}
    <circle cx="24" cy="12" r="5" />
    <circle cx="11" cy="18" r="4.5" />
    <circle cx="37" cy="18" r="4.5" />

    {/* Środkowa postać */}
    <path d="M16 37c0-7 3-12 8-12s8 5 8 12" />

    {/* Lewa postać — kontur skierowany na zewnątrz */}
    <path d="M3 37c0-6 3-10 8-10 2.5 0 4.5 1 6 3" />

    {/* Prawa postać — kontur skierowany na zewnątrz */}
    <path d="M31 30c1.5-2 3.5-3 6-3 5 0 8 4 8 10" />
  </g>
</svg>
</div>
            </div>

            <div className={styles.cardContent}>
              <h3>MEDIACJE RODZINNE</h3>

              <p>
                Rozwody, alimenty, kontakty z dziećmi,
                podział majątku.
              </p>

              <a
                href="/zakres-mediacji#rodzinne"
                className={styles.more}
              >
                Więcej
                <span>→</span>
              </a>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.image}>
<img
  src="/images/mediacje-cywilne.png"
  alt="Spotkanie biznesowe i uzgadnianie warunków"
/>

              <div className={styles.icon}>
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M13 5h17l7 7v31H13z" />
    <path d="M30 5v8h7" />
    <path d="M19 22h12" />
    <path d="M19 28h12" />
    <path d="M19 34h9" />
  </svg>
</div>
            </div>

            <div className={styles.cardContent}>
              <h3>MEDIACJE CYWILNE</h3>

              <p>
                Spory sąsiedzkie, umowy,
                roszczenia majątkowe.
              </p>

              <a
                href="/zakres-mediacji#cywilne"
                className={styles.more}
              >
                Więcej
                <span>→</span>
              </a>
            </div>
          </article>

         <article className={styles.card}>
            <div className={styles.image}>
              <img
                src="/images/mediacje-pracownicze.png"
                alt="Dokumenty i laptop na biurku"
              />

              <div className={styles.icon}>
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <rect x="7" y="15" width="34" height="25" rx="2" />
                  <path d="M17 15v-4c0-2 2-4 4-4h6c2 0 4 2 4 4v4" />
                  <path d="M7 24h34" />
                  <path d="M22 24v4h4v-4" />
                </svg>
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3>MEDIACJE PRACOWNICZE</h3>

              <p>
                Konflikty w miejscu pracy, spory z pracodawcą
                i nieporozumienia w zespole.
              </p>

              <a
                href="/zakres-mediacji#pracownicze"
                className={styles.more}
              >
                Więcej
                <span>→</span>
              </a>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.image}>
              <img
                src="/images/mediacje-gospodarcze.png"
                alt="Dokumenty i finanse na biurku"
              />

              <div className={styles.icon}>
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 40h34" />
      <rect x="10" y="27" width="7" height="13" rx="1" />
      <rect x="21" y="19" width="7" height="21" rx="1" />
      <rect x="32" y="8" width="7" height="32" rx="1" />
    </g>
  </svg>
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3>MEDIACJE GOSPODARCZE</h3>

              <p>
                Spory między firmami, konflikty w umowach,
                rozliczenia i warunki współpracy.
              </p>

              <a
                href="/zakres-mediacji#gospodarcze"
                className={styles.more}
              >
                Więcej
                <span>→</span>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}