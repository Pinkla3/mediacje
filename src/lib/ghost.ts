const GHOST_URL = process.env.GHOST_URL;
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY;

export type GhostPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  html: string;
  published_at: string;
  feature_image: string | null;
  feature_image_alt: string | null;
  url: string;
  primary_author?: { name?: string };
  authors?: Array<{ name?: string }>;
};

export type GhostPostsResult = {
  posts: GhostPost[];
  page: number;
  pages: number;
  total: number;
};

type GhostApiResponse = {
  posts: GhostPost[];
  meta: {
    pagination: {
      page: number;
      pages: number;
      total: number;
    };
  };
};

async function fetchGhost(
  params: URLSearchParams,
  revalidate = 60
): Promise<GhostApiResponse> {
  if (!GHOST_URL || !GHOST_CONTENT_API_KEY) {
    throw new Error("Brak konfiguracji Ghosta w pliku .env.local");
  }

  const baseUrl = GHOST_URL.replace(/\/$/, "");
  params.set("key", GHOST_CONTENT_API_KEY);

  // Zachowujemy domyślne dane dla dotychczasowych wywołań.
  if (!params.has("include") && !params.has("fields")) {
    params.set("include", "tags,authors");
  }

  const response = await fetch(
    `${baseUrl}/ghost/api/content/posts/?${params.toString()}`,
    { next: { revalidate } }
  );

  if (!response.ok) {
    throw new Error(`Ghost Content API zwróciło błąd: ${response.status}`);
  }

  return response.json();
}

export async function getGhostPosts(
  page = 1,
  query = ""
): Promise<GhostPostsResult> {
  const params = new URLSearchParams({
    limit: "9",
    page: String(Math.max(1, page)),
    order: "published_at desc",
  });

  const normalizedQuery = query.trim().replace(/[\\']/g, "");
  if (normalizedQuery) {
    params.set("filter", `title:~'${normalizedQuery}'`);
  }

  const data = await fetchGhost(params);
  const pagination = data.meta.pagination;

  return {
    posts: data.posts,
    page: pagination.page,
    pages: pagination.pages,
    total: pagination.total,
  };
}

/** Pobiera pełny pojedynczy wpis, potrzebny na stronie artykułu. */
export async function getGhostPost(
  slug: string
): Promise<GhostPost | null> {
  const params = new URLSearchParams({ filter: `slug:${slug}`, limit: "1" });
  const data = await fetchGhost(params, 300);

  return data.posts[0] ?? null;
}

/**
 * Pobiera lekką listę polecanych wpisów: bez HTML i bez autorów/tagów.
 * To ogranicza wielkość odpowiedzi Ghost API na stronie pojedynczego artykułu.
 */
export async function getGhostRelatedPosts(
  currentSlug: string
): Promise<GhostPost[]> {
  const params = new URLSearchParams({
    limit: "4",
    page: "1",
    order: "published_at desc",
    fields: "id,title,slug,excerpt,published_at,feature_image,feature_image_alt,url",
  });

  const data = await fetchGhost(params, 300);
  return data.posts.filter((post) => post.slug !== currentSlug).slice(0, 3);
}
