import styles from "./ContactDetails.module.css";

const contactItems = [
  {
    title: "Telefon",
    description: "+48 669 422 091",
    extra: "Skontaktuj się telefonicznie.",
    href: "tel:+48669422091",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 3.5h3l1.5 4.2-2 1.5a14 14 0 0 0 5.7 5.7l1.5-2 4.2 1.5v3c0 1.1-.9 2-2 2A15.5 15.5 0 0 1 4.6 5.5c0-1.1.9-2 2-2Z" />
      </svg>
    ),
  },
  {
    title: "E-mail",
    description: "b.walczakiewicz@gmail.com",
    extra: "Napisz, a odpowiem na Twoją wiadomość.",
    href: "mailto:b.walczakiewicz@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    title: "Adres działalności",
    description: "ul. Krzywoustego 69/5, 70-313 Szczecin",
    extra: "Spotkania stacjonarne po wcześniejszym ustaleniu terminu.",
    note: "Możliwa jest również mediacja online.",
    href: "https://www.google.com/maps/search/?api=1&query=ul.+Krzywoustego+69%2F5%2C+70-313+Szczecin",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "NIP",
    name:" Legal and Art Support Radca Prawny i Mediator Beata Walczakiewicz",
    description: "8513142092",
    extra: "REGON: 521151684",
  note: (
    <>
      Adres do doręczeń:
      <br />
      ul. Orawska 23/45,
      <br />
      70-131 Szczecin
    </>
  ),
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 8h8M8 12h8M8 16h4" />
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

              {item.href ? (
                <a
                  className={styles.value}
                  href={item.href}
                  target={item.href.startsWith("https://") ? "_blank" : undefined}
                  rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                >
                  {item.description}
                  {item.href === "#formularz" && (
                    <span aria-hidden="true"> →</span>
                  )}
                </a>
              ) : (
                <span className={styles.value}>{item.description}</span>
                
              )}
{"name" in item && item.name && (
  <p>{item.name}</p>
)}
              <p>{item.extra}</p>
              {"note" in item && item.note && <p>{item.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
