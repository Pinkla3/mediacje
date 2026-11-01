

"use client";

import {
  FormEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

type BlogSearchProps = {
  initialQuery?: string;
  className?: string;
};

const SCROLL_KEY = "blog-search-pending-scroll";

export default function BlogSearch({
  initialQuery = "",
  className = "",
}: BlogSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(initialQuery);
  const pendingScroll = useRef<number | null>(null);
  const previousUrl = useRef<string | null>(null);

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setQuery(searchParams.get("q") ?? initialQuery);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [searchParams, initialQuery]);

  useLayoutEffect(() => {
    const currentUrl = `${pathname}?${searchParams.toString()}`;

    if (previousUrl.current === null) {
      previousUrl.current = currentUrl;
      return;
    }

    if (previousUrl.current !== currentUrl) {
      previousUrl.current = currentUrl;

      const storedPosition = sessionStorage.getItem(SCROLL_KEY);
      const savedPosition =
        pendingScroll.current ??
        (storedPosition !== null ? Number(storedPosition) : null);

      if (
        savedPosition !== null &&
        Number.isFinite(savedPosition)
      ) {
        pendingScroll.current = savedPosition;

        // Przywracamy pozycję po zakończeniu renderowania wyników.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo(0, savedPosition);

            pendingScroll.current = null;
            sessionStorage.removeItem(SCROLL_KEY);
          });
        });
      }
    } else {
      previousUrl.current = currentUrl;
    }
  }, [pathname, searchParams]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const input = event.currentTarget.querySelector("input");
    input?.blur();

    const params = new URLSearchParams();
    const normalizedQuery = query.trim().slice(0, 120);

    if (normalizedQuery) {
      params.set("q", normalizedQuery);
    }

    const savedPosition = window.scrollY;

    pendingScroll.current = savedPosition;
    sessionStorage.setItem(SCROLL_KEY, String(savedPosition));

    const search = params.toString();
    const url = search ? `/blog?${search}` : "/blog";

    router.push(url, { scroll: false });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      role="search"
    >
      <input
        id="blog-query"
        aria-label="Szukaj artykułów"
        type="search"
        name="q"
        placeholder="Szukaj artykułów..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="submit" aria-label="Szukaj artykułów">
        <span aria-hidden="true">⌕</span>
      </button>
    </form>
  );
}
