import { useMemo } from "react";
import { type LucideIcon, Radio, Sparkles, Video, Headphones, BookOpen, Mic2 } from "lucide-react";

type ContentKind = "Live sessions" | "Specials" | "Behind the scenes" | "Podcast" | "Stories" | "Interviews";
type Show = { id: string; title: string; kind: ContentKind; image: string; href: string };

const SHOWS: Show[] = [
  { id: "live-leostaytrill", title: "LEOSTAYTRILL ft. Shoday", kind: "Live sessions", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&h=760&fit=crop&auto=format", href: "/shows" },
  { id: "special-ycee", title: "YCEE — Lemonade", kind: "Specials", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=900&h=600&fit=crop&auto=format", href: "/shows" },
  { id: "bts-cut-room", title: "The Cut Room Diaries", kind: "Behind the scenes", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&h=600&fit=crop&auto=format", href: "/shows" },
  { id: "podcast-synths", title: "Synths & Sovereignty", kind: "Podcast", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&h=600&fit=crop&auto=format", href: "/shows" },
  { id: "story-attention", title: "Attention is the new currency", kind: "Stories", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&h=600&fit=crop&auto=format", href: "/stories/attention-is-the-new-currency" },
  { id: "interview-roundtable", title: "The Creative Roundtable", kind: "Interviews", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&h=600&fit=crop&auto=format", href: "/shows" },
];

const CATEGORIES: { label: ContentKind; icon: LucideIcon }[] = [
  { label: "Live sessions", icon: Radio },
  { label: "Specials", icon: Sparkles },
  { label: "Behind the scenes", icon: Video },
  { label: "Podcast", icon: Headphones },
  { label: "Stories", icon: BookOpen },
  { label: "Interviews", icon: Mic2 },
];

function CategoryCard({ label }: { label: ContentKind }) {
  const representative = SHOWS.find((s) => s.kind === label) ?? SHOWS[0];
  const count = SHOWS.filter((s) => s.kind === label).length;

  return (
    <a href={`/shows?category=${encodeURIComponent(label)}`} className="group relative h-40 overflow-hidden rounded-xl shadow-md ring-1 ring-inset ring-border">
      <img src={representative.image} alt={label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
      <div className="relative z-10 flex h-full items-end p-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">{label}</span>
          <p className="mt-1 text-sm text-white/70">{count} {count === 1 ? "item" : "items"}</p>
        </div>
      </div>
    </a>
  );
}

export default function Studio() {
  const categories = useMemo(() => CATEGORIES, []);

  return (
    <main className="min-h-screen bg-background">
      <header className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">EchooRoom / Studio</p>
        <h1 className="mt-4 font-display text-4xl font-black">Explore categories</h1>
        <p className="mt-3 text-sm text-muted-foreground">Minimal, clickable previews of the room’s content.</p>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ label }) => (
            <CategoryCard key={label} label={label} />
          ))}
        </div>
      </section>
    </main>
  );
}
