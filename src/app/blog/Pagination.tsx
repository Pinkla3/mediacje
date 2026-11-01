"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Pagination.module.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  query?: string;
};

function buildPageNumbers(
  currentPage: number,
  totalPages: number
): (number | "...")[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const visible = new Set<number>([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);

  const numbers = [...visible]
    .filter((number) => number >= 1 && number <= totalPages)
    .sort((a, b) => a - b);

  const result: (number | "...")[] = [];

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    result.push(number);

    const nextNumber = numbers[index + 1];
    if (nextNumber === undefined) continue;

    const gap = nextNumber - number;
    if (gap === 2) {
      result.push(number + 1);
    } else if (gap > 2) {
      result.push("...");
    }
  }

  return result;
}

export default function Pagination({
  currentPage,
  totalPages,
  query = "",
}: PaginationProps) {
  const router = useRouter();
  const [pageInput, setPageInput] = useState(String(currentPage));
  const pageNumbers = buildPageNumbers(currentPage, totalPages);
  const showFirstLast = pageNumbers.includes("...");

  function goToPage(page: number) {
    if (!Number.isInteger(page) || page < 1 || page > totalPages) return;

    const search = new URLSearchParams();
    if (page > 1) search.set("page", String(page));
    if (query) search.set("q", query);
    const suffix = search.toString();
    router.push(suffix ? `/blog?${suffix}` : "/blog");
    setPageInput(String(page));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const page = Number(pageInput.trim());

    if (!Number.isInteger(page) || page < 1 || page > totalPages) {
      setPageInput(String(currentPage));
      return;
    }

    goToPage(page);
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.pagination} aria-label="Nawigacja stron bloga">
        {showFirstLast && (
          <button
            type="button"
            className={styles.goldLink}
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            aria-label="Przejdź do pierwszej strony"
          >
            « Pierwsza
          </button>
        )}

        <button
          type="button"
          className={styles.goldLink}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Przejdź do poprzedniej strony"
        >
          ← Wstecz
        </button>

        {pageNumbers.map((pageNumber, index) =>
          pageNumber === "..." ? (
            <span
              key={`dots-${index}`}
              className={styles.pageDots}
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <button
              type="button"
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              className={`${styles.pageNumber} ${
                pageNumber === currentPage ? styles.activePage : ""
              }`}
              aria-current={pageNumber === currentPage ? "page" : undefined}
              aria-label={`Strona ${pageNumber}`}
            >
              {pageNumber}
            </button>
          )
        )}

        <button
          type="button"
          className={styles.goldLink}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Przejdź do następnej strony"
        >
          Dalej →
        </button>

        {showFirstLast && (
          <button
            type="button"
            className={styles.goldLink}
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Przejdź do ostatniej strony"
          >
            Ostatnia »
          </button>
        )}
      </nav>

      <form className={styles.pageSearch} onSubmit={handleSubmit}>
        <label htmlFor="blog-page-number">Przejdź do strony</label>
        <div className={styles.searchControls}>
          <input
            id="blog-page-number"
            type="number"
            min={1}
            max={totalPages}
            step={1}
            inputMode="numeric"
            value={pageInput}
            onChange={(event) => setPageInput(event.target.value)}
            aria-describedby="blog-page-help"
          />
          <span id="blog-page-help" className={styles.pageHelp}>
            z {totalPages}
          </span>
          <button type="submit" className={styles.searchButton}>
            Idź →
          </button>
        </div>
      </form>
    </div>
  );
}
