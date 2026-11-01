"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "./reviews";
import styles from "./AboutSocialProof.module.css";

const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4"];
const certificates = [
  { title: "Certyfikat 1", href: "/certyfikaty/certyfikat-1.pdf" },
  { title: "Certyfikat 2", href: "/certyfikaty/certyfikat-2.pdf" },
  { title: "Certyfikat 3", href: "/certyfikaty/certyfikat-3.pdf" },
  { title: "Certyfikat 4", href: "/certyfikaty/certyfikat-4.pdf" },
];

export default function AboutSocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const total = reviews.length;

  useEffect(() => {
    if (total < 2) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 20000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, total]);

  const previous = () => setActiveIndex((current) => (current - 1 + total) % total);
  const next = () => setActiveIndex((current) => (current + 1) % total);

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(distance) < 45) return;
    if (distance < 0) next();
    else previous();
  };

  return (
    <>
      <section className={styles.testimonials} aria-labelledby="about-reviews-heading">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>GŁOS KLIENTÓW</p>
          <h2 id="about-reviews-heading">Opinie</h2>
          <span className={styles.rule} />
          <p>Każda historia jest inna. Wspólnym celem jest znalezienie porozumienia.</p>
        </div>

        {total > 0 && (
          <div className={styles.carousel}>
            <div className={styles.reviewCard}>
              <div className={styles.reviewPhoto} role="img" aria-label="Przytulne miejsce przygotowane do spokojnej rozmowy">
                <img src="/images/opinie-photo.png" alt="Kubek kawy, notes i książki na jasnym biurku" />
              </div>
              <div
                className={styles.viewport}
                onPointerDown={(event) => { pointerStartX.current = event.clientX; }}
                onPointerUp={handlePointerUp}
                onPointerCancel={() => { pointerStartX.current = null; }}
                aria-live="polite"
              >
                <div
                  className={styles.track}
                  style={{
                    width: `${total * 100}%`,
                    transform: `translateX(-${(activeIndex * 100) / total}%)`,
                  }}
                >
                  {reviews.map((review, index) => (
                    <article
                      className={styles.review}
                      key={`${review.author}-${index}`}
                      style={{ flex: `0 0 ${100 / total}%` }}
                      aria-hidden={index !== activeIndex}
                    >
                      <span className={styles.quote} aria-hidden="true">“</span>
                      <p>{review.text}</p>
                      <span className={styles.reviewRule} />
                      <strong>{review.author}</strong>
                      <span className={styles.reviewRole}>Klientka mediacji</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.controls}>
              <button type="button" onClick={previous} aria-label="Poprzednia opinia">←</button>
              <div className={styles.dots}>
                {reviews.map((review, index) => (
                  <button
                    type="button"
                    key={`${review.author}-dot-${index}`}
                    className={index === activeIndex ? styles.activeDot : ""}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Pokaż opinię ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>
              <button type="button" onClick={next} aria-label="Następna opinia">→</button>
            </div>
          </div>
        )}
      </section>

      <section className={styles.credentialsPartners} aria-label="Certyfikaty i współpraca">
        <div className={styles.columns}>
          <div className={styles.column} aria-labelledby="about-certificates-heading">
            <div className={styles.heading}>
              <p className={styles.eyebrow}>KWALIFIKACJE</p>
              <h2 id="about-certificates-heading">Certyfikaty</h2>
              <span className={styles.rule} />
              <p>Dokumenty potwierdzające ukończone szkolenia i zdobyte kwalifikacje.</p>
            </div>
            <div className={styles.certificateGrid}>
              {certificates.map((certificate) => (
                <a
                  className={styles.certificateCard}
                  href={certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={certificate.href}
                >
                  <span className={styles.certificateIcon} aria-hidden="true">PDF</span>
                  <span className={styles.certificateTitle}>{certificate.title}</span>
                  <span className={styles.certificateAction}>Zobacz dokument <span aria-hidden="true">↗</span></span>
                </a>
              ))}
            </div>
          </div>

          <span className={styles.columnDivider} aria-hidden="true" />

          <div className={styles.column} aria-labelledby="about-partners-heading">
            <div className={styles.heading}>
              <p className={styles.eyebrow}>PARTNERZY</p>
              <h2 id="about-partners-heading">Współpracuję z:</h2>
              <span className={styles.rule} />
              <p>Współpraca oparta na zaufaniu i wspólnych wartościach.</p>
            </div>
            <div className={styles.partnerGrid}>
              {partners.map((partner) => (
                <div className={styles.partnerPlaceholder} key={partner}>
                  <span className={styles.partnerMark} aria-hidden="true">✳</span>
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
