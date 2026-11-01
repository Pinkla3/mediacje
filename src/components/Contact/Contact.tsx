"use client";

import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
const [submitted, setSubmitted] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
  consent: false,
});

const errors = {
  name: !formData.name.trim()
    ? "Wpisz imię i nazwisko."
    : "",
  email: !formData.email.trim()
    ? "Wpisz adres e-mail."
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? "Wpisz poprawny adres e-mail."
      : "",
  message: !formData.message.trim()
    ? "Wpisz treść wiadomości."
    : "",
  consent: !formData.consent
    ? "Zaakceptuj politykę prywatności, aby kontynuować."
    : "",
};

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setSubmitted(true);

  if (Object.values(errors).some(Boolean)) {
    return;
  }

  // Wysyłkę podłączymy później.
}

  return (
    <section className={styles.section} id="kontakt">
      <div className={styles.container}>
        <div className={styles.photo}>
          <div className={styles.photoOverlay} />
        </div>

        <div className={styles.info}>
          <p className={styles.eyebrow}>KONTAKT</p>

          <h2>Skontaktuj się ze mną</h2>

          <p className={styles.description}>
            Umów się na spotkanie lub zadaj pytanie.
            Chętnie odpowiem i pomogę dobrać odpowiednią
            formę mediacji do Twojej sytuacji.
          </p>

          <div className={styles.details}>
            <a href="tel:+48600123456" className={styles.detail}>
              <span className={styles.detailIcon}>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-2-2 3a15 15 0 0 1-7-7l3-2-2-5Z" />
  </svg>
</span>
              <span>
                <strong>+48 600 123 456</strong>
              </span>
            </a>

            <a href="mailto:kontakt@mediacje.pl" className={styles.detail}>
              <span className={styles.detailIcon}>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
</span>
              <span>
                <strong>kontakt@mediacje.pl</strong>
              </span>
            </a>

            <div className={styles.detail}>
             <span className={styles.detailIcon}>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
</span>
              <span>
                <strong>Szczecin i okolice</strong>
                <small>Możliwość spotkania stacjonarnie lub online</small>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <h3>Napisz do mnie</h3>

         <form className={styles.form} onSubmit={handleSubmit} noValidate>
  <div className={styles.field}>
    <input
      type="text"
      name="name"
      placeholder="Imię i nazwisko"
      aria-label="Imię i nazwisko"
      aria-invalid={submitted && !!errors.name}
      className={submitted && errors.name ? styles.invalid : ""}
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
    />
    {submitted && errors.name && (
      <p className={styles.error}>{errors.name}</p>
    )}
  </div>

  <div className={styles.field}>
    <input
      type="email"
      name="email"
      placeholder="Adres e-mail"
      aria-label="Adres e-mail"
      aria-invalid={submitted && !!errors.email}
      className={submitted && errors.email ? styles.invalid : ""}
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
    />
    {submitted && errors.email && (
      <p className={styles.error}>{errors.email}</p>
    )}
  </div>

  <input
    type="text"
    name="subject"
    placeholder="Temat (opcjonalnie)"
    aria-label="Temat"
    value={formData.subject}
    onChange={(e) =>
      setFormData({ ...formData, subject: e.target.value })
    }
  />

  <div className={styles.field}>
    <textarea
      name="message"
      rows={4}
      placeholder="Wiadomość"
      aria-label="Wiadomość"
      aria-invalid={submitted && !!errors.message}
      className={submitted && errors.message ? styles.invalid : ""}
      value={formData.message}
      onChange={(e) =>
        setFormData({ ...formData, message: e.target.value })
      }
    />
    {submitted && errors.message && (
      <p className={styles.error}>{errors.message}</p>
    )}
  </div>

  <div className={styles.field}>
    <label className={styles.consent}>
      <input
        type="checkbox"
        checked={formData.consent}
        aria-invalid={submitted && !!errors.consent}
        onChange={(e) =>
          setFormData({ ...formData, consent: e.target.checked })
        }
      />
      <span>
        Zapoznałem/am się z{" "}
        <a href="/polityka-prywatnosci" target="_blank">
          polityką prywatności
        </a>{" "}
        i akceptuję zasady przetwarzania danych w celu obsługi mojego
        zapytania.
      </span>
    </label>
    {submitted && errors.consent && (
      <p className={styles.error}>{errors.consent}</p>
    )}
  </div>

  <button type="submit" className={styles.submit}>
    Wyślij wiadomość <span>→</span>
  </button>
</form>
        </div>
      </div>
    </section>
  );
}