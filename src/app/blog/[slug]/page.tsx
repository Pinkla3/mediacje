
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getGhostPost, getGhostRelatedPosts } from "@/lib/ghost";
import ShareButtons from "./ShareButtons";
import BlogLoadingLink from "../BlogLoadingLink";
import styles from "./page.module.css";

// Cache całej strony artykułu na 5 minut w środowisku produkcyjnym.
// Po pierwszym wygenerowaniu Next.js może serwować gotowy HTML zamiast
// pobierać wpis z Ghost API przy każdym wejściu.
export const revalidate = 300;

type TocItem = {
  id: string;
  title: string;
  level: number;
};

function formatDate(date?: string | null) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function prepareArticleHtml(html: string) {
  const toc: TocItem[] = [];
  const usedIds = new Set<string>();

  const content = html.replace(
    /<(h[2-3])([^>]*)>([\s\S]*?)<\/h[2-3]>/gi,
    (match, tag: string, attributes: string, inner: string) => {
      const title = inner
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .trim();

      if (!title) return match;

      const existingId = attributes.match(/\bid=["']([^"']+)["']/i)?.[1];
      const baseId = existingId || slugify(title) || "sekcja";
      let id = baseId;
      let suffix = 2;

      while (usedIds.has(id)) {
        id = `${baseId}-${suffix++}`;
      }

      usedIds.add(id);

      toc.push({
        id,
        title,
        level: tag.toLowerCase() === "h3" ? 3 : 2,
      });

      const updatedAttributes = /\bid=["'][^"']+["']/i.test(attributes)
        ? attributes.replace(/\bid=["'][^"']+["']/i, `id="${id}"`)
        : `${attributes} id="${id}"`;

      return `<${tag}${updatedAttributes}>${inner}</${tag}>`;
    }
  );

  return { content, toc };
}

type RelatedPostsPromise = ReturnType<typeof getGhostRelatedPosts>;

async function SidebarRelated({ postsPromise }: { postsPromise: RelatedPostsPromise }) {
  const relatedPosts = await postsPromise;
  if (relatedPosts.length === 0) return null;

  return (
    <section className={styles.sidebarRelated}>
      <h2>Inne artykuły</h2>
      {relatedPosts.slice(0, 2).map((item) => (
        <BlogLoadingLink href={`/blog/${item.slug}`} className={styles.miniPost} key={item.slug}>
          {item.feature_image ? (
            <img src={item.feature_image} alt={item.feature_image_alt || item.title} loading="lazy" decoding="async" />
          ) : (
            <span className={styles.miniPlaceholder}>M</span>
          )}
          <span className={styles.miniPostText}>
            <strong>{item.title}</strong>
            {item.published_at && <time dateTime={item.published_at}>{formatDate(item.published_at)}</time>}
          </span>
        </BlogLoadingLink>
      ))}
    </section>
  );
}

async function RelatedPostsSection({ postsPromise }: { postsPromise: RelatedPostsPromise }) {
  const relatedPosts = await postsPromise;
  if (relatedPosts.length === 0) return null;

  return (
    <section className={styles.relatedSection}>
      <div className={styles.relatedHeading}>
        <div>
          <span className={styles.eyebrow}>CZYTAJ DALEJ</span>
          <h2>Inne artykuły, które mogą Cię zainteresować</h2>
        </div>
        <Link href="/blog" className={styles.allPostsLink}>
          Zobacz wszystkie <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className={styles.relatedGrid}>
        {relatedPosts.map((item) => (
          <article className={styles.relatedCard} key={item.slug}>
            <BlogLoadingLink href={`/blog/${item.slug}`} className={styles.relatedImage} aria-label={`Czytaj artykuł: ${item.title}`}>
              {item.feature_image ? (
                <img src={item.feature_image} alt={item.feature_image_alt || item.title} loading="lazy" decoding="async" />
              ) : (
                <span className={styles.miniPlaceholder}>Mediacje</span>
              )}
            </BlogLoadingLink>
            <div className={styles.relatedCardContent}>
              {item.published_at && <time dateTime={item.published_at}>{formatDate(item.published_at)}</time>}
              <h3><BlogLoadingLink href={`/blog/${item.slug}`}>{item.title}</BlogLoadingLink></h3>
              {item.excerpt && <p>{item.excerpt}</p>}
              <BlogLoadingLink href={`/blog/${item.slug}`} className={styles.readMore}>
                Czytaj artykuł <span aria-hidden="true">→</span>
              </BlogLoadingLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getGhostPost(slug);

  if (!post) {
    return { title: "Nie znaleziono artykułu | Mediacje" };
  }

  return {
    title: `${post.title} | Mediacje`,
    description:
      post.excerpt ||
      "Artykuły o mediacjach, komunikacji i rozwiązywaniu konfliktów.",
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.feature_image ? [post.feature_image] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Nie blokujemy wyświetlenia artykułu na odpowiedzi z listą polecanych wpisów.
  const relatedPostsPromise = getGhostRelatedPosts(slug);
  const post = await getGhostPost(slug);

  if (!post) notFound();

  const { content, toc } = prepareArticleHtml(post.html || "");

  const postWithAuthor = post as typeof post & {
    primary_author?: { name?: string };
    authors?: Array<{ name?: string }>;
  };

  const author =
    postWithAuthor.primary_author?.name ||
    postWithAuthor.authors?.[0]?.name ||
    "Klaudia Bonter";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs} aria-label="Okruszki">
          <Link href="/">Strona główna</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">›</span>
          <span className={styles.currentCrumb}>{post.title}</span>
        </nav>

        <header className={styles.articleHeader}>
          <h1>{post.title}</h1>

        </header>

        {post.feature_image && (
          <figure className={styles.heroImage}>
            <img
              src={post.feature_image}
              alt={post.feature_image_alt || post.title}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        )}

        <div className={styles.articleLayout}>
          {/* Sidebar jest pierwszy w DOM, aby na telefonie spis treści
              pojawiał się przed tekstem artykułu. */}
          <aside className={styles.sidebar}>
            {toc.length > 0 && (
              <nav className={styles.toc} aria-label="Spis treści">
                <h2>Spis treści</h2>
                <span className={styles.smallGoldLine} />

                <ol>
                  {toc.map((item, index) => (
                    <li
                      key={item.id}
                      className={item.level === 3 ? styles.tocSubitem : ""}
                    >
                      <a href={`#${item.id}`}>
                        <span className={styles.tocNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <section className={styles.sidebarCta}>
              <span className={styles.sidebarEyebrow}>
                JESTEŚMY TU, BY POMÓC
              </span>

              <h2>Potrzebujesz indywidualnej porady?</h2>

              <p>
                Porozmawiajmy o możliwościach rozwiązania Twojej sytuacji.
              </p>

              <Link href="/umow-spotkanie" className={styles.sidebarButton}>
                Umów spotkanie <span aria-hidden="true">→</span>
              </Link>
            </section>

            <Suspense fallback={null}>
              <SidebarRelated postsPromise={relatedPostsPromise} />
            </Suspense>
          </aside>

          <article className={styles.articleBody}>
            <div
              className={styles.ghostContent}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className={styles.articleCta}>
              <div className={styles.ctaIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 10h18M12 13v4M10 15h4" />
                </svg>
              </div>

              <div className={styles.ctaText}>
                <h2>Masz pytania dotyczące mediacji?</h2>
                <p>
                  Umów się na konsultację i porozmawiajmy o Twojej sytuacji.
                </p>
              </div>

              <Link href="/umow-spotkanie" className={styles.ctaButton}>
                Umów spotkanie <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className={styles.articleBottom}>
              <Link href="/blog" className={styles.backLink}>
                <span aria-hidden="true">←</span>
                Wróć do wpisów
              </Link>

              <div className={styles.bottomMeta}>
                <div className={styles.meta}>
                  <span className={styles.authorMark} aria-hidden="true">
                    {author.charAt(0).toUpperCase()}
                  </span>

                  <span className={styles.authorInfo}>
                    <strong>{author}</strong>
                    <span>Autorka bloga</span>
                  </span>

                  {post.published_at && (
                    <span className={styles.metaItem}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="16"
                          rx="2"
                        />
                        <path d="M16 3v4M8 3v4M3 10h18" />
                      </svg>

                      <time dateTime={post.published_at}>
                        {formatDate(post.published_at)}
                      </time>
                    </span>
                  )}
                </div>

                <div className={styles.bottomShare}>
                  <span>Udostępnij</span>
                  <ShareButtons title={post.title} />
                </div>
              </div>
            </div>
          </article>
        </div>

        <Suspense fallback={null}>
          <RelatedPostsSection postsPromise={relatedPostsPromise} />
        </Suspense>
      </div>
    </main>
  );
}
