import styles from "./MediationDetails.module.css";

const mediationAreas = [
  {
    id: "rodzinne",
    number: "01",
    title: "Mediacje",
    accent: "rodzinne",
    image: "/images/mediacje-rodzinne1.png",
    alt: "Przygotowane miejsce do rozmowy podczas mediacji rodzinnej",
    description:
      "Pomagam w spokojnym i konstruktywnym wypracowaniu porozumień w sprawach rodzinnych, z uwzględnieniem potrzeb wszystkich stron, w tym przede wszystkim dzieci.",
    imageFirst: true,
    ctaTitle: "Czas na pierwszy krok",
    ctaDescription:
      "Czasem wystarczy rozmowa, aby dostrzec nowe możliwości. Wspólnie przyjrzyjmy się Twojej sytuacji i poszukajmy drogi do porozumienia.",
    ctaButton: "Porozmawiajmy",
    items: [
      {
        icon: "family",
        title: "Rozwód i separacja",
        description:
          "Wsparcie w ustaleniu zasad rozstania i dalszej współpracy rodzicielskiej.",
      },
      {
        icon: "children",
        title: "Kontakty z dziećmi",
        description:
          "Ustalenie planu opieki, sposobu kontaktów i ważnych spraw wychowawczych.",
      },
      {
        icon: "document",
        title: "Alimenty",
        description:
          "Wypracowanie realnych i sprawiedliwych rozwiązań finansowych.",
      },
      {
        icon: "home",
        title: "Podział majątku",
        description:
          "Pomoc w osiągnięciu porozumienia dotyczącego majątku wspólnego.",
      },
      {
        icon: "heart",
        title: "Inne kwestie rodzinne",
        description:
          "Między innymi opieka naprzemienna, relacje z nowym partnerem i sprawy międzypokoleniowe.",
      },
    ],
  },
  {
    id: "cywilne",
    number: "02",
    title: "Mediacje",
    accent: "cywilne",
    image: "/images/mediacje-cywilne1.png",
    alt: "Osoby uzgadniające warunki porozumienia przy stole",
    description:
      "Wspieram w rozwiązywaniu sporów cywilnych, pomagając stronom znaleźć praktyczne i satysfakcjonujące rozwiązania bez konieczności długotrwałego postępowania sądowego.",
    imageFirst: false,
    ctaTitle: "Znajdźmy rozwiązanie",
    ctaDescription:
      "Każda sytuacja ma swoją historię i wymaga indywidualnego podejścia. Zapraszam do rozmowy o możliwościach, jakie daje mediacja.",
    ctaButton: "Poznaj możliwości",
    items: [
      {
        icon: "home",
        title: "Spory sąsiedzkie",
        description:
          "Konflikty dotyczące granic, użytkowania nieruchomości i innych kwestii sąsiedzkich.",
      },
      {
        icon: "document",
        title: "Umowy i zobowiązania",
        description:
          "Niewykonanie lub nienależyte wykonanie umów, spory o zapłatę.",
      },
      {
        icon: "money",
        title: "Roszczenia majątkowe",
        description:
          "Odszkodowania, zadośćuczynienia i zwrot kosztów.",
      },
      {
        icon: "building",
        title: "Spory o nieruchomości",
        description:
          "Użytkowanie, współwłasność, służebności i najem.",
      },
      {
        icon: "chat",
        title: "Inne sprawy cywilne",
        description:
          "Szeroki zakres sporów pomiędzy osobami fizycznymi.",
      },
    ],
  },
  {
    id: "pracownicze",
    number: "03",
    title: "Mediacje",
    accent: "pracownicze",
    image: "/images/mediacje-pracownicze1.png",
    alt: "Dokumenty na biurku w spokojnym otoczeniu biurowym",
    description:
      "Pomagam w budowaniu lepszej komunikacji i rozwiązywaniu konfliktów w miejscu pracy. Mediacje wspierają tworzenie środowiska pracy, w którym łatwiej znaleźć rozwiązanie trudnej sytuacji.",
    imageFirst: true,
    ctaTitle: "Zacznijmy od rozmowy",
    ctaDescription:
      "Nie musisz od razu znać odpowiedzi. Pierwszym krokiem może być spokojna rozmowa, podczas której przyjrzymy się możliwym rozwiązaniom.",
    ctaButton: "Umów rozmowę",
    items: [
      {
        icon: "family",
        title: "Konflikty z pracodawcą",
        description:
          "Spory dotyczące warunków zatrudnienia, wynagrodzeń i organizacji pracy.",
      },
      {
        icon: "family",
        title: "Spory w zespole",
        description:
          "Nieporozumienia między pracownikami i konflikty komunikacyjne.",
      },
      {
        icon: "document",
        title: "Warunki zatrudnienia",
        description:
          "Zmiana stanowiska, zakres obowiązków i ocena pracy.",
      },
      {
        icon: "settings",
        title: "Rozwiązanie umowy",
        description:
          "Rozmowy dotyczące warunków zakończenia współpracy.",
      },
      {
        icon: "chat",
        title: "Mobbing i dyskryminacja",
        description:
          "Wsparcie w poszukiwaniu sposobu rozwiązania trudnej sytuacji w pracy.",
      },
      {
        icon: "shield",
        title: "Inne kwestie pracownicze",
        description:
          "Dostosowanie procesu mediacji do indywidualnych potrzeb stron.",
      },
    ],
  },
  {
    id: "gospodarcze",
    number: "04",
    title: "Mediacje",
    accent: "gospodarcze",
    image: "/images/mediacje-gospodarcze1.png",
    alt: "Dokumenty finansowe i materiały biznesowe na biurku",
    description:
      "Wspieram przedsiębiorców w rozwiązywaniu sporów biznesowych, pomagając znaleźć porozumienie, które pozwoli kontynuować współpracę i chronić interesy obu stron.",
    imageFirst: false,
    ctaTitle: "Porozumienie zaczyna się tutaj",
    ctaDescription:
      "Czasem najtrudniej jest zrobić pierwszy krok. Jeśli zastanawiasz się, czy mediacja będzie odpowiednim rozwiązaniem, zapraszam do kontaktu.",
    ctaButton: "Skontaktuj się",
    items: [
      {
        icon: "document",
        title: "Spory między firmami",
        description:
          "Niewykonanie umowy, opóźnienia i jakość realizacji usług.",
      },
      {
        icon: "document",
        title: "Konflikty w umowach",
        description:
          "Negocjacje i realizacja warunków współpracy.",
      },
      {
        icon: "chart",
        title: "Rozliczenia finansowe",
        description:
          "Należności, faktury i kary umowne.",
      },
      {
        icon: "family",
        title: "Warunki współpracy",
        description:
          "Ustalenie zasad dalszej współpracy i zmiana warunków.",
      },
      {
        icon: "handshake",
        title: "Zakończenie współpracy",
        description:
          "Negocjacje warunków lub rozwiązanie sporów po zakończeniu relacji.",
      },
      {
        icon: "shield",
        title: "Inne spory gospodarcze",
        description:
          "Dostosowanie mediacji do specyfiki branży i potrzeb stron.",
      },
    ],
  },
];

function MediationIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<string, React.ReactNode> = {
    family: (
      <>
        <circle cx="24" cy="12" r="4" />
        <circle cx="11" cy="17" r="3.5" />
        <circle cx="37" cy="17" r="3.5" />
        <path d="M16 36v-3a8 8 0 0 1 16 0v3" />
        <path d="M3 35v-3a8 8 0 0 1 11-7" />
        <path d="M34 25a8 8 0 0 1 11 7v3" />
      </>
    ),
    children: (
      <>
        <circle cx="17" cy="13" r="4" />
        <circle cx="32" cy="15" r="3.5" />
        <path d="M9 35v-7a8 8 0 0 1 16 0v7" />
        <path d="M27 27a6 6 0 0 1 12 0v8" />
        <path d="M17 25v10M32 27v8" />
      </>
    ),
    document: (
      <>
        <path d="M13 5h17l6 6v32H13z" />
        <path d="M30 5v7h6" />
        <path d="M19 21h11M19 27h11M19 33h8" />
      </>
    ),
    home: (
      <>
        <path d="m5 22 19-16 19 16" />
        <path d="M10 19v23h28V19" />
        <path d="M20 42V29h8v13" />
      </>
    ),
    heart: (
      <>
        <path d="M24 40 8 25C-1 15 12 4 21 14l3 3 3-3c9-10 22 1 13 11z" />
        <path d="M17 26h5l3-6 4 12 3-6h4" />
      </>
    ),
    money: (
      <>
        <rect x="5" y="12" width="38" height="25" rx="2" />
        <circle cx="24" cy="24.5" r="7" />
        <path d="M10 17h3M35 32h3M24 21v7M21 24h6" />
      </>
    ),
    building: (
      <>
        <path d="M7 42V12l17-7 17 7v30" />
        <path d="M3 42h42M15 18h5M28 18h5M15 26h5M28 26h5M21 42V33h6v9" />
      </>
    ),
    chat: (
      <>
        <path d="M6 9h36v25H24l-10 8v-8H6z" />
        <path d="M14 21h2M23 21h2M32 21h2" />
      </>
    ),
    settings: (
      <>
        <circle cx="24" cy="24" r="8" />
        <path d="m24 5 3 4 5 1 1 5 4 3-2 5 2 5-4 3-1 5-5 1-3 4-4-4-5-1-1-5-4-3 2-5-2-5 4-3 1-5 5-1z" />
      </>
    ),
    shield: (
      <>
        <path d="M24 5 39 11v11c0 10-6 16-15 21C15 38 9 32 9 22V11z" />
        <path d="m17 24 5 5 10-11" />
      </>
    ),
    chart: (
      <>
        <path d="M7 42h35" />
        <rect x="10" y="27" width="6" height="15" />
        <rect x="21" y="18" width="6" height="24" />
        <rect x="32" y="7" width="6" height="35" />
      </>
    ),
    handshake: (
      <>
        <path d="m4 17 8-7 10 2 5-2 7 3 10 7-7 9-7-4-6 5-6-4-6 2-8-11z" />
        <path d="m12 10 8 8M22 12l-7 8M27 10l-7 9M21 30l-5-5M27 26l-5-5" />
      </>
    ),
  };

  return (
    <span className={styles.itemIcon} aria-hidden="true">
      <svg viewBox="0 0 48 48" {...common}>
        {icons[name] ?? icons.document}
      </svg>
    </span>
  );
}

export default function MediationDetails() {
  return (
    <div className={styles.details}>
      {mediationAreas.map((area) => (
        <section id={area.id} className={styles.area} key={area.id}>
          <div
            className={`${styles.areaInner} ${
              area.imageFirst ? styles.imageFirst : styles.textFirst
            }`}
          >
            <div className={styles.visualColumn}>
              <div className={styles.heading}>
                <span className={styles.number}>{area.number}</span>
                <h2>
                  {area.title} <span>{area.accent}</span>
                </h2>
              </div>

              <div className={styles.photo}>
                <img src={area.image} alt={area.alt} loading="lazy" />
              </div>
            </div>

            <div className={styles.textColumn}>
              <p className={styles.description}>{area.description}</p>

              <ul className={styles.items}>
                {area.items.map((item, index) => (
                  <li key={`${area.id}-${index}`} className={styles.item}>
                    <MediationIcon name={item.icon} />

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.sectionCta}>
                <h3>{area.ctaTitle}</h3>
                <p>{area.ctaDescription}</p>

                <a href="#kontakt-banner" className={styles.sectionCtaButton}>
                  {area.ctaButton}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
