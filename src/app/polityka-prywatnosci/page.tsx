import styles from "./page.module.css";

export const metadata = {
  title: "Polityka prywatności | Mediacje",
  description:
    "Informacje o przetwarzaniu danych osobowych podczas korzystania z serwisu internetowego.",
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
            Informacje o tym, kto przetwarza Twoje dane osobowe, w jakich
            celach, na jakiej podstawie i jakie prawa Ci przysługują.
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
        <section className={styles.section}>
          <h2>1. Administrator danych osobowych</h2>
          <p>Administratorem danych osobowych jest:</p>
          <ul>
            <li>
              <strong>Imię i nazwisko:</strong> Beata Walczakiewicz
            </li>
            <li>
              <strong>Nazwa działalności:</strong> Legal and Art Support
              Radca Prawny i Mediator Beata Walczakiewicz
            </li>
            <li>
              <strong>Adres do doręczeń:</strong> ul. Orawska 23/45,
              70-131 Szczecin
            </li>
            <li>
              <strong>NIP:</strong> 8513142092
            </li>
            <li>
              <strong>REGON:</strong> 521151684
            </li>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:b.walczakiewicz@gmail.com">
                b.walczakiewicz@gmail.com
              </a>
            </li>
            <li>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+48669422091">+48 669 422 091</a>
            </li>
          </ul>
          <p>
            W sprawach dotyczących przetwarzania danych osobowych można
            skontaktować się z administratorem za pośrednictwem poczty
            elektronicznej lub telefonicznie.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Jakie dane są przetwarzane i w jakich celach?</h2>
          <p>
            Zakres przetwarzanych danych zależy od sposobu korzystania ze
            strony i kontaktu z administratorem. Mogą to być w szczególności
            dane identyfikacyjne i kontaktowe, takie jak imię, nazwisko,
            adres e-mail i numer telefonu, a także informacje zawarte
            w treści przesłanej wiadomości.
          </p>
          <p>Dane są przetwarzane w celu:</p>
          <ul>
            <li>udzielenia odpowiedzi na otrzymane zapytanie;</li>
            <li>prowadzenia korespondencji dotyczącej mediacji;</li>
            <li>
              podjęcia działań przed zawarciem umowy lub wykonania zawartej
              umowy;
            </li>
            <li>wypełnienia obowiązków wynikających z przepisów prawa;</li>
            <li>
              ustalenia, dochodzenia lub obrony przed ewentualnymi
              roszczeniami;
            </li>
            <li>
              zapewnienia bezpieczeństwa i prawidłowego działania strony;
            </li>
            <li>
              prowadzenia statystyk, jeżeli użytkownik wyrazi zgodę na
              stosowanie odpowiednich narzędzi analitycznych.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Podstawy prawne przetwarzania</h2>
          <p>
            Dane osobowe są przetwarzane na podstawie odpowiedniej przesłanki
            określonej w art. 6 ust. 1 RODO:
          </p>
          <ul>
            <li>
              <strong>art. 6 ust. 1 lit. b RODO</strong> – gdy przetwarzanie
              jest niezbędne do podjęcia działań na żądanie osoby przed
              zawarciem umowy lub do wykonania umowy;
            </li>
            <li>
              <strong>art. 6 ust. 1 lit. c RODO</strong> – gdy przetwarzanie
              jest niezbędne do wypełnienia obowiązków prawnych ciążących
              na administratorze, w szczególności obowiązków podatkowych
              i rachunkowych;
            </li>
            <li>
              <strong>art. 6 ust. 1 lit. f RODO</strong> – gdy przetwarzanie
              jest niezbędne do realizacji prawnie uzasadnionych interesów
              administratora, takich jak obsługa ogólnych zapytań,
              zapewnienie bezpieczeństwa strony lub ustalenie, dochodzenie
              albo obrona roszczeń;
            </li>
            <li>
              <strong>art. 6 ust. 1 lit. a RODO</strong> – gdy przetwarzanie
              odbywa się na podstawie zgody, na przykład w przypadku
              opcjonalnych narzędzi analitycznych, jeżeli zostaną
              uruchomione.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Formularz kontaktowy i korespondencja</h2>
          <p>
            Jeżeli użytkownik korzysta z formularza kontaktowego, może
            przekazać w nim dane potrzebne do udzielenia odpowiedzi,
            w szczególności imię i nazwisko, adres e-mail, numer telefonu
            oraz treść wiadomości. Podanie danych oznaczonych w formularzu
            jako wymagane jest konieczne do jego wysłania i obsługi
            zapytania. Podanie pozostałych informacji jest dobrowolne.
          </p>
          <p>
            Wiadomości z formularza są przekazywane administratorowi
            pocztą elektroniczną. Do obsługi korespondencji administrator
            korzysta z Gmail, usługi poczty elektronicznej dostarczanej
            przez Google.
          </p>
          <p>
            Dane z ogólnych zapytań, które nie prowadzą do zawarcia umowy
            ani rozpoczęcia mediacji, są przechowywane przez 12 miesięcy
            od zakończenia korespondencji. Po tym czasie są usuwane lub
            anonimizowane, chyba że dalsze przechowywanie jest niezbędne
            do ustalenia, dochodzenia lub obrony roszczeń albo wynika
            z obowiązku prawnego.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Odbiorcy danych</h2>
          <p>
            Odbiorcami danych mogą być dostawcy usług, z których administrator
            korzysta w celu prowadzenia strony i obsługi korespondencji,
            a także podmioty uprawnione do otrzymania danych na podstawie
            przepisów prawa.
          </p>
          <ul>
            <li>
              <strong>Homecloud</strong> – dostawca infrastruktury serwera
              dedykowanego, na którym utrzymywana jest strona internetowa;
            </li>
            <li>
              <strong>Google</strong> – dostawca usługi Gmail wykorzystywanej
              do obsługi korespondencji oraz usługi Google Maps służącej
              do wyświetlania mapy na stronie.
            </li>
          </ul>
          <p>
            Dostęp do danych mogą mieć również osoby upoważnione przez
            administratora, jeżeli jest to niezbędne do obsługi sprawy
            lub zapewnienia prawidłowego działania strony. Dane są
            udostępniane wyłącznie w zakresie potrzebnym do realizacji
            danego celu.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
          <p>
            W związku z korzystaniem z usług Google, w szczególności Gmail
            i Google Maps, dane mogą być przetwarzane także poza Europejskim
            Obszarem Gospodarczym. W takim przypadku przekazywanie danych
            odbywa się z zastosowaniem mechanizmów przewidzianych w RODO,
            zależnie od usługi i okoliczności transferu. Informacje o
            stosowanych zabezpieczeniach Google udostępnia w dokumentacji
            dotyczącej ochrony danych i warunkach właściwych dla danej usługi.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Okres przechowywania danych</h2>
          <p>
            Dane są przechowywane przez okres niezbędny do realizacji celu,
            w jakim zostały zebrane:
          </p>
          <ul>
            <li>
              dane z ogólnych zapytań – przez 12 miesięcy od zakończenia
              korespondencji, z zastrzeżeniem sytuacji, w których dalsze
              przechowywanie jest wymagane prawem lub potrzebne do ochrony
              roszczeń;
            </li>
            <li>
              dane związane z zawartą umową, rozliczeniami lub dokumentacją
              mediacji – przez okres wynikający z właściwych przepisów
              prawa lub do upływu odpowiednich terminów przedawnienia
              roszczeń;
            </li>
            <li>
              dane techniczne i logi serwera – przez okres potrzebny do
              zapewnienia bezpieczeństwa, diagnostyki i prawidłowego
              działania strony, zgodnie z konfiguracją infrastruktury.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Prawa osób, których dane dotyczą</h2>
          <p>
            W granicach określonych przez RODO użytkownikowi przysługuje
            prawo do:
          </p>
          <ul>
            <li>dostępu do danych osobowych;</li>
            <li>sprostowania danych;</li>
            <li>usunięcia danych;</li>
            <li>ograniczenia przetwarzania;</li>
            <li>przenoszenia danych, jeżeli ma to zastosowanie;</li>
            <li>wniesienia sprzeciwu, jeżeli podstawą przetwarzania jest art. 6 ust. 1 lit. f RODO;</li>
            <li>
              wycofania zgody w dowolnym momencie, jeżeli dane są
              przetwarzane na podstawie zgody.
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
          <h2>9. Pliki cookies i usługi zewnętrzne</h2>
          <p>
            Strona zapisuje w pamięci lokalnej przeglądarki wybór użytkownika
            dotyczący zgód. Mapa Google jest ładowana po wyrażeniu zgody
            na technologie zewnętrzne. Szczegółowe informacje o tych
            mechanizmach znajdują się w{" "}
            <a href="/polityka-cookies">Polityce cookies</a>.
          </p>
          <p>
            Strona nie korzysta obecnie z Google Analytics 4 do prowadzenia
            statystyk odwiedzin.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Bezpieczeństwo danych</h2>
          <p>
            Administrator stosuje odpowiednie środki techniczne i
            organizacyjne, aby chronić dane osobowe przed nieuprawnionym
            dostępem, utratą, zniszczeniem lub nieuprawnioną zmianą.
            Dostęp do danych jest ograniczony do osób, które potrzebują
            go do realizacji swoich obowiązków. Dane są przechowywane
            z wykorzystaniem infrastruktury serwerowej dostawcy hostingu.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Zmiany polityki prywatności</h2>
          <p>
            Polityka prywatności może być aktualizowana w przypadku zmian
            przepisów prawa, sposobu działania strony lub wykorzystywanych
            usług. Aktualna wersja dokumentu jest publikowana na tej stronie.
          </p>
          <p>Ostatnia aktualizacja: 18 listopada 2026 r.</p>
        </section>
      </article>
    </main>
  );
}
