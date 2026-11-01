/**
 * Opinie wyświetlane w karuzeli na stronie głównej.
 * Zastąp tekst i autora zaakceptowanymi, prawdziwymi opiniami klientów.
 * Aby dodać opinię, dopisz kolejny obiekt w tablicy.
 */
export type Review = {
  text: string;
  author: string;
};

export const reviews: Review[] = [
  {
    text: "Tutaj pojawi się pierwsza opinia klienta.",
    author: "Imię klienta",
  },
  {
    text: "Tutaj pojawi się druga opinia klienta.",
    author: "Imię klienta",
  },
  {
    text: "Tutaj pojawi się trzecia opinia klienta.",
    author: "Imię klienta",
  },
];
