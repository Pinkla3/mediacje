import styles from "./ContactDetails.module.css";

const contactItems = [
  {
    title: "Telefon",
    description: "+48 123 456 789",
    extra: "Pon. – Pt. 9:00 – 17:00",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 3.5h3l1.5 4.2-2 1.5a14 14 0 0 0 5.7 5.7l1.5-2 4.2 1.5v3c0 1.1-.9 2-2 2A15.5 15.5 0 0 1 4.6 5.5c0-1.1.9-2 2-2Z" />
      </svg>
    ),
  },
  {
    title: "E-mail",
    description: "kontakt@mediacje.pl",
    extra: "Odpowiadam w ciągu 24 godzin.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    title: "Adres",
    description: "ul. Przykładowa 12/3",
    extra: "70-001 Szczecin",
    note: "Spotkania stacjonarne i online",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Umów spotkanie",
    description: "Skorzystaj z formularza",
    extra: "lub napisz wiadomość.",
    href: "#formularz",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="16" rx="1" />
        <path d="M7.5 3v4M16.5 3v4M3.5 10h17M8 14h3M8 17h6" />
      </svg>
    ),
  },
];

export default function ContactDetails() {
  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <span className={styles.eyebrow}>DANE KONTAKTOWE</span>

      <h2 id="contact-heading">Zapraszam do kontaktu</h2>

      <p className={styles.intro}>
        Jeśli rozważasz mediację, masz pytania dotyczące procesu lub
        chcesz umówić spotkanie – skontaktuj się ze mną w dogodny
        dla Ciebie sposób.
      </p>

      <div className={styles.contactList}>
        {contactItems.map((item) => (
          <div className={styles.contactItem} key={item.title}>
            <div className={styles.icon} aria-hidden="true">
              {item.icon}
            </div>

            <div className={styles.details}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.extra}</p>
              {"note" in item && item.note && (
                <p>{item.note}</p>
              )}

              {"href" in item && item.href && (
                <a href={item.href} className={styles.link}>
                  Przejdź do formularza →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}