import styles from "./page.module.css";

const placeholders = {
  administrator: "[UZUPEŁNIJ: imię i nazwisko mediatora]",
  company: "[UZUPEŁNIJ: pełna nazwa działalności]",
  address: "[UZUPEŁNIJ: adres działalności]",
  email: "[UZUPEŁNIJ: adres e-mail]",
  nip: "[UZUPEŁNIJ: NIP]",
};

export const metadata = {
  title: "Polityka prywatności | Mediacje",
  description:
    "Polityka prywatności serwisu internetowego poświęconego usługom mediacyjnym.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>INFORMACJE PRAWNE</p>

          <h1>Polityka prywatności</h1>

          <div className={styles.goldLine} />

          <p className={styles.intro}>
            Twoja prywatność ma znaczenie. Dowiedz się, jak
            przetwarzamy i chronimy dane osobowe podczas korzystania
            z naszej strony internetowej.
          </p>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/images/consultation-desk.png"
            alt="Jasne wnętrze z notesem i filiżanką na drewnianym stole"
          />
        </div>
      </header>

      <article className={styles.document}>
        <div className={styles.notice}>
          <strong>Wersja robocza dokumentu</strong>
          <p>
            Czerwone oznaczenia wskazują informacje wymagające
            uzupełnienia lub weryfikacji przed publikacją.
          </p>
        </div>

        <section className={styles.section}>
          <h2>1. Administrator danych osobowych</h2>
          <p>Administratorem danych osobowych jest:</p>

          <ul>
            <li>
              <strong>Imię i nazwisko: </strong>
              <span className={styles.placeholder}>
                {placeholders.administrator}
              </span>
            </li>
            <li>
              <strong>Nazwa działalności: </strong>
              <span className={styles.placeholder}>
                {placeholders.company}
              </span>
            </li>
            <li>
              <strong>Adres: </strong>
              <span className={styles.placeholder}>
                {placeholders.address}
              </span>
            </li>
            <li>
              <strong>NIP: </strong>
              <span className={styles.placeholder}>
                {placeholders.nip}
              </span>
            </li>
            <li>
              <strong>Adres e-mail: </strong>
              <span className={styles.placeholder}>
                {placeholders.email}
              </span>
            </li>
          </ul>

          <p>
            W sprawach dotyczących przetwarzania danych osobowych można
            kontaktować się z administratorem za pośrednictwem wskazanego
            adresu e-mail.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Zakres i cele przetwarzania danych</h2>

          <p>
            Dane osobowe mogą być przetwarzane w związku z korzystaniem
            ze strony internetowej, w szczególności podczas kontaktu
            z administratorem za pomocą formularza kontaktowego.
          </p>

          <p>W zależności od sytuacji dane mogą być przetwarzane w celu:</p>

          <ul>
            <li>udzielenia odpowiedzi na otrzymaną wiadomość;</li>
            <li>prowadzenia korespondencji dotyczącej mediacji;</li>
            <li>
              podjęcia działań przed zawarciem umowy lub wykonania umowy;
            </li>
            <li>wypełnienia obowiązków prawnych administratora;</li>
            <li>
              ustalenia, dochodzenia lub obrony przed ewentualnymi
              roszczeniami;
            </li>
            <li>
              prowadzenia statystyk i analiz, jeżeli użytkownik wyraził
              wymaganą zgodę na stosowanie odpowiednich technologii.
            </li>
          </ul>

          <p className={styles.placeholder}>
            [DO WERYFIKACJI: przyporządkować każdemu celowi właściwą podstawę
            prawną z art. 6 RODO, zgodnie z faktycznym sposobem działania
            serwisu.]
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Formularz kontaktowy</h2>

          <p>
            Za pośrednictwem formularza kontaktowego użytkownik może
            przekazać dane potrzebne do nawiązania kontaktu, w szczególności
            imię i nazwisko, adres e-mail, numer telefonu oraz treść
            wiadomości.
          </p>

          <p>
            Podanie danych oznaczonych jako wymagane jest potrzebne do
            obsługi wiadomości. Pozostałe dane należy podawać dobrowolnie,
            w zakresie niezbędnym do nawiązania kontaktu.
          </p>

          <p>
            Dane z formularza będą wykorzystywane do obsługi zapytania
            i prowadzenia związanej z nim korespondencji.
          </p>

          <p className={styles.placeholder}>
            [DO UZUPEŁNIENIA: wskazać sposób wysyłki formularza, dostawcę
            poczty elektronicznej oraz okres przechowywania wiadomości.]
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Odbiorcy danych</h2>

          <p>
            Dostęp do danych mogą mieć podmioty wspierające administratora
            w utrzymaniu i obsłudze strony, poczty elektronicznej lub
            infrastruktury informatycznej — w zakresie niezbędnym do
            świadczenia tych usług.
          </p>

          <p>
            Dane mogą być również udostępniane uprawnionym organom, jeżeli
            obowiązek taki wynika z przepisów prawa.
          </p>

          <p className={styles.placeholder}>
            [DO UZUPEŁNIENIA: wskazać rzeczywistych dostawców hostingu,
            poczty i innych usług.]
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Przekazywanie danych poza EOG</h2>

          <p>
            Korzystanie z niektórych usług zewnętrznych może wiązać się
            z przekazywaniem danych do państw spoza Europejskiego Obszaru
            Gospodarczego.
          </p>

          <p className={styles.placeholder}>
            [DO WERYFIKACJI: ustalić, czy używane usługi przekazują dane
            poza EOG, a jeśli tak — wskazać odpowiednie zabezpieczenia.]
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Okres przechowywania danych</h2>

          <p>
            Dane są przechowywane przez okres niezbędny do realizacji celu,
            w jakim zostały zebrane, z uwzględnieniem obowiązujących
            przepisów oraz ewentualnych terminów przedawnienia roszczeń.
          </p>

          <p className={styles.placeholder}>
            [DO UZUPEŁNIENIA: określić okresy przechowywania wiadomości
            i dokumentacji.]
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Prawa osób, których dane dotyczą</h2>

          <p>
            W granicach określonych przez przepisy RODO użytkownik może
            mieć prawo do:
          </p>

          <ul>
            <li>dostępu do swoich danych;</li>
            <li>sprostowania nieprawidłowych danych;</li>
            <li>usunięcia danych;</li>
            <li>ograniczenia przetwarzania;</li>
            <li>przenoszenia danych, jeżeli ma to zastosowanie;</li>
            <li>wniesienia sprzeciwu, gdy prawo to przysługuje;</li>
            <li>
              wycofania zgody w dowolnym momencie, jeżeli przetwarzanie
              odbywa się na jej podstawie.
            </li>
          </ul>

          <p>
            Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania,
            którego dokonano przed jej wycofaniem.
          </p>

          <p>
            Użytkownik ma również prawo wniesienia skargi do Prezesa Urzędu
            Ochrony Danych Osobowych.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Pliki cookies i technologie zewnętrzne</h2>

          <p>
            Strona może wykorzystywać niezbędne pliki cookies oraz,
            po uzyskaniu wymaganej zgody, technologie analityczne
            i zewnętrzne.
          </p>

          <p>
            Szczegółowe informacje znajdują się w{" "}
            <a href="/polityka-cookies">Polityce cookies</a>.
          </p>

          <p>
            Integracja Google Analytics 4 przez Google Tag Manager jest
            przygotowana do uruchomienia po skonfigurowaniu kontenera.
            Narzędzie będzie uruchamiane wyłącznie po wyrażeniu zgody
            na kategorię analityczną. Mapa Google jest uruchamiana po zgodzie
            na technologie zewnętrzne.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Bezpieczeństwo danych</h2>

          <p>
            Administrator powinien stosować środki techniczne i
            organizacyjne odpowiednie do ryzyka, aby chronić dane przed
            nieuprawnionym dostępem, utratą, zniszczeniem lub zmianą.
          </p>

          <p className={styles.placeholder}>
            [DO WERYFIKACJI: opisać środki bezpieczeństwa faktycznie
            stosowane przy obsłudze strony, formularza i poczty.]
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Zmiany polityki prywatności</h2>

          <p>
            Polityka prywatności może być aktualizowana w przypadku zmian
            przepisów, sposobu działania strony lub wykorzystywanych usług.
          </p>

          <p className={styles.placeholder}>
            [DO UZUPEŁNIENIA: data obowiązywania dokumentu.]
          </p>
        </section>
      </article>
    </main>
  );
}