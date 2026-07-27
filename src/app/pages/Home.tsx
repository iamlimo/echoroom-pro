import { useState } from "react";
import { ArrowRight, ArrowUpRight, Play, CheckCircle2 } from "lucide-react";

const INDUSTRIES = [
  "Commercial Banking", "Fintech", "Manufacturing", "Retail & FMCG",
  "Real Estate", "Global NGOs", "Telecom Giants",
  "High-Growth Startups", "Mid-Market Enterprises", "Tech Companies",
];

const SERVICES = [
  { num: "01", title: "Media Production", desc: "Every brand has a story. The most successful brands know how to tell it. We create premium media productions—from television commercials and brand films to documentaries, digital content, podcasts, and live broadcasts—that help organisations build trust, inspire action, and create lasting business impact." },
  { num: "02", title: "Brand Strategy", desc: "Great brands are built on clarity, not coincidence. We help organisations define who they are, what they stand for, and how they create value—building distinctive brands that earn trust, inspire loyalty, and drive long-term growth." },
  { num: "03", title: "Creative Strategy", desc: "Creativity is most powerful when it solves business problems. We develop insight-driven creative strategies that transform ideas into campaigns, experiences, and stories that connect with audiences and deliver measurable results." },
  { num: "04", title: "Digital Marketing", desc: "Growth doesn't happen by chance. It happens through strategy. We design integrated digital marketing campaigns that combine data, creativity, and technology to increase visibility, generate demand, and accelerate business performance across every digital touchpoint." },
  { num: "05", title: "White-Label Enterprise Solutions", desc: "Backend creative execution engineered to scale content production without increasing internal headcount — under your brand name." },
  { num: "06", title: "Media Buying", desc: "The right message deserves the right audience. We plan, negotiate, and optimise media investments across digital, broadcast, print, and outdoor channels—maximising reach, improving efficiency, and delivering measurable campaign performance."},
  { num: "07", title: "Social Media Management", desc: "Conversations shape brands every day. We help organisations build meaningful relationships through strategic content, community management, platform growth, and social media campaigns that strengthen brand presence and drive engagement." },
  { num: "08", title: "PR & Communications", desc: "Reputation is earned through every conversation. We help organisations communicate with confidence, build credibility, manage public perception, and strengthen relationships through strategic public relations and corporate communications." },
  { num: "09", title: "Experiential Marketing", desc: "People remember how brands make them feel. We create immersive brand experiences that bring ideas to life, deepen audience engagement, and turn meaningful interactions into lasting brand loyalty." },
  { num: "10", title: "Influencer Marketing", desc: "Influence is built on trust, not just reach. We connect brands with creators, industry voices, and cultural influencers to deliver authentic campaigns that spark conversations, build credibility, and inspire action." },
  { num: "11", title: "BTL Activations", desc: "The strongest brand connections happen in the real world. We design below-the-line activation campaigns that bring brands closer to consumers through memorable experiences, product engagement, and measurable market impact." },
   { num: "12", title: "Event Production", desc: "Every event is an opportunity to create influence. From executive forums and product launches to large-scale conferences and live experiences, we produce events that engage audiences, strengthen brands, and leave lasting impressions." },
    { num: "13", title: "Research & Analytics", desc: "The best decisions begin with better insights. We transform research, market intelligence, and performance analytics into actionable strategies that help organisations understand audiences, measure impact, and make confident business decisions." },
];

const ADVANTAGES = [
  { num: "2.1", title: "Save Costs. Stop Buying Expensive Equipment.", desc: "Turn big upfront costs into a simple, predictable monthly expense. Instant access to our multi-million Naira setup — film studios, design engines, sound stages, and pre-built distribution networks.", icon: "₦" },
  { num: "2.2", title: "No HR Stress, Hiring Hassles, or Creative Burnout.", desc: "A fully trained, expert creative department on demand. Scriptwriters, video editors, sound masters, brand partnership managers, and physical event coordinators — ready now.", icon: "⚡" },
  { num: "2.3", title: "Bulletproof Privacy & Enterprise-Grade Security.", desc: "Encrypted data workflows, isolated file storage, and strict white-label contracts. We work completely behind the scenes — your brand reputation is completely safe.", icon: "🔒" },
  { num: "2.4", title: "One Partner. One Invoice. Zero Micro-Management.", desc: "All 11 marketing and media services under one roof. One account manager, one invoice. Your team stops chasing suppliers and freelancers — permanently.", icon: "✦" },
];

const STATS = [
  { value: "11", label: "Core service pillars" },
  { value: "85%", label: "Drop in negative mentions within 24hrs" },
  { value: "98.2%", label: "Client retention rate" },
  { value: "3×", label: "Share of Voice increase post-crisis" },
];

const ONBOARDING = [
  { step: "01", title: "The Alignment Brief", desc: "A focused 15-minute call to map your quarterly content goals, campaign priorities, and production requirements." },
  { step: "02", title: "The Framework Scope", desc: "We deliver custom retainer tiers or campaign estimates tailored to your exact scale and budget." },
  { step: "03", title: "Studio Rollout", desc: "Camera crews, scriptwriters, and strategy sessions activate. Your pipeline runs — without adding to your headcount." },
];

function Ticker() {
  return (
    <div className="overflow-hidden border-y border-border py-4 select-none">
      <div className="flex gap-12 animate-[ticker_28s_linear_infinite] w-max">
        {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((item, i) => (
          <span key={i} className="text-[11px] font-mono text-muted-foreground tracking-[0.18em] uppercase whitespace-nowrap flex items-center gap-12">
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-black/[0.65]" aria-hidden="true" />
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
              <h3 className="font-display text-[clamp(3.2rem,9vw,8.5rem)] font-black leading-[0.92] tracking-tight text-foreground">
                Great Brands Don't Compete for  <em className="not-italic text-primary">Attention</em><br />, They Earn Influence

               
              </h3>
            </div>

            <div className="lg:max-w-sm pb-2">
              <p className="text-foreground/90 text-lg leading-relaxed mb-8">
EchooRoom is an integrated creative company that helps ambitious organisations build influential brands, create meaningful experiences, and accelerate growth through strategy, storytelling, media, marketing, and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#services" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors">
                  Explore 11 services <ArrowRight size={15} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border border-white/25 text-foreground px-6 py-3.5 text-sm tracking-wide hover:border-primary/60 transition-colors">
                  <Play size={13} className="fill-current" /> Book alignment brief
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-black text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Section 3</p>
        <div className="flex items-end justify-between gap-8">
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground">
            The 11 Core<br />Service Pillars
          </h2>
          <p className="hidden md:block max-w-xs text-muted-foreground text-sm leading-relaxed">
            Explore our specialised services below to turn your brand identity into a high-yielding corporate asset.
          </p>
        </div>
      </div>
      <div className="divide-y divide-border">
        {SERVICES.map((s, i) => (
          <div key={s.num} className="group cursor-pointer" onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}>
            <div className="py-6 md:py-7 grid grid-cols-[56px_1fr_auto] md:grid-cols-[72px_1fr_340px_32px] gap-4 md:gap-8 items-center">
              <span className="font-mono text-xs text-primary tracking-widest font-medium">{s.num}</span>
              <h3 className={`font-display text-xl md:text-3xl font-black transition-colors duration-150 ${active === i ? "text-primary" : "text-foreground"}`}>{s.title}</h3>
              <p className={`hidden md:block text-sm text-muted-foreground leading-relaxed transition-opacity duration-200 ${active === i ? "opacity-100" : "opacity-50"}`}>{s.desc}</p>
              <ArrowUpRight size={18} className={`transition-all duration-200 shrink-0 ${active === i ? "text-primary rotate-0" : "text-muted-foreground -rotate-45"}`} />
            </div>
            <p className="md:hidden text-sm text-muted-foreground leading-relaxed pb-5">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Advantage() {
  return (
    <section id="advantage" className="py-24 bg-card">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Section 2</p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground max-w-2xl">The Enterprise Advantage</h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl leading-relaxed">Four structural reasons your business stops losing time and money on fragmented marketing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {ADVANTAGES.map((adv) => (
            <div key={adv.num} className="bg-card p-8 md:p-10 group hover:bg-secondary transition-colors duration-300">
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[10px] text-primary tracking-widest uppercase border border-primary/30 px-2.5 py-1">{adv.num}</span>
                <span className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">{adv.icon}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-4 leading-tight">{adv.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudioProfile() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-6">Section 1 — The Studio Profile</p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-[1.05] text-foreground mb-8">Your fully outsourced creative department.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">We design premium visual, auditory, and experiential assets for brands that refuse to blend into the background.</p>
          <p className="text-muted-foreground leading-relaxed mb-10">We transform complex corporate narratives and service offerings into high-impact digital assets that capture attention, command authority, and unlock massive commercial value with zero operational friction.</p>
          <div className="space-y-3 mb-10">
            {["Cinematic Enterprise Video Production", "Dynamic Motion Graphics Animation", "Studio-Grade Branded Audio Networks", "Experiential BTL Marketing Activations", "High-Yield Content Retainers"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={15} className="text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-wide hover:gap-3 transition-all duration-200">
            Book your alignment brief <ArrowRight size={15} />
          </a>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=900&fit=crop&auto=format" alt="EchooRoom Studio production environment" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 max-w-[220px]">
            <div className="font-display text-5xl font-black text-primary-foreground leading-none">11</div>
            <div className="font-mono text-[10px] text-primary-foreground/70 tracking-widest mt-2 uppercase leading-snug">Core service pillars under one roof</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section id="casestudy" className="py-24 bg-card">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Section 4 — Archived Impact</p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground">Crisis Mitigation &<br />Reputational Recovery</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border mb-16">
          {[
            { label: "The Challenge", color: "bg-card", content: "A regional corporate organisation faced an unexpected operational disruption during a critical product rollout, causing service delays and a sudden wave of negative public sentiment across major digital platforms." },
            { label: "Our Intervention", color: "bg-secondary", content: "Within two hours, we activated a custom Crisis Management Blueprint — establishing unified response scripts, coordinating with key industry editors, briefing micro-influencers to anchor public attention on the brand's rapid resolution roadmap." },
            { label: "The Result", color: "bg-card", content: "Harmful public mentions fell 85% within the first 24 hours. We secured 14 positive, high-authority editorial placements across top-tier networks inside five days. Customer retention stabilised at 98.2%, and Share of Voice increased threefold." },
          ].map((col) => (
            <div key={col.label} className={`${col.color} p-8 md:p-10`}>
              <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-5 border-b border-border pb-4">{col.label}</p>
              <p className="text-foreground text-sm leading-relaxed">{col.content}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { val: "85%", label: "Drop in harmful mentions within 24 hours" },
            { val: "14", label: "High-authority editorial placements secured" },
            { val: "98.2%", label: "Customer retention post-crisis" },
            { val: "3×", label: "Share of Voice vs. pre-crisis baseline" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-5xl font-black text-primary">{s.val}</div>
              <div className="text-xs text-muted-foreground mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
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
          <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Industries we amplify</p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-foreground mb-6">Built for every sector.</h2>
          <p className="text-muted-foreground text-base leading-relaxed">Modern market leadership belongs to organisations that operate like media companies. We engineer our creative pipeline to adapt precisely to the scale of your operations.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {INDUSTRIES.map((ind) => (
            <div key={ind} className="border border-border px-5 py-4 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200 cursor-default">
              <span className="text-primary mr-2 text-xs">◆</span>{ind}
            </div>
          ))}
          <div className="border border-primary/30 bg-primary/5 px-5 py-4 col-span-2 md:col-span-1">
            <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-2">Scaled for</p>
            <p className="text-sm text-foreground font-medium">Small Businesses · Mid-Scale · Large Corporations</p>
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
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60 mb-8">Our commitment</p>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.08] mb-10">
            &ldquo;We strip the operational overhead and staffing liability out of your marketing calendar while scaling your visual and auditory presence across the market.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-primary-foreground/30" />
            <p className="font-mono text-xs text-primary-foreground/60 tracking-widest uppercase">EchooRoom Studio Ltd — Enterprise Profile</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Onboarding() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Section 5 — Backstage Pass</p>
        <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground">Next steps &<br />client onboarding</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {ONBOARDING.map((step) => (
          <div key={step.step} className="bg-background p-8 md:p-10 group">
            <div className="font-display text-6xl md:text-7xl font-black text-border group-hover:text-primary/20 transition-colors duration-300 mb-6 leading-none">{step.step}</div>
            <h3 className="font-display text-xl md:text-2xl font-black text-primary mb-4">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", size: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">Get in touch</p>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-foreground mb-8">Start something<br />significant.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">Tell us about your organisation and production goals. We respond within 24 hours — no pitch decks, no lengthy intake forms.</p>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-1">Email</p>
                <a href="mailto:Echooroom@starksltd.com" className="text-foreground hover:text-primary transition-colors">Echooroom@starksltd.com</a>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2">Services offered</p>
                {/* <div className="flex flex-wrap gap-2">
                  {["Video Production", "Motion Design", "Audio & Podcast", "PR & Influencer", "White-Label", "BTL / Events"].map((tag) => (
                    <span key={tag} className="font-mono text-[9px] tracking-widest uppercase text-primary border border-primary/25 px-2.5 py-1">{tag}</span>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
          <div>
            {sent ? (
              <div className="border border-primary/30 bg-primary/5 p-12 text-center">
                <div className="text-primary text-4xl mb-5">◆</div>
                <h3 className="font-display text-2xl font-black text-foreground mb-3">Brief received.</h3>
                <p className="text-muted-foreground text-sm">Our team will be in touch within 24 hours to schedule your alignment call.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                {[
                  { name: "name", label: "Your name", type: "text", required: true },
                  { name: "email", label: "Work email address", type: "email", required: true },
                  { name: "company", label: "Organisation / company", type: "text", required: false },
                  { name: "size", label: "Organisation size", type: "text", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/40"
                      placeholder={field.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">Tell us about your production goals</label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none placeholder:text-muted-foreground/40"
                    placeholder="What are you working on? What is the scale of your content needs?"
                  />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-4 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors flex items-center justify-center gap-2">
                  Book the alignment brief <ArrowRight size={15} />
                </button>
                <p className="text-[11px] text-muted-foreground text-center font-mono tracking-wide">We respond within 24 hours — NDA available on request</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-0 select-none">
         <img
            src="/assets/echoroom-logo.png"
            alt="EchoRoom"
            className="h-10 w-auto md:h-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-mono tracking-wide">EchooRoom Studio Ltd</p>
        </div>
        <div className="flex flex-wrap gap-8">
          {["Services", "Studio", "Shows", "Contact"].map((item) => (
            <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">{item}</a>
          ))}
        </div>
        <a href="mailto:Echooroom@starksltd.com" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide">
          Echooroom@starksltd.com
        </a>
      </div>
      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2">
        <p className="font-mono text-[10px] text-muted-foreground tracking-wide">© 2026 EchooRoom Studio Ltd. All rights reserved.</p>
        <p className="font-mono text-[10px] text-muted-foreground tracking-wide">Strategic Capability Document · Enterprise Profile & Service Catalogue</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <Advantage />
      <StudioProfile />
      <CaseStudy />
      <Industries />
      <PullQuote />
      <Onboarding />
      <Contact />
      <Footer />
    </>
  );
}
