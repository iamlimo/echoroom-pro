import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";

// ─── Types ────────────────────────────────────────────────────────────────────

type SubService = {
  title: string;
  what: string;
  output: string;
  impact: string;
};

type Service = {
  num: string;
  id: string;
  title: string;
  tagline: string;
  products: string[];
  pillars: string[];
  subs: SubService[];
  img: string;
  alt: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    num: "01",
    id: "media-production",
    title: "Media Production",
    tagline: "Every brand has a story. The most successful brands know how to tell it. We create premium media productions—from television commercials and brand films to documentaries, digital content, podcasts, and live broadcasts—that help organisations build trust, inspire action, and create lasting business impact.",
    products: [
      "TV Commercials (TVC)",
      "Digital Commercials",
      "Brand Films",
      "Corporate Videos",
      "Documentaries",
      "Live Performance Sessions",
      "Podcast Production",
      "YouTube Shows",
      "Social Media Video Production",
      "Explainer Videos",
      "Product Videos",
      "Motion Graphics & Animation",
      "Photography",
      "Live Streaming",
      "Event Coverage",
      "Drone Videography",
      "Studio Production",
      "Post-Production & Editing",
      "Audio Production",
      "Livestream Broadcast Production",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&h=600&fit=crop&auto=format",
    alt: "Premium media production",
  },
  {
    num: "02",
    id: "brand-strategy",
    title: "Brand Strategy",
    tagline: "Great brands are built on clarity, not coincidence. We help organisations define who they are, what they stand for, and how they create value—building distinctive brands that earn trust, inspire loyalty, and drive long-term growth.",
    products: [
      "Brand Positioning",
      "Brand Identity Development",
      "Brand Architecture",
      "Brand Messaging Frameworks",
      "Employer Branding",
      "Brand Guidelines",
      "Brand Naming",
      "Brand Refresh / Rebranding",
      "Customer Experience Strategy",
      "Go-to-Market Strategy",
      "Brand Audits",
      "Market Positioning Analysis",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop&auto=format",
    alt: "Brand strategy planning",
  },
  {
    num: "03",
    id: "creative-strategy",
    title: "Creative Strategy",
    tagline: "Creativity is most powerful when it solves business problems. We develop insight-driven creative strategies that transform ideas into campaigns, experiences, and stories that connect with audiences and deliver measurable results.",
    products: [
      "Campaign Concept Development",
      "Creative Campaign Planning",
      "Creative Direction",
      "Content Strategy",
      "Storytelling Strategy",
      "Communication Strategy",
      "Campaign Messaging",
      "Creative Workshops",
      "Visual Identity Systems",
      "Editorial Strategy",
      "Creative Ideation",
      "Integrated Campaign Systems",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=900&h=600&fit=crop&auto=format",
    alt: "Creative strategy planning",
  },
  {
    num: "04",
    id: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Growth doesn't happen by chance. It happens through strategy. We design integrated digital marketing campaigns that combine data, creativity, and technology to increase visibility, generate demand, and accelerate business performance across every digital touchpoint.",
    products: [
      "Digital Marketing Strategy",
      "Campaign Management",
      "Performance Marketing",
      "Search Engine Marketing (SEM)",
      "Display Advertising",
      "Email Marketing",
      "Lead Generation Campaigns",
      "Conversion Rate Optimization (CRO)",
      "Marketing Automation",
      "Mobile Marketing",
      "Content Marketing Campaigns",
      "E-commerce Marketing",
      "App Marketing",
      "Digital Growth Strategy",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&auto=format",
    alt: "Digital marketing campaign work",
  },
  {
    num: "05",
    id: "media-buying",
    title: "Media Buying",
    tagline: "The right message deserves the right audience. We plan, negotiate, and optimise media investments across digital, broadcast, print, and outdoor channels—maximising reach, improving efficiency, and delivering measurable campaign performance.",
    products: [
      "Digital Media Buying",
      "TV Buying",
      "Radio Buying",
      "Print Buying",
      "Outdoor (OOH) Buying",
      "Cinema Advertising",
      "Programmatic Advertising",
      "Social Media Ad Buying",
      "Influencer Whitelisting Ads",
      "Campaign Planning & Optimization",
      "Media Audits",
      "Media Negotiation",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1498600553572-b17b5a0e0a85?w=900&h=600&fit=crop&auto=format",
    alt: "Media buying and planning",
  },
  {
    num: "06",
    id: "social-media-management",
    title: "Social Media Management",
    tagline: "Conversations shape brands every day. We help organisations build meaningful relationships through strategic content, community management, platform growth, and social media campaigns that strengthen brand presence and drive engagement.",
    products: [
      "Social Media Strategy",
      "Monthly Content Calendar",
      "Content Creation",
      "Community Management",
      "Social Listening",
      "Reputation Management",
      "Social Media Advertising",
      "Influencer Coordination",
      "Page Growth Strategy",
      "YouTube Channel Management",
      "TikTok Management",
      "Instagram Management",
      "LinkedIn Management",
      "X (Twitter) Management",
      "Analytics & Reporting",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop&auto=format",
    alt: "Social media management",
  },
  {
    num: "07",
    id: "pr-communications",
    title: "PR & Communications",
    tagline: "Reputation is earned through every conversation. We help organisations communicate with confidence, build credibility, manage public perception, and strengthen relationships through strategic public relations and corporate communications.",
    products: [
      "Public Relations Strategy",
      "Press Release Writing & Distribution",
      "Media Relations",
      "Crisis Communication",
      "Corporate Communications",
      "Executive Profiling",
      "Thought Leadership Campaigns",
      "Press Conferences",
      "Media Training",
      "Internal Communications",
      "Speech Writing",
      "Reputation Management",
      "Award Submissions",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=600&fit=crop&auto=format",
    alt: "PR communications",
  },
  {
    num: "08",
    id: "experiential-marketing",
    title: "Experiential Marketing",
    tagline: "People remember how brands make them feel. We create immersive brand experiences that bring ideas to life, deepen audience engagement, and turn meaningful interactions into lasting brand loyalty.",
    products: [
      "Brand Experience Design",
      "Pop-up Experiences",
      "Roadshows",
      "Product Launch Experiences",
      "Trade Fair Experiences",
      "Consumer Engagement Campaigns",
      "Brand Installations",
      "Sampling Campaigns",
      "Interactive Experiences",
      "Campus Tours",
      "Retail Experiences",
      "Event Concept Development",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop&auto=format",
    alt: "Experiential marketing",
  },
  {
    num: "09",
    id: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "Influence is built on trust, not just reach. We connect brands with creators, industry voices, and cultural influencers to deliver authentic campaigns that spark conversations, build credibility, and inspire action.",
    products: [
      "Influencer Strategy",
      "Influencer Discovery",
      "Talent Sourcing",
      "Influencer Campaign Management",
      "Ambassador Programs",
      "Celebrity Partnerships",
      "User Generated Content (UGC) Campaigns",
      "Influencer Contracts & Negotiation",
      "Performance Reporting",
      "Affiliate Influencer Programs",
      "Creator Content Production",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=900&h=600&fit=crop&auto=format",
    alt: "Influencer marketing",
  },
  {
    num: "10",
    id: "btl-activations",
    title: "BTL Activations",
    tagline: "The strongest brand connections happen in the real world. We design below-the-line activation campaigns that bring brands closer to consumers through memorable experiences, product engagement, and measurable market impact.",
    products: [
      "Product Sampling",
      "Retail Activation",
      "Mall Activations",
      "Market Activations",
      "Campus Activations",
      "Street Campaigns",
      "Brand Promotions",
      "Guerrilla Marketing",
      "Merchandising Campaigns",
      "Trade Marketing Activations",
      "Consumer Promotions",
      "Door-to-Door Campaigns",
      "Dealer Activation Programs",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1506321806993-0fbdc8c1d6ef?w=900&h=600&fit=crop&auto=format",
    alt: "BTL activations",
  },
  {
    num: "11",
    id: "event-production",
    title: "Event Production",
    tagline: "Every event is an opportunity to create influence. We produce executive forums, product launches, conferences, and live experiences that engage audiences, strengthen brands, and leave lasting impressions.",
    products: [
      "Corporate Events",
      "Conferences",
      "Product Launches",
      "Awards Shows",
      "Concert Production",
      "Festivals",
      "Experiential Events",
      "Brand Launches",
      "Virtual Events",
      "Hybrid Events",
      "Exhibition Production",
      "Stage Design & Production",
      "Event Logistics",
      "Technical Production",
      "Talent Booking",
      "Event Management",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=600&fit=crop&auto=format",
    alt: "Event production",
  },
  {
    num: "12",
    id: "research-analytics",
    title: "Research & Analytics",
    tagline: "The best decisions begin with better insights. We transform research, market intelligence, and performance analytics into actionable strategies that help organisations understand audiences, measure impact, and make confident business decisions.",
    products: [
      "Market Research",
      "Consumer Research",
      "Brand Health Tracking",
      "Competitor Analysis",
      "Customer Satisfaction Studies",
      "Campaign Performance Reports",
      "Social Media Analytics",
      "Digital Analytics",
      "Audience Insights",
      "Brand Perception Studies",
      "ROI Measurement",
      "Data Dashboards",
      "Marketing Attribution",
      "Business Intelligence Reporting",
    ],
    pillars: [],
    subs: [],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format",
    alt: "Research and analytics",
  },
];

// ─── Animation hook ───────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Sub-service card ─────────────────────────────────────────────────────────

function SubCard({ sub, index }: { sub: SubService; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className="border border-border bg-card group hover:border-primary/40 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, border-color 0.3s`,
      }}
    >
      {/* Card header */}
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h4 className="font-display font-black text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
          {sub.title}
        </h4>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground mt-0.5 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      {/* Expanded detail */}
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? "500px" : "0", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-6 space-y-4 border-t border-border pt-4">
          {[
            { label: "What we do", value: sub.what },
            { label: "The output", value: sub.output },
            { label: "The impact", value: sub.impact },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-3">
              <span className="font-mono text-[9px] tracking-widest uppercase text-primary border border-primary/25 px-2 py-1 h-fit shrink-0 mt-0.5">
                {label}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Service section ──────────────────────────────────────────────────────────

function ServiceSection({ service }: { service: Service }) {
  const { ref, visible } = useInView(0.08);

  return (
    <section id={service.id} className="py-20 border-b border-border scroll-mt-20">
      <div ref={ref}>
        {/* Section header */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase border border-primary/30 px-3 py-1.5">
                {service.num}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-5">
              {service.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">{service.tagline}</p>
            <div className="mt-8 max-w-4xl">
              <ul className="grid gap-2 text-sm leading-relaxed text-foreground/90">
                {service.products.map((product) => (
                  <li key={product} className="flex gap-3 items-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service image */}
          <div
            className="aspect-[4/3] overflow-hidden bg-muted relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            }}
          >
            <img
              src={service.img}
              alt={service.alt}
              className="w-full h-full object-cover brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>

        {/* Key pillars */}
        <div
          className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          {/* {service.pillars.map((p, i) => (
            <div key={i} className="flex gap-3 p-5 bg-secondary border border-border hover:border-primary/30 transition-colors duration-300">
              <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
            </div>
          ))} */}
        </div>

        {/* Sub-service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* {service.subs.map((sub, i) => (
            <SubCard key={sub.title} sub={sub} index={i} />
          ))} */}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const navigate = useNavigate();

  // Track active section on scroll
  useEffect(() => {
    const sections = SERVICES.map((s) => document.getElementById(s.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <div className="pt-24 pb-16 px-6 md:px-12 bg-card border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-5">Section 3 — Service Catalogue</p>
              <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] text-foreground mb-6">
                The 12 Core<br />
                <span className="text-primary">Service</span><br />
                Pillars
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Explore our specialised services below to turn your brand identity into a high-yielding corporate asset. Every pillar is fully staffed, fully equipped, and ready to deploy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "12", label: "Fully staffed service pillars" },
                { val: "1", label: "Partner. One invoice. Zero friction." },
                { val: "∞", label: "Scalable across all industries" },
                { val: "NDA", label: "Available on every engagement" },
              ].map((s) => (
                <div key={s.label} className="border border-border p-5 hover:border-primary/40 transition-colors duration-300">
                  <div className="font-display text-4xl font-black text-primary mb-1">{s.val}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick-jump pills */}
          <div className="mt-12 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="font-mono text-[9px] tracking-widest uppercase border border-border text-muted-foreground px-3 py-1.5 hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                {s.num} {s.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Two-column: sticky nav + scrollable content ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex gap-12 lg:gap-16 items-start">

          {/* Sticky sidebar — desktop only */}
          <aside className="hidden lg:block w-56 shrink-0 sticky top-20 pt-10 pb-20 self-start">
            <p className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase mb-4">Jump to service</p>
            <nav className="space-y-0.5">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 transition-all duration-200 group ${
                    activeId === s.id
                      ? "text-primary bg-primary/5 border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground border-l-2 border-transparent hover:border-border"
                  }`}
                >
                  <span className={`font-mono text-[9px] tracking-widest shrink-0 transition-colors ${activeId === s.id ? "text-primary" : "text-muted-foreground/60"}`}>
                    {s.num}
                  </span>
                  <span className="text-xs leading-snug">{s.title}</span>
                </button>
              ))}
            </nav>

            {/* CTA in sidebar */}
            <div className="mt-8 border border-primary/30 p-4 bg-primary/5">
              <p className="font-mono text-[9px] text-primary tracking-widest uppercase mb-2">Ready to start?</p>
              <p className="text-xs text-muted-foreground leading-snug mb-3">Book a 15-minute alignment brief — no pitch decks.</p>
              <button
                onClick={() => navigate("/")}
                className="w-full bg-primary text-primary-foreground py-2 text-xs font-bold tracking-wide hover:bg-primary/85 transition-colors flex items-center justify-center gap-1.5"
              >
                Get started <ArrowRight size={11} />
              </button>
            </div>
          </aside>

          {/* Service sections */}
          <main className="flex-1 min-w-0 pt-4">
            {SERVICES.map((service) => (
              <ServiceSection key={service.id} service={service} />
            ))}
          </main>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="bg-primary mt-0">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60 mb-4">One partner. Every capability.</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-4">
                Stop managing<br />multiple vendors.
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                All 12 service pillars under one roof. One account manager, one invoice, zero micro-management. Your marketing team gets back to strategy — we handle everything else.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Save costs — no equipment purchases or studio rentals",
                "No HR burden — our 200+ creatives are on demand",
                "Bulletproof privacy — NDA on every engagement",
                "One invoice — covering all services, any combination",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors duration-200"
                >
                  <CheckCircle2 size={16} className="text-primary-foreground shrink-0 mt-0.5" />
                  <span className="text-primary-foreground text-sm">{point}</span>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 80); }}
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-7 py-4 font-bold text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors"
                >
                  Book your alignment brief <ArrowRight size={15} />
                </button>
                <a
                  href="mailto:Echooroom@starksltd.com"
                  className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-4 text-sm tracking-wide hover:border-primary-foreground/60 transition-colors"
                >
                  Echooroom@starksltd.com <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="bg-background border-t border-border px-6 md:px-12 py-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-mono text-[10px] text-muted-foreground tracking-wide">© 2024 EchooRoom Studio Ltd. All rights reserved.</p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wide">12 Core Service Pillars · Enterprise Profile & Service Catalogue</p>
        </div>
      </div>
    </div>
  );
}
