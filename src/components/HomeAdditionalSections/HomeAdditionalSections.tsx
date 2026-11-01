"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HomeAdditionalSections.module.css";
import { reviews } from "./reviews";

const facts = [
  {
    number: "01",
    title: "Nie każdą sprawę rozstrzyga sąd",
    text: "Mediować można również sprawy, które nie mają typowego sądowego rozwiązania, np. ustalenie kontaktów z psem w toku rozwodu.",
  },
  {
    number: "02",
    title: "Ugoda może mieć moc prawną",
    text: "Ugoda zawarta przed mediatorem, po zatwierdzeniu przez sąd, może uzyskać moc prawną i podlegać wykonaniu.",
  },
  {
    number: "03",
    title: "Oszczędzasz czas",
    text: "Postępowania sądowe potrafią trwać długo. Mediacja może pomóc wypracować porozumienie nawet w ciągu jednego lub dwóch tygodni.",
  },
  {
    number: "04",
    title: "Możesz mediować zdalnie",
    text: "Spotkanie mediacyjne może odbyć się online, bez konieczności wychodzenia z domu.",
  },
  {
    number: "05",
    title: "Wspólnie ustalacie terminy",
    text: "Uczestnicy mediacji wspólnie uzgadniają dogodne terminy spotkań.",
  },
  {
    number: "06",
    title: "Nie obowiązuje dress code",
    text: "Na mediację możesz przyjść w ubraniu, w którym czujesz się swobodnie.",
  },
  {
    number: "07",
    title: "To Ty współdecydujesz",
    text: "W mediacji masz wpływ na sposób rozwiązania konfliktu i możesz współtworzyć porozumienie.",
  },
  {
    number: "08",
    title: "Relacje mają znaczenie",
    text: "Mediacja pomaga budować i zachowywać dobre relacje — w rodzinie, grupie, związku czy środowisku biznesowym.",
  },
];

function FactIcon({ name }: { name: string }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const drawings: Record<string, React.ReactNode> = {
    mediation: (
      <>
        <path d="M4.2 6.2h10.6a2 2 0 0 1 2 2v5.1a2 2 0 0 1-2 2H9l-4.8 3.3v-3.3h0a2 2 0 0 1-2-2V8.2a2 2 0 0 1 2-2Z" />
        <path d="M8 3.4h11.7a2 2 0 0 1 2 2v6.2a2 2 0 0 1-2 2h-.8" />
        <path d="M6.7 9.7h7M6.7 12.1h4.8" />
      </>
    ),
    agreement: (
      <>
        <path d="M6 2.8h8.5l4.3 4.3v14.1H6z" />
        <path d="M14.5 3v4.4h4.2M9 11.2h6.4M9 14.5h4.5" />
        <path d="m13.1 18 1.8 1.8 4-4.1" />
      </>
    ),
    time: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6.3v5.8l3.8 2.1" />
      </>
    ),
    online: (
      <>
        <rect x="4.5" y="4" width="15" height="12" rx="1" />
        <path d="M2.8 19.5h18.4l-1.8-2.5H4.6z" />
        <path d="M8.5 7.5h7" />
      </>
    ),
    calendar: (
      <>
        <rect x="3.8" y="5.2" width="16.4" height="15.1" rx="1" />
        <path d="M8 3.2v4M16 3.2v4M3.8 9.4h16.4M8 13h.1M12 13h.1M16 13h.1M8 16.7h.1M12 16.7h.1" />
      </>
    ),
    dress: (
      <>
        <path d="m8.2 4 3.8 2 3.8-2 4 3-2.1 4-2.2-1.2v10H8.5v-10l-2.2 1.2-2.1-4z" />
        <path d="m8.2 4 1.3 4h5l1.3-4M10 6.7h4" />
      </>
    ),
    coDecision: (
      <>
        <path d="M3.2 6.2h10.5a2 2 0 0 1 2 2v4.2a2 2 0 0 1-2 2H8l-3.8 2.8v-2.8h-1a2 2 0 0 1-2-2V8.2a2 2 0 0 1 2-2Z" />
        <path d="M10 3.5h10a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2h-.5" />
        <path d="m8.2 10.1 2 2 3.7-4" />
      </>
    ),
    relationships: (
      <path d="M20.2 8.6c0 5-8.2 10.8-8.2 10.8S3.8 13.6 3.8 8.6a4.6 4.6 0 0 1 8.2-2.7 4.6 4.6 0 0 1 8.2 2.7Z" />
    ),
  };

  return (
    <span className={styles.factIcon} aria-hidden="true">
      <svg viewBox="0 0 24 24" {...stroke}>
        {drawings[name] ?? drawings.mediation}
      </svg>
    </span>
  );
}

function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const total = reviews.length;

  const previous = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  // Automatyczna zmiana co 20 sekund; ręczna nawigacja resetuje licznik.
  useEffect(() => {
    if (total < 2) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 20000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, total]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;

    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance < 0) next();
    else previous();
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
  };

  if (total === 0) return null;

  return (
    <div className={styles.reviewCarousel}>
      <div
        className={styles.reviewViewport}
        aria-live="polite"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <div
          className={styles.reviewTrack}
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${(activeIndex * 100) / total}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <article
              className={styles.testimonialPlaceholder}
              key={`${review.author}-${index}`}
              style={{ flex: `0 0 ${100 / total}%` }}
              aria-hidden={index !== activeIndex}
            >
              <span className={styles.quoteMark} aria-hidden="true">“</span>
              <p className={styles.reviewText}>{review.text}</p>
              <span className={styles.reviewDivider} aria-hidden="true" />
              <span className={styles.reviewAuthor}>{review.author}</span>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.carouselControls}>
        <button type="button" onClick={previous} aria-label="Poprzednia opinia">
          <span aria-hidden="true">←</span>
        </button>
        <div className={styles.carouselDots}>
          {reviews.map((review, index) => (
            <button
              type="button"
              key={`${review.author}-${index}`}
              className={index === activeIndex ? styles.activeDot : ""}
              onClick={() => goTo(index)}
              aria-label={`Pokaż opinię ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Następna opinia">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function PartnerLogoPlaceholder() {
  return (
    <div className={styles.logoPlaceholder}>
      <svg viewBox="0 0 72 48" aria-hidden="true">
        <path d="M36 40C24 34 20 23 25 12c6 2 10 7 11 14 1-7 5-12 11-14 5 11 1 22-11 28Z" />
        <path d="M36 40C20 41 10 32 10 21c8-1 16 3 21 11M36 40c16 1 26-8 26-19-8-1-16 3-21 11" />
        <path d="M36 40V15" />
      </svg>
      <span>LOGOTYP</span>
    </div>
  );
}

export default function HomeAdditionalSections() {
  return (
    <>
      <section className={styles.factsSection} aria-labelledby="facts-heading">
        <div className={styles.sectionHeader}>
<span className={styles.eyebrow}>WARTO WIEDZIEĆ:</span>
<span className={styles.headingRule} aria-hidden="true" />
<h2 id="facts-heading">Czy wiesz, że...</h2>
        
          <p>
            Mediacja daje więcej możliwości, niż może się wydawać.
            Poznaj kilka faktów, które pomogą Ci spojrzeć na nią z innej perspektywy.
          </p>
        </div>

        <div className={styles.factsGrid}>
          {facts.map((fact) => (
            <article className={styles.factCard} key={fact.number}>
              <div className={styles.factTop}>
                <span className={styles.factNumber}>{fact.number}<i aria-hidden="true" /></span>
                <FactIcon name={["mediation", "agreement", "time", "online", "calendar", "dress", "coDecision", "relationships"][Number(fact.number) - 1]} />
              </div>
              <h3>{fact.title}</h3>
              <p>{fact.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.factsCta}>
  <span className={styles.ctaLine} aria-hidden="true" />
  <a href="/umow-spotkanie">
    Postaw na mediację!
    <span aria-hidden="true">→</span>
  </a>
  <span className={styles.ctaLine} aria-hidden="true" />
</div>
      </section>

      <section className={styles.reviewsPartnersSection} aria-label="Opinie i partnerzy">
        <div className={styles.reviewsPartnersGrid}>
          <div className={styles.testimonialsSection} aria-labelledby="testimonials-heading">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>
                <span className={styles.eyebrow}>GŁOS KLIENTÓW</span>
              </div>
              <h2 id="testimonials-heading">Opinie</h2>
              <p>Doświadczenia osób, które skorzystały z mediacji.</p>
            </div>
            <ReviewCarousel />
          </div>

          <span className={styles.sectionDivider} aria-hidden="true" />
          <div className={styles.cooperationSection} aria-labelledby="cooperation-heading">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>
                <span className={styles.eyebrow}>PARTNERZY</span>
              </div>
              <h2 id="cooperation-heading">Współpracuję z:</h2>
            </div>
            <div className={styles.logosGrid}>
              {[1, 2, 3, 4].map((item) => (
                <PartnerLogoPlaceholder key={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
