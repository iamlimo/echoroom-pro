import { useEffect, useMemo, useRef, useState, type TouchEvent } from "react";
import { useLocation } from "react-router";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import * as THREE from "three";
import {
  ALL_SHOWS,
  CONTENT_KINDS,
  SHOW_CATEGORY_DATA,
  type ContentKind,
} from "../data/showCategories";

const normalizeCategory = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const toCanonicalCategory = (value: string): ContentKind | null => {
  const normalized = normalizeCategory(value);
  if (!normalized) return null;

  const directMatch = CONTENT_KINDS.find(
    (category) => normalizeCategory(category) === normalized,
  );
  if (directMatch) return directMatch;

  const aliases: Record<string, ContentKind> = {
    "live session": "Live sessions",
    special: "Specials",
    "behind the scene": "Behind the scenes",
    story: "Stories",
    interview: "Interviews",
  };

  return aliases[normalized] ?? null;
};

const isYouTubeUrl = (value: string | undefined | null) => {
  if (!value) return false;
  try {
    const u = new URL(value);
    const host = u.hostname.toLowerCase();
    return host.includes('youtube.com') || host.includes('youtu.be');
  } catch {
    return false;
  }
};

const getYouTubeEmbedUrl = (value: string) => {
  try {
    const u = new URL(value);
    const host = u.hostname.toLowerCase();
    let id = '';
    if (host.includes('youtu.be')) {
      id = u.pathname.slice(1);
    } else {
      // youtube.com
      if (u.searchParams.has('v')) id = u.searchParams.get('v') || '';
      else if (u.pathname.startsWith('/shorts/')) id = u.pathname.split('/')[2] || '';
      else {
        const parts = u.pathname.split('/');
        id = parts[parts.length - 1] || '';
      }
    }
    if (!id) return '';
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0`;
  } catch {
    return '';
  }
};

export default function ShowsPage() {
  const location = useLocation();
  const selectedCategory = useMemo(() => {
    const rawValue = new URLSearchParams(location.search).get("category");
    if (!rawValue) return null;
    return toCanonicalCategory(rawValue);
  }, [location.search]);

  const slidesForDisplay = useMemo(() => {
    if (selectedCategory) {
      return SHOW_CATEGORY_DATA[selectedCategory];
    }

    return ALL_SHOWS;
  }, [selectedCategory]);

  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(true);
  const [isThrottled, setIsThrottled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    setActiveSlide(0);
  }, [selectedCategory]);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    const duration = 4800;
    let current = 0;
    const interval = window.setInterval(() => {
      current = Math.min(100, current + Math.floor(Math.random() * 7) + 4);
      setProgress(current);

      if (current >= 100) {
        window.clearInterval(interval);
        timeline.to(".studio-loader", {
          yPercent: -110,
          opacity: 0,
          duration: 1.4,
        });
        timeline.fromTo(
          ".studio-shell",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 1.3, clearProps: "all" },
          "<0.35",
        );
        window.setTimeout(() => setLoading(false), 500);
      }
    }, duration / 12);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.load();
    void video.play().catch(() => {
      // Autoplay fallback handled by muted attribute
    });

    gsap.fromTo(
      ".slide-meta",
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
    );
    gsap.fromTo(
      ".category-card",
      { opacity: 0, x: 18 },
      { opacity: 1, x: 0, duration: 0.75, stagger: 0.05, ease: "power3.out" },
    );
  }, [activeSlide, selectedCategory]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 20);
    camera.position.z = 3;

    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      sizes[i] = Math.random() * 2 + 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const clock = new THREE.Clock();
    let frameId = 0;

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      const time = clock.getElapsedTime();
      const positionsArray = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i += 1) {
        const idx = i * 3;
        positionsArray[idx + 0] += Math.sin(time + i * 0.1) * 0.0008;
        positionsArray[idx + 1] += Math.cos(time + i * 0.12) * 0.0009;
        positionsArray[idx + 2] += Math.sin(time + i * 0.15) * 0.0005;
      }

      geometry.attributes.position.needsUpdate = true;
      points.rotation.y = time * 0.015;
      points.rotation.x = Math.sin(time * 0.2) * 0.02;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  const clampIndex = (next: number) => {
    if (next < 0) return 0;
    if (next >= slidesForDisplay.length)
      return Math.max(slidesForDisplay.length - 1, 0);
    return next;
  };

  const changeSlide = (next: number) => {
    setActiveSlide(clampIndex(next));
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (loading || isThrottled || touchStartY.current === null) return;
    const delta = touchStartY.current - event.changedTouches[0]?.clientY;
    if (Math.abs(delta) < 40) {
      touchStartY.current = null;
      return;
    }

    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 600);
    changeSlide(activeSlide + (delta > 0 ? 1 : -1));
    touchStartY.current = null;
  };

  const slide = slidesForDisplay[activeSlide] ?? slidesForDisplay[0];

  if (!slide) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div
        className={`studio-loader fixed inset-0 z-[90] flex items-center justify-center bg-[#030303] transition-opacity ${loading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="w-full max-w-md px-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/60">
            EchooRoom Studio
          </p>
          <p className="mt-4 text-5xl font-black tracking-[0.24em] text-white">
            {progress}%
          </p>
          <div className="mt-5 h-2 overflow-hidden rounded-full border border-white/20 bg-white/5">
            <div
              className="h-full bg-white transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
            {selectedCategory
              ? `${selectedCategory} showcase`
              : "Welcome to the EchooRoom experience"}
          </p>
        </div>
      </div>

      <div
        className={`studio-shell transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative min-h-screen">
          <div className="absolute inset-0 overflow-hidden">
            {isYouTubeUrl(slide.backgroundVideoUrl) ? (
              <div className="absolute inset-0">
                <iframe
                  title={slide.title}
                  src={getYouTubeEmbedUrl(slide.backgroundVideoUrl)}
                  className="absolute inset-0 h-full w-full object-cover"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                ref={videoRef}
                key={slide.id}
                className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-105 saturate-110"
                muted={muted}
                crossOrigin="anonymous"
                onError={() => console.error("Video element error:", videoRef.current?.error)}
                loop
                autoPlay
                playsInline
                preload="auto"
                poster={slide.thumbLink}
              >
                <source
                  src={
                    (typeof window !== 'undefined' && window.location.hostname === 'localhost')
                      ? `/.netlify/functions/proxy-video?url=${encodeURIComponent(slide.backgroundVideoUrl)}`
                      : slide.backgroundVideoUrl
                  }
                  type="video/mp4"
                />
              </video>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />
            <canvas
              ref={canvasRef}
              className="pointer-events-none absolute inset-0 h-full w-full"
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid items-end gap-8 lg:grid-cols-[1.7fr_0.9fr]">
              <section className="slide-meta max-w-3xl space-y-6 pb-1 sm:pb-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                  {slide.category === "Live sessions" ? (
                    <span
                      className="flex h-3 items-end gap-0.5"
                      role="status"
                      aria-label="Live session active"
                    >
                      <span className="h-1.5 w-0.5 animate-pulse bg-white/80" />
                      <span className="h-3 w-0.5 animate-pulse bg-white/80 [animation-delay:160ms]" />
                      <span className="h-2 w-0.5 animate-pulse bg-white/80 [animation-delay:320ms]" />
                    </span>
                  ) : (
                    <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                  )}
                  <span>{slide.category}</span>
                </div>
                <div className="space-y-5">
                  <h1 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                    {slide.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={slide.watchLink ?? "/shows"}
                    target={
                      slide.watchLink?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      slide.watchLink?.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/40 hover:bg-white/15"
                  >
                    Watch on Youtube
                    <ArrowUpRight size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setMuted((value) => !value)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10"
                  >
                    {muted ? <Volume2 size={16} /> : <VolumeX size={16} />}
                    {muted ? "Unmute" : "Mute"}
                  </button>
                </div>
                <p className="max-w-xl text-sm uppercase tracking-[0.32em] text-white/45">
                  {selectedCategory
                    ? `Showing ${selectedCategory} previews.`
                    : "Select a category to change the preview, or swipe on touch devices."}
                </p>
              </section>

              <aside className="rounded-[1.5rem] border border-white/15 bg-black/45 p-4 backdrop-blur-xl lg:mb-3">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-white/50">
                      The Echoroom Studio
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {selectedCategory ?? "All shows"}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/60">
                    {activeSlide + 1}/{slidesForDisplay.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {slidesForDisplay.map((item, index) => {
                    const isActive = index === activeSlide;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`category-card group w-full overflow-hidden rounded-xl border px-4 py-3 text-left transition ${isActive ? "border-white/50 bg-white/10" : "border-white/10 bg-black/20 hover:border-white/30 hover:bg-white/5"}`}
                        onClick={() => changeSlide(index)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/85">
                              {item.category === "Live sessions" ? (
                                <span
                                  className="flex h-3 items-end gap-0.5"
                                  aria-label="Live session active"
                                >
                                  <span className="h-1.5 w-0.5 animate-pulse bg-white/80" />
                                  <span className="h-3 w-0.5 animate-pulse bg-white/80 [animation-delay:160ms]" />
                                  <span className="h-2 w-0.5 animate-pulse bg-white/80 [animation-delay:320ms]" />
                                </span>
                              ) : null}
                              {item.category}
                            </p>
                            <p className="mt-1 truncate text-xs text-white/45">
                              {item.title}
                            </p>
                          </div>
                          <span className="pt-0.5 text-[10px] tabular-nums text-white/35">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/50">
                          <span>{isActive ? "Playing" : "Preview"}</span>
                          <span>{item.badge ?? "Live"}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
