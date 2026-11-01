import {
  emailLayout,
  emailColors,
  escapeHtml,
} from "./email-layout";

export type ContactEmailData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const subjectLabels: Record<string, string> = {
  rodzinne: "Mediacje rodzinne",
  cywilne: "Mediacje cywilne",
  gospodarcze: "Mediacje gospodarcze",
  inne: "Inna sprawa",
};

export function contactNotification(data: ContactEmailData): string {
  const c = emailColors;

  const subject = subjectLabels[data.subject] ?? "Inna sprawa";

  const message = escapeHtml(data.message).replace(/\r?\n/g, "<br>");

  const content = `
    <h1 style="margin:0 0 12px;font-family:Georgia,serif;font-size:30px;line-height:1.25;font-weight:normal;color:${c.navy};">
      Nowa wiadomość
    </h1>

    <div style="width:60px;height:2px;background:${c.gold};margin:20px 0 24px;"></div>

    <p style="margin:0 0 24px;font-size:15px;line-height:1.8;">
      Otrzymałaś nową wiadomość za pośrednictwem formularza kontaktowego na stronie internetowej.
    </p>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${c.cream};">
      <tr>
        <td style="padding:22px 20px;">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:${c.muted};">
            IMIĘ I NAZWISKO
          </p>
          <p style="margin:0 0 18px;font-family:Georgia,serif;font-size:18px;color:${c.navy};">
            ${escapeHtml(data.name)}
          </p>

          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:${c.muted};">
            ADRES E-MAIL
          </p>
          <p style="margin:0 0 18px;font-size:15px;overflow-wrap:anywhere;">
            <a href="mailto:${escapeHtml(data.email)}" style="color:${c.navy};">
              ${escapeHtml(data.email)}
            </a>
          </p>

          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:${c.muted};">
            NUMER TELEFONU
          </p>
          <p style="margin:0 0 18px;font-size:15px;">
            ${escapeHtml(data.phone || "Nie podano")}
          </p>

          <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:${c.muted};">
            TEMAT WIADOMOŚCI
          </p>
          <p style="margin:0;font-family:Georgia,serif;font-size:17px;color:${c.navy};">
            ${escapeHtml(subject)}
          </p>
        </td>
      </tr>
    </table>

    <h2 style="margin:26px 0 12px;font-family:Georgia,serif;font-size:20px;font-weight:normal;color:${c.navy};">
      Treść wiadomości
    </h2>

    <div style="padding:20px;background:#ffffff;border:1px solid ${c.creamDark};font-size:15px;line-height:1.8;overflow-wrap:anywhere;">
      ${message}
    </div>

    <p style="margin:26px 0 0;font-size:14px;line-height:1.7;color:${c.muted};">
      Możesz odpowiedzieć nadawcy bezpośrednio na jego adres e-mail.
    </p>
  `;

  return emailLayout(
    content,
    `Nowa wiadomość od ${data.name}: ${subject}`
  );
}