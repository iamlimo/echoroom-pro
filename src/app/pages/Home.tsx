import { useState } from "react";
import { ArrowRight, ArrowUpRight, Play, CheckCircle2 } from "lucide-react";

const INDUSTRIES = [
  "Commercial Banking",
  "Fintech",
  "Manufacturing",
  "Retail & FMCG",
  "Real Estate",
  "Global NGOs",
  "Telecom Giants",
  "High-Growth Startups",
  "Mid-Market Enterprises",
  "Tech Companies",
];

const SERVICES = [
  {
    num: "01",
    title: "Media Production",
    desc: "Premium video, audio, and live production for commercials, brand films, podcasts, social content and broadcast-ready campaigns.",
  },
  {
    num: "02",
    title: "Digital Marketing",
    desc: "Integrated digital campaigns that combine data, creativity, and technology to increase visibility, demand, and growth.",
  },
  {
    num: "03",
    title: "Brand Strategy",
    desc: "Define who you are, what you stand for, and how your brand creates value in a crowded market.",
  },
  {
    num: "04",
    title: "Creative Strategy",
    desc: "Transform insight into campaigns, stories and experiences that move audiences and deliver measurable results.",
  },
  {
    num: "05",
    title: "Media Buying",
    desc: "Plan, negotiate and optimise media investments across digital, broadcast, print and outdoor channels.",
  },
  {
    num: "06",
    title: "Social Media Management",
    desc: "Build stronger relationships through content, communities, platform growth and performance-driven social campaigns.",
  },
  {
    num: "07",
    title: "PR & Communications",
    desc: "Manage reputation and public perception with confident storytelling, media relations, and crisis-ready communications.",
  },
  {
    num: "08",
    title: "Experiential Marketing",
    desc: "Design immersive brand experiences that bring ideas to life and create memorable customer moments.",
  },
  {
    num: "09",
    title: "Influencer Marketing",
    desc: "Connect brands with creators and industry voices to deliver authentic campaigns that spark action.",
  },
  {
    num: "10",
    title: "BTL Activations",
    desc: "Create real-world consumer activations, sampling, retail experiences and engagement campaigns that drive impact.",
  },
  {
    num: "11",
    title: "Event Production",
    desc: "Produce conferences, launches, hybrid events and large-format experiences that strengthen brand influence.",
  },
  {
    num: "12",
    title: "Research & Analytics",
    desc: "Turn audience insight, performance data and market intelligence into smarter brand and campaign decisions.",
  },
];

const CAPABILITIES = {
  Strategy: ["Brand Strategy", "Creative Strategy", "Research & Analytics"],
  Marketing: [
    "Digital Marketing",
    "Media Buying",
    "Social Media",
    "PR & Communications",
    "Influencer Marketing",
  ],
  Experiences: [
    "Media Production",
    "Event Production",
    "Experiential Marketing",
    "BTL Activations",
  ],
};

const VALUE_PILLARS = [
  {
    num: "01",
    title: "Brand Strategy",
    desc: "Creating clarity before creativity.",
  },
  { num: "02", title: "Creative & Content", desc: "Ideas that move people." },
  {
    num: "03",
    title: "Marketing & Communications",
    desc: "Building influence across channels.",
  },
  {
    num: "04",
    title: "Experiences & Production",
    desc: "Turning ideas into unforgettable moments.",
  },
];

const STATS = [
  // { value: "12", label: "Core service pillars" },
  // { value: "85%", label: "Drop in negative mentions within 24hrs" },
  // { value: "98.2%", label: "Client retention rate" },
  // { value: "3×", label: "Share of Voice increase post-crisis" },
];

const ONBOARDING = [
  {
    step: "01",
    title: "The Alignment Brief",
    desc: "A focused 15-minute call to map your quarterly content goals, campaign priorities, and production requirements.",
  },
  {
    step: "02",
    title: "The Framework Scope",
    desc: "We deliver custom retainer tiers or campaign estimates tailored to your exact scale and budget.",
  },
  {
    step: "03",
    title: "Studio Rollout",
    desc: "Camera crews, scriptwriters, and strategy sessions activate. Your pipeline runs — without adding to your headcount.",
  },
];

function Ticker() {
  return (
    <div className="overflow-hidden border-y border-border py-4 select-none">
      <div className="flex gap-12 animate-[ticker_28s_linear_infinite] w-max">
        {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-mono text-muted-foreground tracking-[0.18em] uppercase whitespace-nowrap flex items-center gap-12"
          >
            {item}
            <span className="text-primary text-base leading-none">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }`}</style>
    </div>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .hero-bg-video { display: none !important; }
        }
      `}</style>

      <div
        className="hero-bg-video absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/home-back.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Darken the hero background so white/brand text remains readable over the video */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-black/[0.65]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/[0.55] via-black/[0.28] to-black/[0.72]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-end">
            <div>
              <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-8">
                Strategic Capability — Enterprise Profile & Service Catalogue
              </p>
              <h3 className="font-display text-[clamp(3.2rem,9vw,7rem)] font-black leading-[0.92] tracking-tight text-foreground">
                Great Brands Don't Compete for{" "}
                <em className="not-italic text-primary">Attention</em>
                <br /> They Earn{" "}
                <em className="not-italic text-primary">Influence</em>.
              </h3>
            </div>

            <div className="lg:max-w-sm pb-2">
              <p className="text-foreground/90 text-lg leading-relaxed mb-8">
                We partner with ambitious organisations to shape perception,
                inspire action, and accelerate growth through strategy,
                creativity, media, marketing, and experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors"
                >
                  Start a Conversation <ArrowRight size={15} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/25 text-foreground px-6 py-3.5 text-sm tracking-wide hover:border-primary/60 transition-colors"
                >
                  <Play size={13} className="fill-current" /> Book alignment
                  brief
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-black text-primary">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function EditorialStatement() {
  return (
    <section id="editorial" className="py-24 px-6 md:px-12 bg-card">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-6">
              Editorial Statement
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.05] text-foreground max-w-xl">
              Creating Influence That Endures.
            </h2>
          </div>

          <div className="lg:pt-2">
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-5">
              Why We Exist
            </p>
            <p className="text-foreground text-xl md:text-2xl leading-relaxed max-w-2xl">
              Brands are no longer built by advertising alone. They are built
              through every experience they create. Every conversation, every
              campaign, every customer interaction, and every promise shapes
              perception. Echooroom exists to help organisations intentionally
              design those experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  // Featured Capabilities: present capabilities instead of a long list
  return (
    <div></div>
    // <section
    //   id="services"
    //   className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto"
    // >
    //   <div className="mb-12">
    //     <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
    //       <div>
    //         <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">
    //           Featured Capabilities
    //         </p>
    //         <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground max-w-2xl">
    //           Present capabilities, not a long list
    //         </h2>
    //         <p className="max-w-xl text-muted-foreground text-sm leading-relaxed mt-4">
    //           We organise our core strengths into three capability pillars to
    //           make it easy to match solutions to your objectives.
    //         </p>
    //       </div>

    //       <a
    //         href="/services"
    //         className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary/5 px-6 py-3 text-sm font-bold text-primary transition-colors duration-200 hover:bg-primary/15"
    //       >
    //         View our services <ArrowRight size={14} />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="grid gap-6 sm:grid-cols-3">
    //     {Object.entries(CAPABILITIES).map(([k, list]) => (
    //       <div key={k} className="bg-background border border-border p-8">
    //         <h3 className="font-display text-2xl font-black text-foreground mb-4">
    //           {k}
    //         </h3>
    //         <ul className="list-none m-0 p-0 space-y-2 text-sm text-foreground">
    //           {Array.isArray(list) &&
    //             list.map((item) => (
    //               <li key={item} className="">
    //                 {item}
    //               </li>
    //             ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}

function Advantage() {
  return (
    <section id="advantage" className="py-24 bg-card overflow-hidden">
      <style>{`
        @keyframes value-pillar-in {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .value-pillar {
          animation: value-pillar-in 700ms cubic-bezier(.22, 1, .36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .value-pillar { animation: none; }
        }
      `}</style>
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">
            Our Approach
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground max-w-2xl">
            How We Create Value
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl leading-relaxed">
            From first insight to final execution, we connect the disciplines
            that make brands matter.
          </p>
          <br/>
               <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary/5 px-6 py-3 text-sm font-bold text-primary transition-colors duration-200 hover:bg-primary/15"
          >
            View our services <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUE_PILLARS.map((pillar, index) => (
            <article
              key={pillar.title}
              className="value-pillar group relative min-h-[280px] bg-background border border-border p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_18px_45px_-24px_hsl(var(--primary)/.8)]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-primary tracking-widest uppercase border border-primary/30 px-2.5 py-1">
                  {pillar.num}
                </span>
                <ArrowUpRight
                  className="text-primary/50 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={22}
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black text-foreground mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudioProfile() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto hide-out">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-6">
            Section 1 — The Studio Profile
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-[1.05] text-foreground mb-8">
            Your fully outsourced creative department.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            We design premium visual, auditory and experiential assets for
            brands that refuse to blend in. The work we create captures
            attention, strengthens authority and unlocks measurable commercial
            value without extra complexity.
          </p>
          <div className="space-y-3 mb-10">
            {[
              "Cinematic Enterprise Video Production",
              "Dynamic Motion Graphics Animation",
              "Studio-Grade Branded Audio Networks",
              "Experiential BTL Marketing Activations",
              "High-Yield Content Retainers",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={15} className="text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-wide hover:gap-3 transition-all duration-200"
          >
            Book your alignment brief <ArrowRight size={15} />
          </a>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=900&fit=crop&auto=format"
              alt="EchooRoom Studio production environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 max-w-[220px]">
            <div className="font-display text-5xl font-black text-primary-foreground leading-none">
              11
            </div>
            <div className="font-mono text-[10px] text-primary-foreground/70 tracking-widest mt-2 uppercase leading-snug">
              Core service pillars under one roof
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThinkingImpact() {
  return (
    <section id="thinking" className="py-24 overflow-hidden">
      <style>{`
        @keyframes thinking-card-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .thinking-card {
          animation: thinking-card-in 650ms cubic-bezier(.22, 1, .36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .thinking-card { animation: none; }
        }
      `}</style>
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 mb-20">
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-5">
              Experiences & Production
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.02] text-foreground">
              Turning ideas into unforgettable moments.
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-5">
              Our Thinking
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
              We believe the most influential brands are built where strategy
              meets culture, creativity meets business, and every interaction
              becomes an opportunity to be remembered.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {[
            "Why Brands Are Built Through Experiences",
            "Creativity Is a Competitive Advantage",
            "The Future of African Brands",
            "The Business Value of Storytelling",
          ].map((perspective, index) => (
            <article
              key={perspective}
              className="thinking-card group bg-card border border-border p-7 md:p-9 min-h-[170px] flex items-end justify-between gap-6 hover:border-primary/60 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-black leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                {perspective}
              </h3>
              <ArrowUpRight
                className="shrink-0 text-primary/50 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                size={24}
              />
            </article>
          ))}
        </div>
        <div className="pt-10 border-t border-border">
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-8">
            Impact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Campaigns delivered",
              "Productions completed",
              "Industries served",
              "Audience reach",
              "Markets reached",
              "Long-term partnerships",
            ].map((metric, index) => (
              <div
                key={metric}
                className="thinking-card"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="font-display text-4xl md:text-5xl font-black text-primary leading-none">
                  0{index + 1}
                </div>
                <div className="text-xs text-muted-foreground mt-3 leading-snug">
                  {metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
        <div>
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">
            Industries we amplify
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-foreground mb-6">
            Built for every sector.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Modern market leadership belongs to organisations that operate like
            media companies. We engineer our creative pipeline to adapt
            precisely to the scale of your operations.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind}
              className="border border-border px-5 py-4 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200 cursor-default"
            >
              <span className="text-primary mr-2 text-xs">◆</span>
              {ind}
            </div>
          ))}
          <div className="border border-primary/30 bg-primary/5 px-5 py-4 col-span-2 md:col-span-1">
            <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-2">
              Scaled for
            </p>
            <p className="text-sm text-foreground font-medium">
              Small Businesses · Mid-Scale · Large Corporations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="py-24 bg-primary">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="max-w-4xl">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60 mb-8">
            Philosophy
          </p>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.08] mb-6">
            Limitless Creativity. Relentless Innovation. Fearless Exploration.
          </p>
          <p className="text-primary-foreground/80 max-w-3xl">
            Every great brand begins with one courageous conversation. If you're
            ready to shape the future of your organisation, we'd love to build
            it with you.
          </p>
        </div>
      </div>
    </section>
  );
}

function Onboarding() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">
          {" "}
          — Backstage Pass
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground">
          Next steps &<br />
          client onboarding
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {ONBOARDING.map((step) => (
          <div key={step.step} className="bg-background p-8 md:p-10 group">
            <div className="font-display text-6xl md:text-7xl font-black text-border group-hover:text-primary/20 transition-colors duration-300 mb-6 leading-none">
              {step.step}
            </div>
            <h3 className="font-display text-xl md:text-2xl font-black text-primary mb-4">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const resp = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || "Failed to send message");
      }

      setSent(true);
      setForm({ name: "", email: "", company: "", size: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">
              Get in touch
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground mb-8">
              Start something
              <br />
              significant.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Tell us about your organisation and production goals. We respond
              within 24 hours — no pitch decks, no lengthy intake forms.
            </p>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-1">
                  Email
                </p>
                <a
                  href="mailto:Echooroom@starksltd.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Echooroom@starksltd.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2">
                  Services offered
                </p>
              </div>
            </div>
          </div>
          <div>
            {sent ? (
              <div className="border border-primary/30 bg-primary/5 p-12 text-center">
                <div className="text-primary text-4xl mb-5">◆</div>
                <h3 className="font-display text-2xl font-black text-foreground mb-3">
                  Brief received.
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our team will be in touch within 24 hours to schedule your
                  alignment call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  {
                    name: "name",
                    label: "Your name",
                    type: "text",
                    required: true,
                  },
                  {
                    name: "email",
                    label: "Work email address",
                    type: "email",
                    required: true,
                  },
                  {
                    name: "company",
                    label: "Organisation / company",
                    type: "text",
                    required: false,
                  },
                  {
                    name: "size",
                    label: "Organisation size",
                    type: "text",
                    required: false,
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [field.name]: e.target.value })
                      }
                      className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/40"
                      placeholder={field.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
                    Tell us about your production goals
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none placeholder:text-muted-foreground/40"
                    placeholder="What are you working on? What is the scale of your content needs?"
                  />
                </div>
                {error && (
                  <div className="text-sm text-destructive">{error}</div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-4 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? "Sending…" : "Book the alignment brief"}{" "}
                  <ArrowRight size={15} />
                </button>
                <p className="text-[11px] text-muted-foreground text-center font-mono tracking-wide">
                  We respond within 24 hours — NDA available on request
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <EditorialStatement />
      <Services />
      <Advantage />
      <StudioProfile />
      <ThinkingImpact />
      <Industries />
      <PullQuote />
      <Onboarding />
      <Contact />
    </>
  );
}
