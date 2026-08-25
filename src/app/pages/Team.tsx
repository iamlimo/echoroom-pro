import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, BadgeCheck, Check, Sparkles } from "lucide-react";
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
  y = 16,
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
        transition: `opacity 520ms ease ${delayMs}ms, transform 520ms ease ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function initialsBg(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  const hues = [210, 265, 165, 35, 320, 10];
  const hue = hues[hash % hues.length];
  return `hsl(${hue} 85% 50%)`;
}

function scrollToHash(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  imageSrc?: string;
};

function ProfileCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group w-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <article
        className={`overflow-hidden rounded-[20px] border bg-card transition-all duration-300 ${
          open ? "border-primary/35 -translate-y-1 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)]" : "border-border hover:border-border/80"
        }`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          {member.imageSrc ? (
            <img
              src={member.imageSrc}
              alt={`${member.name} portrait`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
              }}
            />
          ) : null}

          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/5 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-primary">Profile</p>
                <h3 className="mt-2 font-display text-[1.55rem] font-black leading-none text-foreground">
                  {member.name}
                </h3>
              </div>
              <span className="rounded-full border border-border/70 bg-card/80 px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase text-foreground/75">
                {open ? "Close" : "Open"}
              </span>
            </div>
          </div>

          {!member.imageSrc ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-24 w-24 items-center justify-center rounded-[20px] text-lg font-black text-foreground/90"
                style={{ background: initialsBg(member.name) }}
              >
                {getInitials(member.name)}
              </span>
            </div>
          ) : null}
        </div>

        <div className="p-5">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary">{member.role}</p>

          <div
            className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${
              open ? "mt-4 max-h-44 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"
            }`}
          >
            <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-muted/15 px-3 py-1 text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="text-xs text-muted-foreground">Hover to preview</span>
            <span className="text-xs font-medium text-foreground/75">{open ? "Hide" : "Brief"}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Team() {
  const navigate = useNavigate();
  const location = useLocation();
  const contactHash = useMemo(() => "#contact", []);

  const teamAsset = (fileName: string) => `/assets/Teams/${encodeURIComponent(fileName)}`;

  const MEMBERS: TeamMember[] = useMemo(
    () => [
      {
        name: "David George",
        role: "Growth and Sales Manager",
        bio: "Builds strategic sales opportunities and partner relationships that keep the pipeline steady and high-value.",
        tags: ["Sales Strategy", "Partnerships", "Revenue Growth"],
        imageSrc: teamAsset("David George \nGrowth and Sales Manager.jpeg"),
      },
      {
        name: "Doris Kenneth",
        role: "Editor",
        bio: "Shapes the rhythm, clarity, and emotional pacing of every final story, frame, and cut.",
        tags: ["Editing", "Story Flow", "Post Production"],
        imageSrc: teamAsset("Doris Kenneth \n\nEditor.jpeg"),
      },
      {
        name: "Elizabeth Akhere",
        role: "Head of Operations",
        bio: "Keeps delivery teams organized, efficient, and resilient across every project milestone.",
        tags: ["Operations", "Project Delivery", "Team Systems"],
        imageSrc: teamAsset("Elizabeth Akhere\n\nHead of Operations.jpeg"),
      },
      {
        name: "Olamide Amubieya",
        role: "HR Lead",
        bio: "Builds a strong team culture through onboarding, retention, and clear people-first systems.",
        tags: ["People Ops", "Talent", "Culture"],
        imageSrc: teamAsset("Olamide Amubieya HR Lead.jpeg"),
      },
      {
        name: "Rosemary Adeoti",
        role: "Growth and Business Development Manager",
        bio: "Turns market insight and strategic outreach into sustainable opportunities and long-term partnerships.",
        tags: ["Business Development", "Growth", "Strategy"],
        imageSrc: teamAsset("Rosemary Adeoti\nGrowth and Business Development Manager.jpeg"),
      },
       {
        name: "Olusegun M Adeniran",
        role: "Founder",
        tags: ["Business Development", "Growth", "Strategy"],
        imageSrc: teamAsset("Olusegun_adeniran.jpeg"),
      },
    ],
    []
  );

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToHash(contactHash), 80);
      return;
    }
    scrollToHash(contactHash);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-6 pb-12 pt-24 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <RevealBlock>
            <div className="p-6 md:p-10 md:py-12">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-primary">Our Team</p>
              </div>

              <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.25rem)] font-black leading-[0.95] tracking-tight text-foreground">
                A disciplined crew.
                <br />
                A calm operating rhythm.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                EchoRoom’s specialists work as one accountable production unit — combining strategy, design, delivery, and communications under a single executive standard.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={goToContact}
                  className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Start a project <ArrowRight size={15} />
                </button>

                <a
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#team")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 text-sm tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Meet the team
                </a>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock delayMs={90}>
            <div className="rounded-[18px] border border-border bg-card p-6 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary">Delivery principles</p>

              <div className="mt-5 space-y-4">
                {[
                  { icon: Check, title: "Systems that scale", desc: "Repeatable execution with no operational drift." },
                  { icon: BadgeCheck, title: "Enterprise-safe", desc: "Privacy-first handling through every production touchpoint." },
                  { icon: Sparkles, title: "Immersive craft", desc: "Premium execution for serious brand presence." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/50 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-display text-base font-black text-foreground">{item.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section id="team" className="px-6 pb-20 md:px-12 max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-14">
          <RevealBlock>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary">Specialists</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-black leading-tight text-foreground max-w-3xl">
              Built to execute.
              <br />
              Designed to elevate.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A focused cadre across creative systems, production, narrative, design, and reputation — aligned around a single quiet standard of delivery.
            </p>
          </RevealBlock>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {MEMBERS.map((member, index) => (
            <RevealBlock key={member.name} delayMs={index * 40} y={10}>
              <ProfileCard member={member} />
            </RevealBlock>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card py-16">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <RevealBlock>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary">CTA</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-black leading-tight text-foreground">
                Ready for a team that ships quietly.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Send a quick brief and we’ll align the right specialists for your next immersive production.
              </p>
            </RevealBlock>

            <div className="flex flex-col gap-3 sm:flex-row">
              <RevealBlock delayMs={70}>
                <button
                  onClick={goToContact}
                  className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  Get a tailored plan <ArrowRight size={15} />
                </button>
              </RevealBlock>

              <RevealBlock delayMs={140}>
                <a
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#team")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center gap-2 border border-border bg-card px-7 py-4 text-sm font-bold tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Explore bios
                </a>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
