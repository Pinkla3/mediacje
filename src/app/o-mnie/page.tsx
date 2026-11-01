
import Image from "next/image";
import styles from "./page.module.css";
import ContactBanner from "@/components/ContactBaner/ContactBaner";
import AboutSocialProof from "./AboutSocialProof";


export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>POZNAJMY SIĘ</p>
          <h1>O mnie</h1>
          <span className={styles.goldLine} />

          <h2>
            Wierzę, że nawet w trudnej sytuacji można znaleźć przestrzeń
            do rozmowy i porozumienia.
          </h2>

          <p className={styles.intro}>
            Nazywam się Beata Walczakiewicz i jestem mediatorką. Pomagam osobom
            w sytuacjach konfliktowych znaleźć rozwiązania, które
            uwzględniają potrzeby wszystkich stron i pozwalają spojrzeć
            w przyszłość z większym spokojem.
          </p>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/images/o-mnie-portrait.png"
            alt="Portret mediatorki"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className={styles.experience}>
  <div className={styles.experienceIntro}>
    <h2>Doświadczenie i kwalifikacje</h2>
    <span className={styles.goldLine} />
    <p>
Wiedza, odpowiednie przygotowanie i ciągły rozwój stanowią ważną podstawę pracy mediatora. Każde doświadczenie pozwala lepiej rozumieć złożoność konfliktów i potrzeby osób, które szukają porozumienia. Dlatego stawiam na rozwijanie kompetencji, uważne słuchanie i indywidualne podejście do każdej sprawy. </p>
  </div>

  <div className={styles.timeline}>
    <article className={styles.timelineItem}>
      <span className={styles.timelineDot} />
      <div className={styles.qualificationIcon}><svg
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M2 9 12 4l10 5-10 5L2 9Z" />
  <path d="M6 11v5c3.5 3 8.5 3 12 0v-5" />
  <path d="M22 9v6" />
</svg></div>
      <div>
        <h3>[Nazwa kierunku lub wykształcenia]</h3>
        <p>[Nazwa uczelni lub instytucji]</p>
      </div>
    </article>

    <article className={styles.timelineItem}>
      <span className={styles.timelineDot} />
      <div className={styles.qualificationIcon}><svg
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <rect x="4" y="3" width="16" height="14" rx="1" />
  <path d="M8 7h8M8 11h8" />
  <circle cx="16" cy="17" r="3" />
  <path d="m14.5 19.5-.5 3 2-1 2 1-.5-3" />
</svg></div>
      <div>
        <h3>[Kwalifikacje mediatora]</h3>
        <p>[Nazwa kursu, szkolenia lub certyfikatu]</p>
      </div>
    </article>

    <article className={styles.timelineItem}>
      <span className={styles.timelineDot} />
      <div className={styles.qualificationIcon}><svg
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <circle cx="9" cy="6" r="2.5" />
  <circle cx="17" cy="8" r="2" />
  <path d="M4 20v-2a5 5 0 0 1 10 0v2" />
  <path d="M15 14a4 4 0 0 1 5 4v2h-4" />
</svg></div>
      <div>
        <h3>[Doświadczenie zawodowe]</h3>
        <p>[Zakres praktyki lub rodzaje prowadzonych mediacji]</p>
      </div>
    </article>

    <article className={styles.timelineItem}>
      <span className={styles.timelineDot} />
      <div className={styles.qualificationIcon}><svg
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  viewBox="0 0 34 34"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M6 28V7" />
  <path d="M6 28H29" />

  <path d="M10 28V22H14V28" />
  <path d="M17 28V17H21V28" />
  <path d="M24 28V12H28V28" />

  <path d="M9 21L16 16L20 18L29 7" />
  <path d="M23 7H29V13" />
</svg></div>
      <div>
        <h3>Ciągły rozwój</h3>
        <p>
          [Informacje o szkoleniach, superwizjach i doskonaleniu
          kompetencji]
        </p>
      </div>
    </article>
  </div>
</section>
      <section className={styles.approach}>
        <p className={styles.eyebrow}>W CO WIERZĘ</p>
        <h2>Moje podejście do mediacji</h2>
        <span className={styles.goldLine} />
        <p className={styles.approachIntro}>
          Mediacja to według mnie przede wszystkim człowiek — jego potrzeby, emocje
          i historia. Wierzę, że każdy konflikt może stać się początkiem lepszego zrozumienia i pozytywnej zmiany.
        </p>

        <div className={styles.values}>
          <article>
            <span className={styles.valueIcon}><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M17 29 5.5 17.8C-1 10.8 8.5 2.5 15.1 9.2L17 11l1.9-1.8c6.6-6.7 16.1 1.6 9.6 8.6L17 29Z" />
</svg></span>
            <h3>Empatia</h3>
            <p>Uważnie słucham i tworzę bezpieczną przestrzeń do rozmowy.</p>
          </article>

          <article>
            <span className={styles.valueIcon}><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M17 5v23M11 29h12M13 8h8" />
  <path d="M6 11h22M8 11l-5 10h10L8 11ZM26 11l-5 10h10l-5-10Z" />
  <path d="M3 21c1 3 9 3 10 0M21 21c1 3 9 3 10 0" />
</svg></span>
            <h3>Bezstronność</h3>
            <p>Dbam o równowagę i szacunek dla potrzeb wszystkich stron.</p>
          </article>

          <article>
            <span className={styles.valueIcon}><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M17 5C9.8 5 4 10.2 4 16.5c0 3.2 1.5 6 4 8l-1 5 7-3.1c1.3.4 2.6.6 4 .6 7.2 0 13-4.7 13-10.5S24.2 5 17 5Z" />
</svg></span>
            <h3>Dialog</h3>
            <p>Wierzę w siłę otwartej i szczerej rozmowy.</p>
          </article>

          <article>
            <span className={styles.valueIcon}><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M29 4C17 5 7 10 6 20c-.5 5 3 8 7 7C23 25 28 15 29 4Z" />
  <path d="M4 30 23 10" />
  <path d="M13 21l-1-7M18 16l6 1" />
</svg></span>
            <h3>Rozwiązania</h3>
            <p>Wspieram w wypracowaniu dobrych, trwałych rozwiązań.</p>
          </article>
        </div>
      </section>

      <AboutSocialProof />

<ContactBanner />
    </main>
  );
}