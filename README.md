This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Google Tag Manager i analityka

Integracja jest przygotowana, ale pozostaje nieaktywna, dopóki zmienna `NEXT_PUBLIC_GTM_ID` nie zawiera identyfikatora kontenera GTM. Skopiuj `.env.example` do `.env.local` i wpisz identyfikator kontenera. Nie umieszczaj identyfikatorów ani sekretów w repozytorium, jeśli nie są przeznaczone do publicznego użycia.

W kontenerze GTM skonfiguruj: (1) Google tag / GA4 z identyfikatorem strumienia danych, (2) wyłącz automatyczny pomiar odsłon w konfiguracji tagu, (3) tag zdarzenia GA4 wyzwalany zdarzeniem niestandardowym `mediacje_page_view`, mapujący `page_path` i `page_title` na parametry strony, (4) zgodę wbudowaną `analytics_storage` dla tagów analitycznych. Nie dodawaj tagów Google Ads przed wdrożeniem odrębnej kategorii zgody reklamowej.

Kontener GTM jest ładowany dopiero po zgodzie analitycznej. Domyślne stany zgód reklamowych pozostają `denied`. Po cofnięciu zgody analitycznej kod wysyła aktualizację stanu zgody.
