import styles from "./page.module.css";

export const metadata = {
  title: "Polityka cookies | Mediacje",
  description:
    "Informacje o technologiach wykorzystywanych na stronie oraz sposobach zarządzania zgodami.",
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
            Informacje o plikach cookies i innych technologiach wykorzystywanych
            na stronie oraz o sposobach zarządzania zgodami.
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
          <h2>1. Czym są pliki cookies i podobne technologie?</h2>
          <p>
            Pliki cookies to niewielkie informacje tekstowe zapisywane na
            urządzeniu użytkownika podczas korzystania ze strony internetowej.
            Umożliwiają między innymi zapamiętywanie ustawień oraz prawidłowe
            działanie wybranych funkcji serwisu.
          </p>
          <p>
            Strona może korzystać również z podobnych technologii, które
            zapisują lub odczytują informacje w przeglądarce albo na urządzeniu
            użytkownika. Jedną z nich jest pamięć lokalna przeglądarki
            (local storage).
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Jakie technologie są wykorzystywane na stronie?</h2>

          <h3>Zapamiętywanie ustawień zgody</h3>
          <p>
            Strona zapisuje w pamięci lokalnej przeglądarki informację o
            wyborach dokonanych w panelu zgód. Dzięki temu użytkownik nie musi
            ponownie określać swoich preferencji przy każdej wizycie. Zapis
            ten nie jest plikiem cookie.
          </p>

          <h3>Google Maps</h3>
          <p>
            Mapa Google prezentująca lokalizację miejsca spotkań jest
            udostępniana jako usługa zewnętrzna. Mapa jest ładowana po
            zaakceptowaniu kategorii „Technologie zewnętrzne”. Po jej
            uruchomieniu Google może otrzymywać informacje techniczne
            dotyczące urządzenia i przeglądarki użytkownika oraz przetwarzać
            je zgodnie z własnymi zasadami prywatności.
          </p>

          <h3>Statystyki odwiedzin</h3>
          <p>
            Strona nie korzysta obecnie z Google Analytics 4 do prowadzenia
            statystyk odwiedzin. Jeżeli w przyszłości taka usługa zostanie
            uruchomiona, będzie aktywowana dopiero po uzyskaniu wymaganej
            zgody na kategorię „Analityka”, a niniejsza polityka zostanie
            odpowiednio zaktualizowana.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Kategorie technologii i zgód</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.cookieTable}>
              <thead>
                <tr>
                  <th>Kategoria</th>
                  <th>Cel</th>
                  <th>Kiedy działa?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Niezbędne</td>
                  <td>
                    Zapewnienie podstawowego działania strony i zapamiętanie
                    wyborów dotyczących zgód.
                  </td>
                  <td>Podczas korzystania ze strony.</td>
                </tr>
                <tr>
                  <td>Technologie zewnętrzne</td>
                  <td>Wyświetlenie mapy Google.</td>
                  <td>Po wyrażeniu zgody na tę kategorię.</td>
                </tr>
                <tr>
                  <td>Analityka</td>
                  <td>Statystyczna analiza korzystania ze strony.</td>
                  <td>
                    Obecnie nieaktywna. Ewentualne uruchomienie nastąpi po
                    wdrożeniu narzędzia i uzyskaniu zgody.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Konkretne pliki cookies i informacje zapisywane przez usługę
            zewnętrzną mogą zależeć od jej dostawcy, wersji i konfiguracji.
            Google publikuje informacje o wykorzystywanych technologiach
            i zasadach prywatności w swoich dokumentach.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Zarządzanie zgodami</h2>
          <p>
            Przy pierwszej wizycie na stronie użytkownik może dokonać wyboru
            w panelu zgód. Może zaakceptować dostępne technologie opcjonalne,
            odrzucić je albo wybrać poszczególne kategorie, jeśli panel
            udostępnia taki podział.
          </p>
          <p>
            Technologie opcjonalne, które wymagają zgody, są uruchamiane
            dopiero po jej udzieleniu. Odmowa zgody nie powinna ograniczać
            dostępu do podstawowych treści strony.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Jak zmienić lub wycofać zgodę?</h2>
          <p>
            Zapisane ustawienia można zmienić po ponownym otwarciu panelu
            za pomocą przycisku „Ustawienia cookies” dostępnego na stronie.
            Zmiana ustawień obowiązuje na przyszłość.
          </p>
          <p>
            Użytkownik może także usuwać lub ograniczać zapisywanie plików
            cookies w ustawieniach swojej przeglądarki. Może to jednak
            wpłynąć na działanie niektórych funkcji strony.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Usługi podmiotów zewnętrznych</h2>
          <p>
            Mapa Google jest usługą dostarczaną przez Google. Po jej
            załadowaniu dostawca może przetwarzać dane techniczne, takie jak
            adres IP, informacje o przeglądarce i urządzeniu oraz dane
            związane z wyświetleniem mapy. Szczegóły znajdują się w
            dokumentach dotyczących prywatności Google.
          </p>
          <p>
            Informacje o przetwarzaniu danych osobowych przez administratora
            strony, w tym o odbiorcach danych, znajdują się w{" "}
            <a href="/polityka-prywatnosci">Polityce prywatności</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Ustawienia przeglądarki</h2>
          <p>
            Większość przeglądarek internetowych umożliwia sprawdzanie,
            usuwanie i blokowanie plików cookies. Instrukcje dotyczące tych
            ustawień są dostępne w pomocy używanej przeglądarki.
          </p>
          <p>
            Usunięcie danych zapisanych w przeglądarce może spowodować
            ponowne wyświetlenie panelu zgód i konieczność ponownego
            określenia preferencji.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Zmiany polityki cookies</h2>
          <p>
            Polityka może być aktualizowana w przypadku zmian w działaniu
            strony, wykorzystywanych usług lub przepisów prawa. Aktualna
            wersja dokumentu jest publikowana na tej stronie.
          </p>
          <p>Ostatnia aktualizacja: 18 listopada 2026 r.</p>
        </section>

        <section className={styles.section}>
          <h2>9. Kontakt</h2>
          <p>
            W sprawach dotyczących plików cookies i prywatności można
            skontaktować się z administratorem:
          </p>
          <p>
            <strong>Beata Walczakiewicz</strong>, prowadząca działalność
            gospodarczą pod firmą Legal and Art Support Radca Prawny i
            Mediator Beata Walczakiewicz.
          </p>
          <p>
            <strong>Adres do doręczeń:</strong> ul. Orawska 23/45,
            70-131 Szczecin.
          </p>
          <p>
            <strong>NIP:</strong> 8513142092
            <br />
            <strong>REGON:</strong> 521151684
          </p>
          <p>
            <strong>E-mail:</strong>{" "}
            <a href="mailto:b.walczakiewicz@gmail.com">
              b.walczakiewicz@gmail.com
            </a>
          </p>
          <p>
            <strong>Telefon:</strong>{" "}
            <a href="tel:+48669422091">+48 669 422 091</a>
          </p>
        </section>
      </article>
    </main>
  );
}
