import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactNotification } from "@/emails/ContactNotification";
import { contactConfirmation } from "@/emails/ContactConfirmation";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    // Sprawdzenie konfiguracji Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("Brak zmiennej RESEND_API_KEY.");

      return NextResponse.json(
        {
          success: false,
          message: "Wysyłka wiadomości nie jest skonfigurowana.",
        },
        { status: 500 }
      );
    }

    // Pobranie danych z formularza
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";
    const privacy = body.privacy === true;

    // Walidacja wymaganych pól
    if (!name || !email || !subject || !message || !privacy) {
      return NextResponse.json(
        {
          success: false,
          message: "Uzupełnij wymagane pola formularza.",
        },
        { status: 400 }
      );
    }

    // Ograniczenie długości pól
    if (
      name.length > 150 ||
      email.length > 254 ||
      phone.length > 40 ||
      message.length > 10000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Niektóre pola zawierają zbyt dużo znaków.",
        },
        { status: 400 }
      );
    }

    // Walidacja adresu e-mail
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!validEmail.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Podaj prawidłowy adres e-mail.",
        },
        { status: 400 }
      );
    }

    // Dostępne tematy wiadomości
    const subjects: Record<string, string> = {
      rodzinne: "Mediacje rodzinne",
      cywilne: "Mediacje cywilne",
      gospodarcze: "Mediacje gospodarcze",
      inne: "Inna sprawa",
    };

    if (!subjects[subject]) {
      return NextResponse.json(
        {
          success: false,
          message: "Wybierz prawidłowy temat wiadomości.",
        },
        { status: 400 }
      );
    }

    // Dane przekazywane do obu szablonów
    const emailData = {
      name,
      email,
      phone,
      subject,
      message,
    };

    const recipient =
      process.env.CONTACT_EMAIL || "klaudiabonter@gmail.com";

    const from = "Mediacje <onboarding@resend.dev>";

    // 1. Powiadomienie dla właścicielki strony
    const notification = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: email,
      subject: `Formularz kontaktowy — ${subjects[subject]}`,
      html: contactNotification(emailData),
      text: [
        "Nowa wiadomość z formularza kontaktowego.",
        "",
        `Imię i nazwisko: ${name}`,
        `Telefon: ${phone || "Nie podano"}`,
        `Adres e-mail: ${email}`,
        `Temat: ${subjects[subject]}`,
        "",
        "Treść wiadomości:",
        message,
      ].join("\n"),
    });

    if (notification.error) {
      console.error(
        "Błąd wysyłki powiadomienia:",
        notification.error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
        },
        { status: 502 }
      );
    }

    // 2. Potwierdzenie dla klienta
    const confirmation = await resend.emails.send({
      from,
      to: [email],
      subject: "Potwierdzenie otrzymania wiadomości — Mediacje",
      html: contactConfirmation(emailData),
      text: [
        "Dzień dobry!",
        "",
        "Dziękuję za przesłanie wiadomości. Potwierdzam, że otrzymałam Twoje zapytanie.",
        "Zapoznam się z jego treścią i odpowiem najszybciej, jak to możliwe.",
        "",
        `Temat: ${subjects[subject]}`,
        `Imię i nazwisko: ${name}`,
        `Adres e-mail: ${email}`,
        `Numer telefonu: ${phone || "Nie podano"}`,
        "",
        "Treść Twojej wiadomości:",
        message,
        "",
        "Z pozdrowieniami,",
        "Mediacje",
      ].join("\n"),
    });

    if (confirmation.error) {
      console.error(
        "Błąd wysyłki potwierdzenia:",
        confirmation.error
      );

      // Powiadomienie dla właścicielki zostało już wysłane.
      return NextResponse.json({
        success: true,
        confirmationSent: false,
        message:
          "Wiadomość została przyjęta, ale nie udało się wysłać potwierdzenia na podany adres e-mail.",
      });
    }

    // Obie wiadomości zostały wysłane
    return NextResponse.json({
      success: true,
      confirmationSent: true,
      message: "Wiadomość została wysłana.",
    });
  } catch (error) {
    console.error("Błąd formularza kontaktowego:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Wystąpił błąd podczas wysyłania wiadomości.",
      },
      { status: 500 }
    );
  }
}