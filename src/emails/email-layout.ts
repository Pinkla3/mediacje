const colors = {
  cream: "#f8f5ef",
  creamDark: "#eee6d8",
  gold: "#c89a4b",
  navy: "#111827",
  text: "#343434",
  muted: "#777168",
  white: "#ffffff",
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function emailLayout(content: string, previewText: string): string {
  const bannerUrl = process.env.EMAIL_BANNER_URL;

  const banner = bannerUrl
    ? `
      <img
        src="${escapeHtml(bannerUrl)}"
        alt="Mediacje — rozmowa, zrozumienie, rozwiązanie"
        width="600"
        style="display:block;width:100%;max-width:600px;height:auto;border:0;"
      />
    `
    : `
      <div style="padding:36px 24px;text-align:center;background:${colors.cream};">
        <div style="font-family:Georgia,serif;font-size:38px;font-style:italic;color:${colors.gold};">
          Mediacje
        </div>
        <div style="margin-top:12px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;color:${colors.navy};">
          ROZMOWA · ZROZUMIENIE · ROZWIĄZANIE
        </div>
        <div style="width:90px;height:2px;background:${colors.gold};margin:20px auto 0;"></div>
      </div>
    `;

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mediacje</title>
</head>
<body style="margin:0;padding:0;background:${colors.cream};font-family:Arial,Helvetica,sans-serif;color:${colors.text};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${escapeHtml(previewText)}
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${colors.cream};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:${colors.white};">
          <tr>
            <td style="padding:0;">
              ${banner}
            </td>
          </tr>

          <tr>
            <td style="padding:32px 30px 20px;">
              ${content}
            </td>
          </tr>

          <tr>
            <td style="padding:22px 24px;background:${colors.cream};border-top:1px solid ${colors.creamDark};text-align:center;">
              <p style="margin:0;font-family:Georgia,serif;font-size:13px;line-height:1.7;color:${colors.muted};">
                Wiadomość została wygenerowana automatycznie przez formularz kontaktowy na stronie internetowej.
              </p>
              <p style="margin:8px 0 0;font-size:11px;line-height:1.6;color:${colors.muted};">
                Mediacje · Rozmowa · Zrozumienie · Rozwiązanie
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export const emailColors = colors;