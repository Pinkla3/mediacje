import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";

export const metadata: Metadata = {
  title: "Mediacje | Porozumienie ma znaczenie",
  description:
    "Profesjonalne mediacje pomagające znaleźć porozumienie i rozwiązanie konfliktu.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="site-layout">
        <Header />
        <div className="site-main">{children}</div>
        <Footer />
        <CookieConsent />
        <GoogleTagManager />
      </body>
    </html>
  );
}