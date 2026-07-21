import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowUpRight, Clock } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

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
  {
    id: "v2",
    title: "Unplugged at the Studio",
    artist: "Tems",
    type: "Performance",
    duration: "28:44",
    year: "2024",
    thumb: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=450&fit=crop&auto=format",
    alt: "Live performance session",
    description: "Raw, stripped-back performance with a live band. No effects, no autotune.",
  },
  {
    id: "v3",
    title: "The Visual EP — Making Of",
    artist: "Burna Boy",
    type: "Special",
    duration: "55:02",
    year: "2024",
    thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop&auto=format",
    alt: "Behind the scenes special",
    description: "A full documentary following the creation of a visual EP from concept to screen.",
  },
  {
    id: "v4",
    title: "Frequency Sessions Vol. 3",
    artist: "Fireboy DML",
    type: "Live Session",
    duration: "36:15",
    year: "2024",
    thumb: "https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=800&h=450&fit=crop&auto=format",
    alt: "Frequency sessions recording",
    description: "The third instalment of our acclaimed Frequency Sessions series, captured in 4K.",
  },
  {
    id: "v5",
    title: "Soundstage — Live at Echo",
    artist: "Asake",
    type: "Performance",
    duration: "1:04:30",
    year: "2023",
    thumb: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=450&fit=crop&auto=format",
    alt: "Live soundstage performance",
    description: "Full live performance recorded on our purpose-built soundstage with an invited audience.",
  },
  {
    id: "v6",
    title: "Studio Diaries — Chapter One",
    artist: "Davido",
    type: "Behind The Scenes",
    duration: "22:08",
    year: "2023",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&auto=format",
    alt: "Studio diaries behind the scenes",
    description: "First chapter of an ongoing docuseries following artists through their full recording process.",
  },
  {
    id: "v7",
    title: "Acoustic Gold Sessions",
    artist: "Omah Lay",
    type: "Live Session",
    duration: "31:55",
    year: "2023",
    thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop&auto=format",
    alt: "Acoustic session recording",
    description: "Purely acoustic, purely emotional. Omah Lay unplugged in the live room.",
  },
  {
    id: "v8",
    title: "New Year's Spectacular",
    artist: "Various Artists",
    type: "Special",
    duration: "2:14:00",
    year: "2023",
    thumb: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=450&fit=crop&auto=format",
    alt: "New Year's special event",
    description: "Our annual end-of-year special featuring eight artists across three hours of live performance.",
  },
];

const FILTERS = ["All", "Live Session", "Performance", "Special", "Behind The Scenes"] as const;
type Filter = (typeof FILTERS)[number];

// ─── Featured Player ──────────────────────────────────────────────────────────

function FeaturedPlayer({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 100 ? (setPlaying(false), 0) : p + 0.08));
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing]);

  const elapsed = Math.floor((progress / 100) * (42 * 60 + 18));
  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div
      className="relative w-full aspect-video bg-black overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <img
        src={video.thumb}
        alt={video.alt}
        className={`w-full h-full object-cover transition-all duration-700 ${playing ? "scale-105" : "scale-100"}`}
        style={{ filter: playing ? "brightness(0.55)" : "brightness(0.75)" }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Centre play button */}
      <button
        onClick={() => setPlaying(!playing)}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          playing ? (hovered ? "opacity-100 scale-100" : "opacity-0 scale-75") : "opacity-100 scale-100"
        }`}
        aria-label={playing ? "Pause" : "Play"}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200">
          {playing
            ? <Pause size={24} className="text-primary-foreground" />
            : <Play size={24} className="text-primary-foreground ml-1 fill-current" />
          }
        </div>
      </button>

      {/* Info overlay — bottom */}
      <div className={`absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-6 md:pb-8 transition-all duration-300 ${hovered || !playing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
        {/* Progress bar */}
        <div
          className="w-full h-0.5 bg-white/20 mb-5 cursor-pointer relative group/bar"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setProgress(((e.clientX - rect.left) / rect.width) * 100);
          }}
        >
          <div
            className="h-full bg-primary transition-all duration-100 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1.5">{video.type}</p>
            <h2 className="font-display text-xl md:text-3xl font-black text-white leading-tight">{video.title}</h2>
            <p className="text-white/60 text-sm mt-1">{video.artist}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-white/60">{fmt(elapsed)} / {video.duration}</span>
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

// ─── Video Card ───────────────────────────────────────────────────────────────

function VideoCard({ video, onSelect, active }: { video: VideoItem; onSelect: () => void; active: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`group text-left w-full transition-all duration-200 ${active ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted mb-4">
        <img
          src={video.thumb}
          alt={video.alt}
          className={`w-full h-full object-cover transition-all duration-500 ${hovered ? "scale-105 brightness-75" : "scale-100 brightness-60"}`}
        />
        {/* Play overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
            <Play size={14} className="text-primary-foreground fill-current ml-0.5" />
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5">
          <span className="font-mono text-[10px] text-white tracking-wide">{video.duration}</span>
        </div>
        {/* Active indicator */}
        {active && <div className="absolute inset-0 border-2 border-primary pointer-events-none" />}
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-mono text-[9px] text-primary tracking-widest uppercase mb-1">{video.type}</p>
          <h3 className={`font-display font-black text-sm leading-tight truncate transition-colors ${hovered ? "text-primary" : "text-foreground"}`}>
            {video.title}
          </h3>
          <p className="text-muted-foreground text-xs mt-0.5">{video.artist} · {video.year}</p>
        </div>
        <ArrowUpRight size={14} className={`shrink-0 mt-0.5 transition-all duration-200 ${hovered ? "text-primary" : "text-muted-foreground opacity-0 group-hover:opacity-100"}`} />
      </div>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Studio() {
  const [filter, setFilter] = useState<Filter>("All");
  const [featured, setFeatured] = useState<VideoItem>(VIDEOS[0]);

  const filtered = filter === "All" ? VIDEOS : VIDEOS.filter((v) => v.type === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <div className="pt-24 pb-10 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-3">EchooRoom Studio</p>
            <h1 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground">
              The Studio
            </h1>
            <p className="text-muted-foreground mt-3 max-w-md leading-relaxed">
              Recorded artist sessions, live performances, and specials — captured in cinematic quality from our state-of-the-art studios.
            </p>
          </div>
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-200 ${
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
      </div>

      {/* Main layout: featured left, grid right */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Featured player */}
          <div className="sticky top-20">
            <FeaturedPlayer video={featured} />
            {/* Description below player */}
            <div className="mt-5 flex items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[9px] text-primary tracking-widest uppercase border border-primary/30 px-2 py-0.5">{featured.type}</span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                    <Clock size={11} /> {featured.duration}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">{featured.year}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{featured.description}</p>
              </div>
            </div>
          </div>

          {/* Video list */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                {filtered.length} {filter === "All" ? "videos" : filter.toLowerCase() + "s"}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Latest first</p>
            </div>
            {filtered.map((v) => (
              <VideoCard
                key={v.id}
                video={v}
                active={featured.id === v.id}
                onSelect={() => setFeatured(v)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full grid — below fold */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24 border-t border-border pt-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">All Sessions</h2>
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase hidden md:block">
            {VIDEOS.length} recordings
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEOS.map((v) => (
            <VideoCard
              key={v.id + "-grid"}
              video={v}
              active={featured.id === v.id}
              onSelect={() => { setFeatured(v); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
