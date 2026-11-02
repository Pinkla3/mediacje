"use client";

import { useEffect, useState, type FormEvent } from "react";
import styles from "./AppointmentForm.module.css";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  privacy?: string;
};

type ToastType = "success" | "error";

type AppointmentFormProps = {
  /** Wyświetla sam formularz, bez osobnej sekcji i nagłówka strony. */
  embedded?: boolean;
};

export default function AppointmentForm({
  embedded = false,
}: AppointmentFormProps) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [toastType, setToastType] = useState<ToastType>("success");

  useEffect(() => {
    if (!showSuccessPopup) return;

    const timer = window.setTimeout(() => {
      setShowSuccessPopup(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [showSuccessPopup]);

  function clearError(field: keyof FormErrors) {
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  function showToast(type: ToastType) {
    setToastType(type);
    setShowSuccessPopup(false);
    window.requestAnimationFrame(() => setShowSuccessPopup(true));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const newErrors: FormErrors = {};

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const privacy = formData.get("privacy") === "on";

    if (!name) newErrors.name = "To pole jest wymagane.";

    if (!email) {
      newErrors.email = "To pole jest wymagane.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Podaj prawidłowy adres e-mail.";
    }

    if (!subject) newErrors.subject = "To pole jest wymagane.";
    if (!message) newErrors.message = "To pole jest wymagane.";
    if (!privacy) newErrors.privacy = "Zaznaczenie zgody jest wymagane.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("");
      showToast("error");
      return;
    }

    setStatus("");
    setShowSuccessPopup(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, subject, message, privacy }),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        const errorMessage =
          result.message || "Nie udało się wysłać wiadomości. Spróbuj ponownie.";
        setStatus(errorMessage);
        showToast("error");
        return;
      }

      form.reset();
      setErrors({});

      if (result.confirmationSent === false) {
        setStatus(
          "Wiadomość została wysłana, ale nie udało się wysłać potwierdzenia na Twój adres e-mail. Twoje zgłoszenie zostało przyjęte."
        );
      } else {
        setStatus("Dziękuję! Wiadomość została wysłana.");
      }
      showToast("success");
    } catch {
      const errorMessage =
        "Nie udało się wysłać wiadomości. Sprawdź połączenie i spróbuj ponownie.";
      setStatus(errorMessage);
      showToast("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const form = (
    <form
      className={`${styles.form} ${embedded ? styles.embedded : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.labelText}>
            Imię i nazwisko <span className={styles.required}>*</span>
          </span>
          <input
            className={errors.name ? styles.inputError : ""}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Wpisz swoje imię i nazwisko"
            maxLength={150}
            required
            aria-invalid={Boolean(errors.name)}
            onChange={() => clearError("name")}
          />
          {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
        </label>

        <label className={styles.field}>
          <span className={styles.labelText}>Numer telefonu</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Wpisz numer telefonu"
            maxLength={40}
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.labelText}>
            Adres e-mail <span className={styles.required}>*</span>
          </span>
          <input
            className={errors.email ? styles.inputError : ""}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="twoj@email.pl"
            maxLength={254}
            required
            aria-invalid={Boolean(errors.email)}
            onChange={() => clearError("email")}
          />
          {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
        </label>

        <label className={styles.field}>
          <span className={styles.labelText}>
            Temat wiadomości <span className={styles.required}>*</span>
          </span>
          <select
            className={errors.subject ? styles.inputError : ""}
            name="subject"
            defaultValue=""
            required
            aria-invalid={Boolean(errors.subject)}
            onChange={() => clearError("subject")}
          >
            <option value="" disabled>Wybierz temat</option>
            <option value="rodzinne">Mediacje rodzinne</option>
            <option value="cywilne">Mediacje cywilne</option>
            <option value="gospodarcze">Mediacje gospodarcze</option>
            <option value="inne">Inna sprawa</option>
          </select>
          {errors.subject && <span className={styles.fieldError}>{errors.subject}</span>}
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.labelText}>
          Treść wiadomości <span className={styles.required}>*</span>
        </span>
        <textarea
          className={errors.message ? styles.inputError : ""}
          name="message"
          rows={6}
          maxLength={10000}
          placeholder="Napisz, w czym mogę Ci pomóc..."
          required
          aria-invalid={Boolean(errors.message)}
          onChange={() => clearError("message")}
        />
        {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
      </label>

      <div>
        <label className={styles.consent}>
          <input
            className={errors.privacy ? styles.checkboxError : ""}
            type="checkbox"
            name="privacy"
            required
            aria-invalid={Boolean(errors.privacy)}
            onChange={() => clearError("privacy")}
          />
          <span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na wiadomość. Szczegółowe informacje znajdują się w{" "}
            <a href="/polityka-prywatnosci">Polityce prywatności</a>.
          </span>
        </label>
        {errors.privacy && <p className={styles.fieldError}>{errors.privacy}</p>}
      </div>

      <button className={styles.submit} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        {!isSubmitting && <span aria-hidden="true"> →</span>}
      </button>

      <div className={styles.statusSlot} aria-live="polite">
        {status && (
          <p
            className={`${styles.status} ${
              status.startsWith("Dziękuję") || status.startsWith("Wiadomość została wysłana")
                ? styles.statusSuccess
                : styles.statusError
            }`}
            role="status"
          >
            {status}
          </p>
        )}
      </div>
    </form>
  );

  return (
    <>
      {embedded ? (
        form
      ) : (
        <section className={styles.section} id="formularz">
          <div className={styles.intro}>
            <span className={styles.eyebrow}>NAPISZ DO MNIE</span>
            <h2>Formularz kontaktowy</h2>
            <p>Wypełnij formularz, a skontaktuję się z Tobą w najbliższym możliwym terminie.</p>
          </div>
          {form}
        </section>
      )}

      {showSuccessPopup && (
        <div
          className={`${styles.toast} ${
            toastType === "success" ? styles.toastSuccess : styles.toastError
          }`}
          role="status"
          aria-live="polite"
        >
          <span className={styles.toastIcon} aria-hidden="true">
            {toastType === "success" ? "✓" : "!"}
          </span>
          <div className={styles.toastContent}>
            <strong>{toastType === "success" ? "Wiadomość wysłana!" : "Nie wysłano wiadomości"}</strong>
            <p>
              {toastType === "success"
                ? "Dziękuję za kontakt. Odpowiem najszybciej, jak to możliwe."
                : "Wystąpił problem podczas wysyłania. Spróbuj ponownie."}
            </p>
          </div>
          <button
            type="button"
            className={styles.toastClose}
            aria-label="Zamknij komunikat"
            onClick={() => setShowSuccessPopup(false)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
