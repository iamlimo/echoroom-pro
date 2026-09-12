import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import { getPostBySlug, urlForImage, type BlogPost } from "../../lib/sanity";
import PortableText from "../../components/PortableText";

export default function BlogPost() {
  const params = useParams();
  const navigate = useNavigate();
  const slug = params.slug as string | undefined;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    if (!slug) {
      setLoading(false);
      return;
    }

    const search = new URLSearchParams(location.search)
    const preview = search.get('preview') === 'true'

    (async () => {
      try {
        const p = await getPostBySlug(slug, preview);
        if (mounted) setPost(p);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [slug]);

  usePageMeta({
    title: post?.title ? `${post.title} | EchooRoom` : "Blog | EchooRoom",
    description: post?.excerpt || "EchooRoom blog",
  });

  if (loading) {
    return (
      <main className="pt-28 pb-20 px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="h-48 animate-pulse rounded-xl bg-muted/40" />
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="pt-28 pb-20 px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[1.5rem] border border-border bg-card/60 p-8 text-center">
            <h2 className="font-display text-2xl font-black">Post not found</h2>
            <p className="mt-4 text-muted-foreground">We couldn't find that article.</p>
            <div className="mt-6">
              <button onClick={() => navigate('/blog')} className="text-primary font-semibold">Back to blog</button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const imageUrl = urlForImage(post.coverImage);

  return (
    <main className="pt-28 pb-20 px-6 md:px-12">
      <div className="mx-auto max-w-3xl">
        <article className="space-y-6">
          <div className="text-sm text-muted-foreground uppercase tracking-wide">
            {post.category ?? 'Insight'} · {post.author}
          </div>
          <h1 className="font-display text-4xl font-black text-foreground">{post.title}</h1>
          {imageUrl ? (
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={imageUrl} alt={post.title} className="w-full object-cover" />
            </div>
          ) : null}

          <div className="prose max-w-none">
            {post.excerpt ? <p className="text-muted-foreground">{post.excerpt}</p> : null}
            <PortableText blocks={post.body as any} />
          </div>
        </article>
      </div>
    </main>
  );
}
