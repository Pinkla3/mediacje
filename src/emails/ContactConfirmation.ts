import {
  emailLayout,
  emailColors,
  escapeHtml,
} from "./email-layout";

import type { ContactEmailData } from "./ContactNotification";

const subjectLabels: Record<string, string> = {
  rodzinne: "Mediacje rodzinne",
  cywilne: "Mediacje cywilne",
  gospodarcze: "Mediacje gospodarcze",
  inne: "Inna sprawa",
};

export function contactConfirmation(data: ContactEmailData): string {
  const c = emailColors;

  const subject = subjectLabels[data.subject] ?? "Inna sprawa";

  const message = escapeHtml(data.message).replace(/\r?\n/g, "<br>");

  const content = `
    <h1 style="margin:0 0 20px;font-family:Georgia,serif;font-size:32px;line-height:1.25;font-weight:normal;color:${c.navy};">
      Dziękuję za kontakt
    </h1>

    <p style="margin:0 0 16px;font-family:Georgia,serif;font-size:19px;color:${c.navy};">
      Dzień dobry!
    </p>

    <p style="margin:0 0 16px;font-size:15px;line-height:1.8;">
      Dziękuję za przesłanie wiadomości. Potwierdzam, że otrzymałam Twoje zapytanie.
    </p>

    <p style="margin:0;font-size:15px;line-height:1.8;">
      Zapoznam się z jego treścią i odpowiem najszybciej, jak to możliwe.
    </p>

    <div style="width:60px;height:2px;background:${c.gold};margin:26px 0;"></div>

    <h2 style="margin:0 0 18px;font-family:Georgia,serif;font-size:21px;font-weight:normal;color:${c.navy};">
      Podsumowanie Twojej wiadomości
    </h2>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${c.cream};">
      <tr>
        <td style="padding:20px;">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:${c.muted};">
            TEMAT
          </p>
          <p style="margin:0 0 18px;font-family:Georgia,serif;font-size:17px;color:${c.navy};">
            ${escapeHtml(subject)}
          </p>

          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:${c.muted};">
            IMIĘ I NAZWISKO
          </p>
          <p style="margin:0 0 18px;font-size:15px;color:${c.navy};">
            ${escapeHtml(data.name)}
          </p>

          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:${c.muted};">
            ADRES E-MAIL
          </p>
          <p style="margin:0 0 18px;font-size:15px;overflow-wrap:anywhere;">
            ${escapeHtml(data.email)}
          </p>

          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:${c.muted};">
            NUMER TELEFONU
          </p>
          <p style="margin:0 0 20px;font-size:15px;color:${c.navy};">
            ${escapeHtml(data.phone || "Nie podano")}
          </p>

          <div style="height:1px;background:${c.creamDark};margin-bottom:18px;"></div>

          <p style="margin:0 0 12px;font-size:14px;font-weight:bold;color:${c.navy};">
            Treść wiadomości:
          </p>

          <div style="padding:16px;background:#ffffff;border:1px solid ${c.creamDark};font-size:14px;line-height:1.8;overflow-wrap:anywhere;">
            ${message}
          </div>
        </td>
      </tr>
    </table>

    <p style="margin:26px 0 12px;font-size:15px;line-height:1.8;">
      W razie dodatkowych pytań możesz odpowiedzieć na tę wiadomość.
    </p>

    <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:16px;color:${c.navy};">
      Z pozdrowieniami,
    </p>

    <p style="margin:0;font-family:Georgia,serif;font-size:30px;font-style:italic;color:${c.gold};">
      Mediacje
    </p>

    <div style="width:100%;height:1px;background:${c.gold};margin-top:22px;"></div>
  `;

  return emailLayout(
    content,
    "Potwierdzenie otrzymania Twojej wiadomości — Mediacje"
  );
}