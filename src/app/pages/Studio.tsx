import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowUpRight, Clock, Mic, Radio, Tv, Users } from "lucide-react";

// Combined data types
type VideoItem = {
  id: string;
  title: string;
  artist: string;
  type: "Live Session" | "Performance" | "Special" | "Behind The Scenes";
  duration: string;
  year: string;
  thumb: string;
  alt: string;
  featured?: boolean;
  description: string;
};

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

// Videos
const VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Midnight Studio Session",
    artist: "Adekunle Gold",
    type: "Live Session",
    duration: "42:18",
    year: "2024",
    thumb: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=675&fit=crop&auto=format",
    alt: "Adekunle Gold studio session",
    featured: true,
    description: "An intimate late-night session recorded live at EchooRoom Studio. Three cameras, one take, zero edits.",
  },
  // ... keep other video items (trimmed for brevity)
];

// Shows
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
  // ... keep other shows (trimmed for brevity)
];

const FILTERS_V = ["All", "Live Session", "Performance", "Special", "Behind The Scenes"] as const;
type FilterV = (typeof FILTERS_V)[number];

const FILTERS_S = ["All", "Interview", "Podcast", "Programme", "Panel"] as const;
type FilterS = (typeof FILTERS_S)[number];

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

// Simple Featured video player (kept lightweight)
function FeaturedPlayer({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden group cursor-pointer">
      <img src={video.thumb} alt={video.alt} className={`w-full h-full object-cover transition-all duration-700 ${playing ? "scale-105" : "scale-100"}`} style={{ filter: playing ? "brightness(0.55)" : "brightness(0.75)" }} />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <button onClick={() => setPlaying(!playing)} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${playing ? "opacity-0 scale-75" : "opacity-100 scale-100"}`} aria-label={playing ? "Pause" : "Play"}>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200">
          {playing ? <Pause size={24} className="text-primary-foreground" /> : <Play size={24} className="text-primary-foreground ml-1 fill-current" />}
        </div>
      </button>

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-6 md:pb-8">
        <div className="w-full h-0.5 bg-white/20 mb-5 cursor-pointer relative">
          <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1.5">{video.type}</p>
            <h2 className="font-display text-xl md:text-3xl font-black text-white leading-tight">{video.title}</h2>
            <p className="text-white/60 text-sm mt-1">{video.artist}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-white/60">{video.duration}</span>
            <button onClick={() => setMuted(!muted)} className="text-white/60 hover:text-white transition-colors" aria-label="Toggle mute">
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button className="text-white/60 hover:text-white transition-colors" aria-label="Fullscreen">
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onSelect, active }: { video: VideoItem; onSelect: () => void; active: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button className={`group text-left w-full transition-all duration-200 ${active ? "opacity-100" : "opacity-80 hover:opacity-100"}`} onClick={onSelect} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative aspect-video overflow-hidden bg-muted mb-4">
        <img src={video.thumb} alt={video.alt} className={`w-full h-full object-cover transition-all duration-500 ${hovered ? "scale-105 brightness-75" : "scale-100 brightness-60"}`} />
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
            <Play size={14} className="text-primary-foreground fill-current ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5">
          <span className="font-mono text-[10px] text-white tracking-wide">{video.duration}</span>
        </div>
        {active && <div className="absolute inset-0 border-2 border-primary pointer-events-none" />}
      </div>

      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-mono text-[9px] text-primary tracking-widest uppercase mb-1">{video.type}</p>
          <h3 className={`font-display font-black text-sm leading-tight truncate transition-colors ${hovered ? "text-primary" : "text-foreground"}`}>{video.title}</h3>
          <p className="text-muted-foreground text-xs mt-0.5">{video.artist} · {video.year}</p>
        </div>
        <ArrowUpRight size={14} className={`shrink-0 mt-0.5 transition-all duration-200 ${hovered ? "text-primary" : "text-muted-foreground opacity-0 group-hover:opacity-100"}`} />
      </div>
    </button>
  );
}

function FeaturedShow({ show }: { show: Show }) {
  const Icon = CATEGORY_ICONS[show.category];
  return (
    <div>
      <div className="relative aspect-[16/7] overflow-hidden bg-muted mb-6">
        <img src={show.thumb} alt={show.alt} className="w-full h-full object-cover brightness-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            {show.new && (<span className="bg-primary text-primary-foreground font-mono text-[9px] tracking-widest uppercase px-2.5 py-1">New</span>)}
            <span className={`flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase ${CATEGORY_COLORS[show.category]}`}>
              <Icon size={11} /> {show.category}
            </span>
            <span className="font-mono text-[10px] text-white/40 tracking-wide">{show.episode}</span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-black text-white leading-tight mb-2">{show.title}</h2>
          <p className="text-white/60 text-sm">with {show.guest} · hosted by {show.host}</p>
        </div>
        <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-black/60 px-3 py-1.5">
          <Clock size={11} className="text-white/60" />
          <span className="font-mono text-[10px] text-white/60 tracking-wide">{show.duration}</span>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed max-w-3xl">{show.excerpt}</p>
    </div>
  );
}

function ShowCard({ show }: { show: Show }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden bg-muted mb-4">
        <img src={show.thumb} alt={show.alt} className="w-full h-full object-cover brightness-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl">
            <Play size={14} className="text-primary-foreground fill-current ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase bg-black/70 px-2 py-1 text-amber-400">
            <Mic size={9} /> Interview
          </span>
          <span className="font-mono text-[10px] text-white/70 bg-black/70 px-2 py-1">{show.duration}</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] text-muted-foreground tracking-widest">{show.episode} · {show.date}</span>
          <ArrowUpRight size={13} className="transition-all duration-200 text-muted-foreground opacity-0 group-hover:opacity-100" />
        </div>
        <h3 className="font-display font-black text-base leading-tight mb-1 text-foreground">{show.title}</h3>
        <p className="text-muted-foreground text-xs mb-2">with <span className="text-foreground">{show.guest}</span></p>
        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{show.excerpt}</p>
      </div>
    </article>
  );
}

export default function Studio() {
  const [filterV, setFilterV] = useState<FilterV>("All");
  const [featured, setFeatured] = useState<VideoItem>(VIDEOS[0]);

  const [filterS, setFilterS] = useState<FilterS>("All");
  const featuredShow = SHOWS.find((s) => s.featured) ?? SHOWS[0];

  const filteredVideos = filterV === "All" ? VIDEOS : VIDEOS.filter((v) => v.type === filterV);
  const restShows = SHOWS.filter((s) => !s.featured);
  const filteredShows = filterS === "All" ? restShows : restShows.filter((s) => s.category === filterS);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-10 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-3">EchooRoom Studio</p>
            <h1 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground">The Studio</h1>
            <p className="text-muted-foreground mt-3 max-w-md leading-relaxed">Recorded artist sessions, live performances, specials, and shows — captured in cinematic quality from our state-of-the-art studios.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS_V.map((f) => (
              <button key={f} onClick={() => setFilterV(f)} className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-200 ${filterV === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 items-start">
          <div className="sticky top-20">
            <FeaturedPlayer video={featured} />
            <div className="mt-5 flex items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[9px] text-primary tracking-widest uppercase border border-primary/30 px-2 py-0.5">{featured.type}</span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground"><Clock size={11} /> {featured.duration}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{featured.year}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{featured.description}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{filteredVideos.length} {filterV === "All" ? "videos" : filterV.toLowerCase() + "s"}</p>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Latest first</p>
            </div>

            {filteredVideos.map((v) => (
              <VideoCard key={v.id} video={v} active={featured.id === v.id} onSelect={() => setFeatured(v)} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24 border-t border-border pt-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">All Sessions & Shows</h2>
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase hidden md:block">{VIDEOS.length + SHOWS.length} recordings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-border mb-6">
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Shows — {filteredShows.length} results</p>
                <div className="flex flex-wrap gap-2">
                  {FILTERS_S.map((f) => (
                    <button key={f} onClick={() => setFilterS(f)} className={`px-4 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-200 ${filterS === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {featuredShow && (
                <div className="mb-8">
                  <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-4">Latest episode</p>
                  <FeaturedShow show={featuredShow} />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredShows.map((s) => (
                  <ShowCard key={s.id} show={s} />
                ))}
              </div>

              {filteredShows.length === 0 && (
                <div className="py-24 text-center">
                  <p className="font-display text-2xl font-black text-muted-foreground">No episodes yet</p>
                  <p className="text-muted-foreground text-sm mt-2">Check back soon.</p>
                </div>
              )}
            </div>
          </div>

          <div className="">
            <div className="border-t border-border bg-card pt-6">
              <div className="px-6 md:px-0">
                <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-2">Never miss an episode</p>
                <h3 className="font-display text-xl font-black text-foreground mb-2">Subscribe to EchooRoom Shows</h3>
                <p className="text-muted-foreground text-sm mb-4">New interviews, podcasts, and programmes every week.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {['Spotify','Apple Podcasts','YouTube'].map((p) => (
                    <button key={p} className="px-5 py-3 border border-border text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors font-mono tracking-wide text-[11px] uppercase">{p}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
