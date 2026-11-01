import Link from "next/link";
import { getGhostPosts } from "@/lib/ghost";
import Pagination from "./Pagination";
import BlogSearch from "./BlogSearch";
import BlogLoadingLink from "./BlogLoadingLink";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Mediacje",
  description:
    "Artykuły o mediacjach, komunikacji i rozwiązywaniu konfliktów.",
};

type BlogPageProps = {
  searchParams: Promise<{ page?: string; q?: string }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const requestedPage = Number(params.page ?? "1");
  const page = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const query = (params.q ?? "").trim().slice(0, 120);

  const result = await getGhostPosts(page, query);
  const { posts, pages, total } = result;
  const currentPage = result.page;

  // W widoku wyszukiwania pokazujemy wyniki bez wyróżnionego artykułu.
  // W zwykłym widoku bloga pierwszy wpis pozostaje polecany.
  const featuredPost = query ? undefined : posts[0];
  const visiblePosts = query ? posts : posts.slice(1);

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>Blog</span>
          <h1>Wiedza, która pomaga w porozumieniu</h1>
          <span className={styles.heroDivider} />
          <p>
            Artykuły o mediacjach, komunikacji i rozwiązywaniu konfliktów.
            Praktyczne wskazówki, inspiracje i odpowiedzi na najczęstsze pytania.
          </p>
        </div>

        <div className={styles.heroImageWrapper}>
          <img
            src="/images/blog-hero.jpg"
            alt="Przytulna przestrzeń do rozmowy i mediacji"
            className={styles.heroImage}
          />
        </div>
      </header>

      {posts.length === 0 ? (
        <>
          <section className={styles.listHeading} aria-label="Wyszukiwanie artykułów">
            <div>
              <span className={styles.sectionEyebrow}>BAZA WIEDZY</span>
              <h2>{query ? "Wyniki wyszukiwania" : "Najnowsze wpisy"}</h2>
            </div>
            <BlogSearch initialQuery={query} className={styles.blogSearch} />
          </section>
          <p className={styles.empty}>
            {query ? `Nie znaleziono artykułów dla „${query}”. Spróbuj innej frazy.` : "Wkrótce pojawią się tutaj nowe artykuły."}
          </p>
          {query && <p className={styles.clearSearch}><Link href="/blog">Wyczyść wyszukiwanie</Link></p>}
        </>
      ) : (
        <>
          {featuredPost && (
            <section className={styles.featured} aria-label="Polecany artykuł">
              <BlogLoadingLink
                href={`/blog/${featuredPost.slug}`}
                className={styles.featuredImageLink}
                aria-label={`Czytaj artykuł: ${featuredPost.title}`}
              >
                {featuredPost.feature_image ? (
                  <img
                    src={featuredPost.feature_image}
                    alt={featuredPost.feature_image_alt || featuredPost.title}
                    className={styles.featuredImage}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>Mediacje</div>
                )}
                <span className={styles.featuredBadge}>Polecany artykuł</span>
              </BlogLoadingLink>

              <div className={styles.featuredContent}>
                <div className={styles.featuredLabel}>
                  <span>{query ? "WYNIK WYSZUKIWANIA" : "POLECANY ARTYKUŁ"}</span>
                  {featuredPost.published_at && (
                    <>
                      <span className={styles.featuredSeparator} aria-hidden="true">|</span>
                      <time dateTime={featuredPost.published_at}>{formatDate(featuredPost.published_at)}</time>
                    </>
                  )}
                </div>

                <h2><Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link></h2>
                {featuredPost.excerpt && <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>}

                <BlogLoadingLink
                  href={`/blog/${featuredPost.slug}`}
                  className={styles.featuredButton}
                  loadingOnImage
                >
                  Czytaj artykuł <span aria-hidden="true">→</span>
                </BlogLoadingLink>
              </div>
            </section>
          )}

          <section className={styles.listHeading} aria-label="Lista artykułów">
            <div>
              <span className={styles.sectionEyebrow}>{query ? "WYNIKI WYSZUKIWANIA" : "WSZYSTKIE ARTYKUŁY"}</span>
              <h2>{query ? "Wyniki wyszukiwania" : "Najnowsze wpisy"}</h2>
            </div>
            <BlogSearch initialQuery={query} className={styles.blogSearch} />
          </section>

          {visiblePosts.length > 0 ? (
            <section className={styles.grid} aria-label={query ? "Wyniki wyszukiwania" : "Pozostałe artykuły"}>
              {visiblePosts.map((post) => (
                <article className={styles.card} key={post.id}>
                  <BlogLoadingLink href={`/blog/${post.slug}`} className={styles.imageLink} aria-label={`Czytaj artykuł: ${post.title}`}>
                    {post.feature_image ? (
                      <img src={post.feature_image} alt={post.feature_image_alt || post.title} className={styles.image} />
                    ) : (
                      <div className={styles.imagePlaceholder}>Mediacje</div>
                    )}
                  </BlogLoadingLink>
                  <div className={styles.cardContent}>
                    {post.published_at && <time className={styles.date} dateTime={post.published_at}>{formatDate(post.published_at)}</time>}
                    <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                    {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}

                    <BlogLoadingLink
                      href={`/blog/${post.slug}`}
                      className={styles.readMore}
                      loadingOnImage
                    >
                      Czytaj artykuł <span aria-hidden="true">→</span>
                    </BlogLoadingLink>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <p className={styles.empty}>{query ? "Nie znaleziono artykułów pasujących do wyszukiwania." : "Brak kolejnych artykułów na tej stronie."}</p>
          )}

          {pages > 1 && <Pagination currentPage={currentPage} totalPages={pages} query={query} />}
          <p className={styles.postCount}>
            {query ? `${total === 1 ? "1 wynik" : `${total} wyników`} wyszukiwania` : `${total === 1 ? "1 artykuł" : `${total} artykułów`} na blogu`}
          </p>
          {query && <p className={styles.clearSearch}><Link href="/blog">Wyczyść wyszukiwanie</Link></p>}
        </>
      )}
    </main>
  );
}