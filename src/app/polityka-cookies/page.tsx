import styles from "./page.module.css";

export const metadata = {
  title: "Polityka cookies | Mediacje",
  description:
    "Informacje o plikach cookies, technologiach śledzących i zarządzaniu zgodami w serwisie internetowym.",
};

export default function CookiePolicyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>INFORMACJE PRAWNE</p>

          <h1>Polityka cookies</h1>

          <div className={styles.goldLine} />

          <p className={styles.intro}>
            Dowiedz się, jak działają pliki cookies, w jakim celu mogą
            być wykorzystywane oraz jak możesz zarządzać swoimi zgodami.
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
          <h2>1. Czym są pliki cookies?</h2>

          <p>
            Pliki cookies to niewielkie informacje tekstowe zapisywane
            na urządzeniu użytkownika podczas odwiedzania strony
            internetowej. Mogą umożliwiać prawidłowe działanie serwisu,
            zapamiętywanie ustawień oraz — zależnie od zastosowanych
            narzędzi — analizowanie sposobu korzystania ze strony.
          </p>

          <p>
            Podobne technologie mogą obejmować między innymi pamięć
            przeglądarki, piksele i inne mechanizmy przechowywania
            lub odczytywania informacji na urządzeniu.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Jakie rodzaje cookies mogą być wykorzystywane?</h2>

          <h3>Niezbędne</h3>
          <p>
            Są potrzebne do prawidłowego działania strony lub świadczenia
            usługi, o którą użytkownik wyraźnie prosi. Niektóre funkcje
            serwisu mogą bez nich nie działać poprawnie.
          </p>

          <h3>Ustawienia zgody</h3>
          <p>
            Strona zapisuje wybór użytkownika w pamięci lokalnej
            przeglądarki, aby zapamiętać decyzję dotyczącą usług
            zewnętrznych. Mechanizm korzysta z klucza
            <code> mediacje-cookie-consent</code>.
          </p>

          <h3>Analityczne</h3>
          <p>
            Po uruchomieniu integracji Google Analytics 4 przez Google Tag
            Manager statystyki odwiedzin będą zbierane wyłącznie po
            zaznaczeniu zgody na kategorię „Analityka”. Kontener GTM nie jest
            ładowany przed uzyskaniem tej zgody.
          </p>

          <h3>Usługi zewnętrzne</h3>
          <p>
            Mapa Google w sekcji spotkania jest osadzana dopiero po
            wyrażeniu zgody na technologie zewnętrzne. Bez tej zgody
            mapa nie jest automatycznie pobierana.
          </p>

          <p>
            Integracja analityczna jest przygotowana w kodzie, ale wymaga
            utworzenia i skonfigurowania kontenera Google Tag Manager oraz
            podania jego identyfikatora w zmiennej NEXT_PUBLIC_GTM_ID.
            Do tego czasu żadne dane analityczne nie są wysyłane.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Jakie narzędzia wykorzystuje strona?</h2>

          <p>
            Poniżej opisano narzędzia widoczne w aktualnej implementacji
            strony.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.cookieTable}>
              <thead>
                <tr>
                  <th>Mechanizm lub usługa</th>
                  <th>Cel</th>
                  <th>Sposób działania</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pamięć lokalna przeglądarki</td>
                  <td>Zapamiętanie wyboru dotyczącego zgody</td>
                  <td>Klucz mediacje-cookie-consent</td>
                </tr>
                <tr>
                  <td>Google Analytics 4 przez Google Tag Manager</td>
                  <td>Statystyki korzystania ze strony</td>
                  <td>Uruchamiane dopiero po zgodzie na analitykę; aktywacja wymaga konfiguracji kontenera GTM</td>
                </tr>
                <tr>
                  <td>Google Maps</td>
                  <td>Wyświetlenie mapy lokalizacji</td>
                  <td>Osadzana po zgodzie na technologie zewnętrzne</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Szczegółowy wykaz plików cookies ustawianych przez Google
            oraz okres ich przechowywania zależą od działania usługi
            po jej uruchomieniu i wymagają weryfikacji w przeglądarce
            podczas testów produkcyjnych.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Zgoda na pliki cookies</h2>

          <p>
            Technologie, które wymagają zgody użytkownika, powinny być
            uruchamiane dopiero po jej uzyskaniu. Użytkownik powinien
            mieć możliwość zaakceptowania lub odrzucenia takich
            technologii oraz dokonania wyboru dla poszczególnych kategorii,
            jeśli strona oferuje takie ustawienia.
          </p>

          <p>
            Brak zgody na technologie opcjonalne nie powinien uniemożliwiać
            korzystania z podstawowych funkcji strony, które nie wymagają
            ich zastosowania.
          </p>

          <p>
            W panelu zgód można zaakceptować wszystkie opcjonalne
            technologie, odrzucić je albo niezależnie zapisać wybór dla
            kategorii analitycznej i technologii zewnętrznych. Przycisk
            odrzucenia jest dostępny na tym samym poziomie co przycisk akceptacji.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Jak zmienić lub wycofać zgodę?</h2>

          <p>
            Ustawienia można zmienić również po zamknięciu banera,
            korzystając z przycisku „Ustawienia cookies” dostępnego
            na stronie.
          </p>

          <p>
            Ustawienia można również zmienić w przeglądarce internetowej.
            Usunięcie zapisanych plików cookies może spowodować konieczność
            ponownego skonfigurowania niektórych ustawień strony.
          </p>

          <p>
            Panel można ponownie otworzyć przyciskiem „Ustawienia cookies”
            widocznym na stronie po zamknięciu banera. Zmiana ustawienia
            analityki aktualizuje stan zgody przekazywany do Google Tag Manager,
            a zmiana ustawienia technologii zewnętrznych aktualizuje działanie mapy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Pliki cookies podmiotów zewnętrznych</h2>

          <p>
            Niektóre elementy strony mogą być dostarczane przez
            zewnętrznych usługodawców. W zależności od sposobu integracji
            mogą oni otrzymywać informacje o urządzeniu użytkownika
            lub jego aktywności.
          </p>

          <p>
            Zasady przetwarzania danych przez takich dostawców określają
            również ich własne dokumenty dotyczące prywatności.
          </p>

          <p>
            W serwisie wykorzystywana jest mapa Google, uruchamiana dopiero
            po zgodzie na technologie zewnętrzne. Po skonfigurowaniu kontenera
            GTM może być również uruchamiana usługa Google Analytics 4,
            wyłącznie po zgodzie na kategorię analityczną.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Zarządzanie cookies w przeglądarce</h2>

          <p>
            Większość przeglądarek pozwala przeglądać zapisane pliki
            cookies, usuwać je oraz ograniczać ich zapisywanie.
            Zmiana ustawień przeglądarki może jednak wpłynąć na działanie
            niektórych funkcji strony.
          </p>

          <p>
            Ustawienia przeglądarki nie zawsze zastępują mechanizm
            zarządzania zgodami dostępny w serwisie.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Zmiany polityki cookies</h2>

          <p>
            Polityka cookies może być aktualizowana w przypadku zmian
            przepisów, konfiguracji strony lub wykorzystywanych usług.
            Aktualna wersja dokumentu będzie publikowana na tej stronie.
          </p>

          <p className={styles.placeholder}>
            [DO UZUPEŁNIENIA: data obowiązywania dokumentu.]
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Kontakt</h2>

          <p>
            W sprawach dotyczących prywatności i plików cookies można
            kontaktować się z administratorem strony.
          </p>

          <p>
            E-mail: <a href="mailto:klaudia@bonter.eu">klaudia@bonter.eu</a>
          </p>

          <p>
            Więcej informacji o przetwarzaniu danych osobowych znajduje
            się w{" "}
            <a href="/polityka-prywatnosci">
              Polityce prywatności
            </a>.
          </p>
        </section>
      </article>
    </main>
  );
}