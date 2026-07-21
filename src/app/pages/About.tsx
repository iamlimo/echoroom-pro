import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function RevealBlock({
  children,
  delayMs = 0,
  className = "",
  y = 18,
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  y?: number;
}) {
  const { ref, visible } = useInView(0.12);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 560ms ease ${delayMs}ms, transform 560ms ease ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

function scrollToHash(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();

  const contactHash = useMemo(() => "#contact", []);

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToHash(contactHash), 80);
      return;
    }
    scrollToHash(contactHash);
  };

  const goToServices = () => {
    if (location.pathname !== "/services") {
      navigate("/services");
      return;
    }
    scrollToHash("#services");
  };

  const CORE_VALUES = [
    {
      icon: Workflow,
      title: "One disciplined creative engine",
      desc: "From script to final delivery, every moving part is aligned under one accountable team.",
    },
    {
      icon: Sparkles,
      title: "Emotion-first storytelling",
      desc: "We build work that feels intentional, sensory, and memorable—never forced or overproduced.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted by ambitious brands",
      desc: "Clear systems, secure handling, and professional communication keep every project calm and reliable.",
    },
  ];

  const JOURNEY = [
    {
      step: "01",
      title: "We listen for the signal",
      desc: "Every brief starts with the real objective: audience, tension, brand voice, and the feeling the story needs to create.",
    },
    {
      step: "02",
      title: "We shape it into a premium system",
      desc: "Strategy, scripting, design, production, and distribution are orchestrated as one fluid production path.",
    },
    {
      step: "03",
      title: "We deliver with presence",
      desc: "The final result is designed to look sharp, feel cinematic, and perform with confidence on every channel.",
    },
  ];

  const STATS = [
    { value: "11", label: "core service pillars" },
    { value: "24h", label: "typical response window" },
    { value: "NDA", label: "by default for sensitive work" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-16 md:pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="relative overflow-hidden">
          <div className="absolute -top-24 -left-10 h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-[320px] w-[320px] rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <RevealBlock>
              <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-6">
                About EchooRoom
              </p>
              <h1 className="font-display text-[clamp(3.1rem,7vw,6.7rem)] font-black leading-[0.92] tracking-tight text-foreground max-w-4xl">
                Where bold ideas become culture-shaping media.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mt-6">
                EchooRoom is an entertainment and creative agency that helps ambitious brands and cultural properties translate vision into premium, high-impact storytelling.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={goToContact}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors"
                >
                  Start a project <ArrowRight size={15} />
                </button>
                <button
                  onClick={goToServices}
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm tracking-wide hover:border-primary/60 hover:text-primary transition-colors"
                >
                  Explore capabilities
                </button>
              </div>
            </RevealBlock>

            <RevealBlock delayMs={90}>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <p className="font-mono text-[10px] text-primary tracking-[0.22em] uppercase mb-4">
                    What we do best
                  </p>
                  <div className="grid gap-3">
                    {[
                      "Creative direction and brand storytelling",
                      "Cinematic video and motion systems",
                      "Event, entertainment, and experiential production",
                      "Strategic media, PR, and audience amplification",
                    ].map((item) => (
                      <div
                        key={item}
                        className="group flex items-center gap-3 rounded-2xl border border-transparent bg-card/70 px-4 py-3 transition-colors duration-200 hover:border-primary/25 hover:bg-card"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Sparkles size={14} />
                        </span>
                        <span className="text-sm text-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border bg-card px-4 py-4">
                      <div className="font-display text-2xl font-black text-primary">{stat.value}</div>
                      <div className="text-[11px] text-muted-foreground uppercase tracking-[0.16em] mt-1 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="mb-12 max-w-3xl">
          <RevealBlock>
            <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4">
              Why EchooRoom
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground">
              Premium creative execution with a calmer, sharper process.
            </h2>
          </RevealBlock>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CORE_VALUES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealBlock key={item.title} delayMs={idx * 90}>
                <div className="group rounded-[18px] border border-border bg-card p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground tracking-[0.18em] uppercase">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-black text-foreground mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-start">
            <RevealBlock>
              <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4">
                Our story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-foreground">
                We are built for ideas that need both taste and traction.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mt-5 max-w-xl">
                EchooRoom combines entertainment instinct, strategic thinking, and production discipline to help brands and cultural projects feel unmistakable.
              </p>
            </RevealBlock>

            <div className="space-y-4">
              {JOURNEY.map((item, idx) => (
                <RevealBlock key={item.step} delayMs={idx * 80}>
                  <div className="flex items-start gap-4 rounded-[18px] border border-border bg-background/70 p-5 transition-colors duration-250 hover:border-primary/20">
                    <div className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase border border-primary/30 px-3 py-1 rounded-full shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-black text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.desc}</p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <RevealBlock>
            <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4">
              What clients can expect
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground max-w-3xl">
              A partner who makes the process feel clear, creative, and commercially sharp.
            </h2>
          </RevealBlock>

          <RevealBlock delayMs={90}>
            <div className="rounded-[20px] border border-border bg-card p-6 md:p-8 max-w-md transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wand2 size={16} />
                </span>
                <div>
                  <div className="font-display text-xl font-black text-foreground">Creative clarity</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Less noise. More purposeful output.
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm text-foreground/90 leading-relaxed">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={15} className="text-primary mt-0.5 shrink-0" />
                  <span>Professional workflows that protect your brand and your timelines.</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck size={15} className="text-primary mt-0.5 shrink-0" />
                  <span>One team managing strategy, production, and rollout without chaos.</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck size={15} className="text-primary mt-0.5 shrink-0" />
                  <span>Work that looks premium and performs with conviction.</span>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="py-20 bg-primary/5 border-y border-border">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <RevealBlock>
              <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4">
                Let’s build something memorable
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-foreground max-w-3xl">
                If your next story deserves attention, we should start with the right brief.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-2xl">
                Whether you need a branded campaign, entertainment production support, or a complete creative engine, EchooRoom is ready to help you move with clarity.
              </p>
            </RevealBlock>

            <div className="flex flex-col sm:flex-row gap-3">
              <RevealBlock delayMs={80}>
                <button
                  onClick={goToContact}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors"
                >
                  Start your brief <ArrowRight size={15} />
                </button>
              </RevealBlock>
              <RevealBlock delayMs={160}>
                <button
                  onClick={goToServices}
                  className="inline-flex items-center justify-center gap-2 border border-border bg-card px-7 py-4 font-bold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Play size={14} className="fill-current" /> View services
                </button>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
