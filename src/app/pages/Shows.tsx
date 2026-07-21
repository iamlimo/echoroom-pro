import { useState } from "react";
import { Play, Clock, ArrowUpRight, Mic, Radio, Tv, Users } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type ShowCategory = "Interview" | "Podcast" | "Programme" | "Panel";

type Show = {
  id: string;
  title: string;
  category: ShowCategory;
  episode: string;
  guest: string;
  host: string;
  duration: string;
  date: string;
  thumb: string;
  alt: string;
  excerpt: string;
  featured?: boolean;
  new?: boolean;
};

const SHOWS: Show[] = [
  {
    id: "s1",
    title: "The Creative Roundtable",
    category: "Interview",
    episode: "Ep. 24",
    guest: "Falz & Simi",
    host: "Kemi Adeyemi",
    duration: "1:02:44",
    date: "Nov 28, 2024",
    thumb: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop&auto=format",
    alt: "Creative Roundtable episode",
    excerpt: "Falz and Simi sit down with Kemi Adeyemi to discuss creative independence, the business of music, and why Nigerian artists must own their masters.",
    featured: true,
    new: true,
  },
  {
    id: "s2",
    title: "EchoFreq Podcast",
    category: "Podcast",
    episode: "Ep. 89",
    guest: "Odunsi The Engine",
    host: "Seun Praise",
    duration: "58:12",
    date: "Nov 21, 2024",
    thumb: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=500&fit=crop&auto=format",
    alt: "EchoFreq Podcast recording",
    excerpt: "Odunsi opens up about his production process, dealing with creative block, and what the next chapter of Afro-fusion sounds like.",
    new: true,
  },
  {
    id: "s3",
    title: "Media & The Machine",
    category: "Programme",
    episode: "S2 Ep. 06",
    guest: "Akin Fadeyi",
    host: "Tobi Okafor",
    duration: "44:30",
    date: "Nov 14, 2024",
    thumb: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop&auto=format",
    alt: "Media and the machine programme",
    excerpt: "A deep dive into how Nigerian media companies can monetise digital audiences and build sustainable content businesses.",
    new: true,
  },
  {
    id: "s4",
    title: "Board Room Talk",
    category: "Panel",
    episode: "Ep. 12",
    guest: "4 Industry Leaders",
    host: "Chisom Nweke",
    duration: "1:28:00",
    date: "Nov 07, 2024",
    thumb: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=500&fit=crop&auto=format",
    alt: "Board Room Talk panel session",
    excerpt: "Four of Nigeria's most influential marketing executives debate the future of brand investment in a post-social-algorithm world.",
  },
  {
    id: "s5",
    title: "The Creative Roundtable",
    category: "Interview",
    episode: "Ep. 23",
    guest: "Tiwa Savage",
    host: "Kemi Adeyemi",
    duration: "47:55",
    date: "Oct 31, 2024",
    thumb: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=500&fit=crop&auto=format",
    alt: "Interview with Tiwa Savage",
    excerpt: "Tiwa Savage on launching an independent label, building a global fanbase, and navigating the politics of the Nigerian music industry.",
  },
  {
    id: "s6",
    title: "EchoFreq Podcast",
    category: "Podcast",
    episode: "Ep. 88",
    guest: "Blaqbonez",
    host: "Seun Praise",
    duration: "1:05:20",
    date: "Oct 24, 2024",
    thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&auto=format",
    alt: "EchoFreq podcast with Blaqbonez",
    excerpt: "Blaqbonez dissects the rap game, his controversial marketing tactics, and why he believes Nigerian hip-hop will outlast every trend.",
  },
  {
    id: "s7",
    title: "Media & The Machine",
    category: "Programme",
    episode: "S2 Ep. 05",
    guest: "Chude Jideonwo",
    host: "Tobi Okafor",
    duration: "39:45",
    date: "Oct 17, 2024",
    thumb: "https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=800&h=500&fit=crop&auto=format",
    alt: "Media and the machine programme",
    excerpt: "Chude Jideonwo on building Africa's most-read newsletter, the future of long-form content, and why attention is the new currency.",
  },
  {
    id: "s8",
    title: "Board Room Talk",
    category: "Panel",
    episode: "Ep. 11",
    guest: "3 CMOs",
    host: "Chisom Nweke",
    duration: "1:12:40",
    date: "Oct 10, 2024",
    thumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&auto=format",
    alt: "CMO panel discussion",
    excerpt: "Three chief marketing officers from fintech, telecom, and FMCG reveal what actually moves the needle in Nigerian consumer marketing.",
  },
];

const FILTERS = ["All", "Interview", "Podcast", "Programme", "Panel"] as const;
type Filter = (typeof FILTERS)[number];

const CATEGORY_ICONS: Record<ShowCategory, typeof Mic> = {
  Interview: Mic,
  Podcast: Radio,
  Programme: Tv,
  Panel: Users,
};

const CATEGORY_COLORS: Record<ShowCategory, string> = {
  Interview: "text-amber-400",
  Podcast: "text-emerald-400",
  Programme: "text-sky-400",
  Panel: "text-violet-400",
};

// ─── Featured card ────────────────────────────────────────────────────────────

function FeaturedShow({ show }: { show: Show }) {
  const [hovered, setHovered] = useState(false);
  const Icon = CATEGORY_ICONS[show.category];

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[16/7] overflow-hidden bg-muted mb-6">
        <img
          src={show.thumb}
          alt={show.alt}
          className={`w-full h-full object-cover transition-all duration-700 ${hovered ? "scale-105 brightness-50" : "scale-100 brightness-40"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

        {/* Play button */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-2xl">
            <Play size={20} className="text-primary-foreground fill-current ml-1" />
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 p-8 md:p-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            {show.new && (
              <span className="bg-primary text-primary-foreground font-mono text-[9px] tracking-widest uppercase px-2.5 py-1">New</span>
            )}
            <span className={`flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase ${CATEGORY_COLORS[show.category]}`}>
              <Icon size={11} /> {show.category}
            </span>
            <span className="font-mono text-[10px] text-white/40 tracking-wide">{show.episode}</span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-black text-white leading-tight mb-2">{show.title}</h2>
          <p className="text-white/60 text-sm">with {show.guest} · hosted by {show.host}</p>
        </div>

        {/* Duration */}
        <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-black/60 px-3 py-1.5">
          <Clock size={11} className="text-white/60" />
          <span className="font-mono text-[10px] text-white/60 tracking-wide">{show.duration}</span>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed max-w-3xl">{show.excerpt}</p>
    </div>
  );
}

// ─── Show Card ────────────────────────────────────────────────────────────────

function ShowCard({ show }: { show: Show }) {
  const [hovered, setHovered] = useState(false);
  const Icon = CATEGORY_ICONS[show.category];

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted mb-4">
        <img
          src={show.thumb}
          alt={show.alt}
          className={`w-full h-full object-cover transition-all duration-500 ${hovered ? "scale-105 brightness-50" : "scale-100 brightness-60"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Play hover */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl">
            <Play size={14} className="text-primary-foreground fill-current ml-0.5" />
          </div>
        </div>

        {/* Bottom badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className={`flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase bg-black/70 px-2 py-1 ${CATEGORY_COLORS[show.category]}`}>
            <Icon size={9} /> {show.category}
          </span>
          <span className="font-mono text-[10px] text-white/70 bg-black/70 px-2 py-1">{show.duration}</span>
        </div>

        {show.new && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground font-mono text-[9px] tracking-widest uppercase px-2 py-0.5">New</span>
          </div>
        )}
      </div>

      {/* Meta */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] text-muted-foreground tracking-widest">{show.episode} · {show.date}</span>
          <ArrowUpRight size={13} className={`transition-all duration-200 ${hovered ? "text-primary" : "text-muted-foreground opacity-0 group-hover:opacity-100"}`} />
        </div>
        <h3 className={`font-display font-black text-base leading-tight mb-1 transition-colors ${hovered ? "text-primary" : "text-foreground"}`}>
          {show.title}
        </h3>
        <p className="text-muted-foreground text-xs mb-2">
          with <span className="text-foreground">{show.guest}</span>
        </p>
        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{show.excerpt}</p>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Shows() {
  const [filter, setFilter] = useState<Filter>("All");

  const featured = SHOWS.find((s) => s.featured) ?? SHOWS[0];
  const rest = SHOWS.filter((s) => !s.featured);
  const filtered = filter === "All" ? rest : rest.filter((s) => s.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-24 pb-10 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-2">
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-3">EchooRoom Broadcasting</p>
            <h1 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground">Shows</h1>
            <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed">
              Recorded interviews, podcasts, and programmes — conversations that move culture, business, and creative ambition forward.
            </p>
          </div>

          {/* Category stats */}
          <div className="flex gap-6 shrink-0">
            {(["Interview", "Podcast", "Programme", "Panel"] as ShowCategory[]).map((cat) => {
              const Icon = CATEGORY_ICONS[cat];
              const count = SHOWS.filter((s) => s.category === cat).length;
              return (
                <div key={cat} className="text-center">
                  <Icon size={16} className={`mx-auto mb-1 ${CATEGORY_COLORS[cat]}`} />
                  <div className="font-display text-xl font-black text-foreground">{count}</div>
                  <div className="font-mono text-[9px] text-muted-foreground tracking-wide uppercase">{cat}s</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Featured show */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto py-12">
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-6">Latest episode</p>
        <FeaturedShow show={featured} />
      </div>

      {/* Filter + grid */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-t border-border mb-10">
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
            All episodes — {filtered.length} results
          </p>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-200 ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-display text-2xl font-black text-muted-foreground">No episodes yet</p>
            <p className="text-muted-foreground text-sm mt-2">Check back soon.</p>
          </div>
        )}
      </div>

      {/* Subscribe CTA */}
      <div className="border-t border-border bg-card">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-2">Never miss an episode</p>
            <h2 className="font-display text-2xl md:text-4xl font-black text-foreground">Subscribe to EchooRoom Shows</h2>
            <p className="text-muted-foreground mt-2 text-sm">New interviews, podcasts, and programmes every week.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {["Spotify", "Apple Podcasts", "YouTube"].map((platform) => (
              <button
                key={platform}
                className="px-5 py-3 border border-border text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors font-mono tracking-wide text-[11px] uppercase"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
