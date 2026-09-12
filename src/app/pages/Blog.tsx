import { ArrowRight, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { getPublishedPosts, type BlogPost, urlForImage } from "../../lib/sanity";
import { usePageMeta } from "../hooks/usePageMeta";

const formatDate = (value?: string) => {
  if (!value) return "Recently";

  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function Blog() {
  usePageMeta({
    title: "Blog | Insights on Marketing & Branding | EchooRoom",
    description:
      "Fresh insights and stories about marketing, branding, creativity, and advertising from the EchooRoom team.",
    url: "https://echooroom.com/blog",
  });

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        const result = await getPublishedPosts();
        if (isMounted) {
          setPosts(result);
        }
      } catch (error) {
        console.error("Failed to load blog posts", error);
        if (isMounted) {
          setPosts([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="pt-28 pb-20 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-primary">
            Blog
          </div>
          <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-foreground md:text-6xl">
            Insights for brands that want to stand out.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Weekly thinking on brand strategy, creative production, content systems, and the ideas that help teams grow with clarity.
          </p>
        </header>

        <section className="mt-12">
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2">
              {[0, 1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-80 animate-pulse rounded-[1.5rem] border border-border bg-muted/50"
                />
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => {
                const imageUrl = urlForImage(post.coverImage);

                return (
                  <article key={post._id} className="group overflow-hidden rounded-[1.5rem] border border-border bg-card/70 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-transform duration-200 hover:-translate-y-1">
                    {imageUrl ? (
                      <div className="aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                        <img
                          src={imageUrl}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : null}

                    <div className="space-y-4 p-6">
                      <div className="flex items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        <span>{post.category ?? "Insight"}</span>
                        <span className="flex items-center gap-2">
                          <CalendarDays size={12} />
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl font-black leading-tight text-foreground">
                        {post.title}
                      </h2>

                      <p className="text-sm leading-7 text-muted-foreground">
                        {post.excerpt || "Read the latest perspective from the EchooRoom team."}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-primary">
                          {post.author || "EchooRoom Team"}
                        </span>
                        <a
                          href={`/blog/${post.slug?.current}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                        >
                          Read more
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-border bg-card/50 p-10 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">No posts yet</p>
              <h2 className="mt-4 font-display text-3xl font-black text-foreground md:text-4xl">
                Fresh ideas are ready to be published.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Create your first post in the Sanity studio and it will appear here automatically.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
