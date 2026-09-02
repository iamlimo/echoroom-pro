import { useMemo } from "react";
import { type LucideIcon, Radio, Sparkles, Video, Headphones, BookOpen, Mic2 } from "lucide-react";
import { SHOW_CATEGORY_DATA, type ContentKind } from "../data/showCategories";

const CATEGORIES: { label: ContentKind; icon: LucideIcon }[] = [
  { label: "Live sessions", icon: Radio },
  { label: "Specials", icon: Sparkles },
  { label: "Behind the scenes", icon: Video },
  { label: "Podcast", icon: Headphones },
  { label: "Stories", icon: BookOpen },
  { label: "Interviews", icon: Mic2 },
];

const CATEGORY_BACKGROUNDS: Record<ContentKind, string> = {
  "Live sessions":
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
  Specials:
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  "Behind the scenes":
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  Podcast:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  Stories:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  Interviews:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
};

function CategoryCard({ label }: { label: ContentKind }) {
  const items = SHOW_CATEGORY_DATA[label];
  const representative = items[0];
  const count = items.length;
  const backgroundImage = CATEGORY_BACKGROUNDS[label] ?? representative?.thumbLink ?? "/assets/echoroom-default-thumb.svg";

  return (
    <a
      href={`/shows?category=${encodeURIComponent(label)}`}
      className="group relative h-40 overflow-hidden rounded-xl shadow-md ring-1 ring-inset ring-border"
      aria-label={`Browse ${label} content`}
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/35 transition-opacity group-hover:bg-black/45" />
      <div className="relative z-10 flex h-full items-end p-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">{label}</span>
          <p className="mt-1 text-sm text-white/70">
            {count} {count === 1 ? "item" : "items"}
          </p>
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
