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
  pillars: string[];
  subs: SubService[];
  img: string;
  alt: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    num: "01",
    id: "video-production",
    title: "Video Production & Commercials",
    tagline: "Cinema-grade visual storytelling engineered to command attention on television, digital advertising channels, and global corporate networks.",
    pillars: [
      "Cinema-Grade Infrastructure — fully owned fleet of cinema cameras, professional studio lighting, and advanced post-production suites.",
      "Specialist Crews — cohesive crew of professional scriptwriters, directors, and certified colorists; no erratic freelancers.",
      "Unified Visual Identity — seamless transition from massive broadcast TV ads to agile social clips while maintaining strict brand consistency.",
    ],
    subs: [
      { title: "Digital Video Commercials (DVCs) & TV Ads", what: "End-to-end scripting, filming, and premium editing.", output: "High-end promotional videos, cinematic product explainers, and broadcast-ready TV ads.", impact: "Elevates brand authority and scales digital ad performance." },
      { title: "Corporate Documentaries", what: "Deep narrative research, multicam talking-head interviews, and archive assembly.", output: "Multi-chapter legacy videos for corporate milestones and NGO assets.", impact: "Celebrates company anniversaries, builds investor trust, and proves NGO impact." },
      { title: "Outsourced Video Execution", what: "Rapid-response on-site filming, creative content direction, and trend-focused editing.", output: "Street-style interviews, workplace comedy skits, and office mini-documentaries.", impact: "Supplies brand channels with authentic, high-engagement organic social media content." },
      { title: "High-End CEO & Executive Profile Videos", what: "Cinematic executive lifestyle filming, personal branding strategy, and thought-leadership scripting.", output: "Premium executive profiles, founder origin stories, and keynote highlights.", impact: "Humanizes your leadership team and establishes your C-suite as industry authorities." },
    ],
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&h=600&fit=crop&auto=format",
    alt: "Professional cinema video production",
  },
  {
    num: "02",
    id: "motion-graphics",
    title: "Motion Graphics & Digital Design",
    tagline: "Transforming complex data, user journeys, and brand assets into beautiful, conversion-focused visuals across every channel and platform.",
    pillars: [
      "Technical Precision — specialist animators who translate intricate workflows and business services into simple visual assets.",
      "Conversion-Optimised Engineering — aesthetic design blended with data-driven user psychology to reduce drop-off rates.",
      "Omnichannel Alignment — absolute design alignment across your website, presentation decks, and app store preview media.",
    ],
    subs: [
      { title: "Motion Graphics & Animation", what: "Custom scriptwriting, visual storyboarding, asset illustration, and 2D/3D animation.", output: "Premium explainer animations, product feature walkthroughs, and UI micro-animations.", impact: "Simplifies complex business tools and app features so customers understand them instantly." },
      { title: "Graphic Design & UI/UX Design", what: "Strategic digital asset creation, print layout, and digital interface audits.", output: "Digital marketing banners, corporate presentation decks, sales brochures, and optimised user interfaces.", impact: "Streamlines the customer conversion journey and presents a cohesive corporate aesthetic." },
      { title: "Slick Corporate Photography", what: "Professional studio and on-location lighting setups, creative look direction, and high-end retouching.", output: "Corporate team headshots, workplace product photography, and executive lifestyle portraits.", impact: "Upgrades your team page, pitch decks, and media kits with trustworthy, premium imagery." },
    ],
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=600&fit=crop&auto=format",
    alt: "Motion graphics and digital design",
  },
  {
    num: "03",
    id: "audio-podcast",
    title: "Audio Engineering & Podcast Production",
    tagline: "Studio-grade acoustic solutions designed to give enterprise brands a clear, commanding, and distinctive voice on every platform.",
    pillars: [
      "Acoustic Excellence — fully soundproofed environments and premium mastering systems that eliminate room echo and muddy frequencies.",
      "Turnkey Broadcast Management — complete lifecycle management from voiceover casting to multi-platform publishing.",
      "Bespoke Sonic Assets — entirely custom corporate jingles and voice elements; no generic, overused stock audio.",
    ],
    subs: [
      { title: "Audio Engineering & Commercial Sound", what: "Multi-mic recording, precision voiceover tracking, sound design, and audio mastering.", output: "Custom corporate theme jingles, pristine voiceover files, and commercial audio elements.", impact: "Forges a distinct sonic identity that stands out in digital and broadcast media." },
      { title: "Audio & Podcast Production", what: "Turnkey show conceptualisation, recording management, episodic editing, and distribution setup.", output: "Corporate radio jingles, internal employee engagement audio, and external branded podcasts.", impact: "Engages audiences deeply on major streaming networks and streamlines corporate internal communications." },
    ],
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&h=600&fit=crop&auto=format",
    alt: "Professional audio engineering studio",
  },
  {
    num: "04",
    id: "influencer-pr",
    title: "Influencer & Public Relations Management",
    tagline: "Strategic communication architecture and media orchestration designed to build institutional credibility and insulate market reputation.",
    pillars: [
      "Architected Media Relations — immediate, guaranteed editorial features through deep, direct lines to elite business journalists and national media editors.",
      "Rapid Reputational Protection — real-time digital monitoring and structured executive response templates to isolate negative narratives within hours.",
      "Accountable Influencer Spend — volatile vanity metrics transformed into trackable conversion channels with fully managed talent logistics and automated payouts.",
    ],
    subs: [
      { title: "Influencer Marketing Campaigns", what: "End-to-end alignment with micro and macro-influencers, creative brief engineering, campaign tracking, and automated payout management.", output: "Data-driven influencer activations, native product reviews, and highly targeted brand integration campaigns.", impact: "Drives massive organic brand adoption and accelerates consumer trust within targeted demographics." },
      { title: "Media Relations & PR Distribution", what: "Strategic press release copywriting, journalist outreach, and editorial placement management.", output: "Premium earned-media features across top-tier national and tech-focused business news platforms.", impact: "Establishes industry authority, elevates executive visibility, and boosts search engine credibility." },
      { title: "Affiliate & Partnership Marketing", what: "Blueprinting, negotiating, and structuring commercial revenue-share frameworks with strategic ecosystem partners.", output: "Co-branded digital marketing funnels, commercial alliance frameworks, and performance-based B2B sales pipelines.", impact: "Opens net-new, low-risk customer acquisition channels through existing, trusted industry networks." },
      { title: "Crisis Management", what: "Rapid-response tactical communication blueprinting, media monitoring, and corporate spokesperson strategy.", output: "Internal and external statement scripts, risk mitigation action plans, and media response protocols.", impact: "Insulates corporate reputations and maintains stakeholder confidence during operational disruptions." },
    ],
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&h=600&fit=crop&auto=format",
    alt: "Influencer and PR management",
  },
  {
    num: "05",
    id: "white-label",
    title: "White-Label Enterprise Solutions",
    tagline: "Backend creative execution engineered to scale your entire content production output without increasing internal headcount or overhead.",
    pillars: [
      "Zero Hiring Overhead — scale digital content output instantly without adding full-time creative salaries, benefit packages, or internal HR liabilities.",
      "Invisible Execution — we execute entirely under your brand name behind closed studio doors, maintaining flawless corporate-compliant brand delivery.",
      "Predictable Monthly Costs — switch variable creative expenses into a clean, predictable monthly retainer that fits your long-term marketing strategy.",
    ],
    subs: [
      { title: "White-Label Production for Brands & Agencies", what: "Anonymous script-to-screen execution, asset creation, and studio tracking under strict NDA compliance.", output: "Turnkey video podcast series, marketing materials, and digital campaigns under the client's brand name.", impact: "Allows institutions to launch massive media pipelines with zero internal hiring friction." },
      { title: "White-Label Content Packages", what: "Complete day-to-day channel management utilising our existing studio, cinema cameras, microphones, and editors.", output: "End-to-end management, design, scripting, shooting, and editing of high-volume short-form video pipelines.", impact: "Maintains a dominant, daily presence on TikTok, YouTube, and Instagram for a predictable monthly retainer." },
    ],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=600&fit=crop&auto=format",
    alt: "White-label enterprise solutions",
  },
  {
    num: "06",
    id: "event-ip",
    title: "High-Value Event IP Monetization",
    tagline: "Designing, executing, and fully monetising proprietary event properties that command premium market attention and deliver massive brand equity.",
    pillars: [
      "Proprietary Commercial Engines — we own and operate our own massive, high-impact event IPs that generate headline sponsorship revenues from multinational corporations.",
      "Full-Stack Event Architecture — from concept to broadcast, every element is designed, owned, and monetised by our internal team.",
      "Multi-Revenue Stream Design — ticket sales, title sponsorships, media rights, and brand partnerships all engineered into a single event property.",
    ],
    subs: [
      { title: "Event Creation & Proprietary IP", what: "End-to-end orchestration, visual branding, and executive management of our own massive, annual regional event properties.", output: "Landmark cultural award shows, high-profile industry summits, and premium multi-industry corporate gatherings owned entirely by us.", impact: "Establishes dominant cultural relevance while unlocking heavy headline sponsorship revenues from multinational corporations." },
      { title: "Custom Experiential Spaces", what: "Strategic experiential design, spatial engineering, and interactive brand integration within our proprietary event ecosystem.", output: "Immersive brand booths, high-end tech mixer lounges, and custom cultural pop-up spaces tailored for external clients.", impact: "Creates unforgettable, hands-on consumer touchpoints that drastically boost sponsor brand recall and user engagement." },
      { title: "Title Sponsorships", what: "Strategic monetisation packaging, tier structuring, and corporate brand integration negotiation for our tentpole properties.", output: "Multi-million Naira corporate asset tie-ins, placing partner brands at the absolute centre of our events.", impact: "Secures massive commercial leverage for our network while granting corporate sponsors dominant, exclusive market visibility." },
      { title: "Ticket & Table Sales", what: "Premium gate infrastructure management, VIP tier structuring, and high-net-worth individual audience cultivation.", output: "Exclusive corporate table bookings, high-dollar live event seating options, and luxury VIP hospitality experiences.", impact: "Generates high-margin, direct consumer revenue from C-suite executives and elite industry stakeholders." },
    ],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop&auto=format",
    alt: "High-value event IP",
  },
  {
    num: "07",
    id: "entertainment-marketing",
    title: "Entertainment Marketing & Brand Partnerships",
    tagline: "Connecting corporate brands with premium entertainment assets to drive cultural relevance, deep consumer engagement, and commercial alignment.",
    pillars: [
      "Elite Executive Entry — fast-track sponsorship acquisition through existing direct relationships with tier-one brand marketing directors and corporate headers.",
      "Organic Media Integration — seamless, script-level placement that protects asset immersion and delivers authentic brand recall.",
      "High-Yield Contractual Architecture — multi-tier sponsorship engineering backed by comprehensive media-value analytics reporting.",
    ],
    subs: [
      { title: "Headline Sponsorship Acquisition", what: "Strategic packaging, high-level corporate pitching, and contract negotiation to secure primary title sponsors for live entertainment assets.", output: "Lucrative commercial partnerships that place banking giants, telcos, and multinational brands at the centre of major entertainment assets.", impact: "Unlocks massive funding for entertainment IPs while granting corporate sponsors exclusive, high-visibility market dominance." },
      { title: "Experiential Product Placement", what: "Seamless visual and physical integration of corporate consumer goods into creative media and live entertainment spaces.", output: "Organic placement of products within high-budget music videos, main-stage live show set designs, and highly visible podcast desks.", impact: "Subtly normalises product usage within high-engagement content, bypassing traditional ad fatigue to drive consumer adoption." },
    ],
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&h=600&fit=crop&auto=format",
    alt: "Entertainment marketing and brand partnerships",
  },
  {
    num: "08",
    id: "btl-marketing",
    title: "Experiential & Below-The-Line (BTL) Marketing",
    tagline: "Designing, engineering, and deploying high-impact physical touchpoints that bridge the gap between corporate brands and real-world consumer communities.",
    pillars: [
      "Owned Staging Gear — drastically reduce infrastructure costs by leveraging our internal fleet of commercial sound systems, advanced stage lighting, and event sets.",
      "Built-In Live Audiences — guarantee massive, energetic live turnouts by pulling directly from our highly engaged podcast and media communities.",
      "Accountable Field Operations — manage field risk via vetted brand ambassadors utilising real-time digital monitoring to capture verifiable customer data points.",
    ],
    subs: [
      { title: "Experiential Brand Activations", what: "Strategic setup and operational execution of high-energy consumer touchpoints across major public hubs.", output: "Interactive physical activations at high-traffic universities, shopping malls, beaches, and open-air markets.", impact: "Converts passive passersby into active brand advocates through memorable, real-world consumer trials." },
      { title: "Corporate Event-As-A-Service (EaaS)", what: "End-to-end event conceptualisation, architectural design, logistical production, and full-funnel event marketing.", output: "Institutional product launches, corporate town halls, media press conferences, and exclusive executive networking mixers.", impact: "Delivers flawless, high-stakes corporate events with zero internal operational strain on your team." },
      { title: "Field Marketing & Roadshows", what: "Recruitment, training, deployment, and digital performance tracking of professional brand ambassador fleets.", output: "Aggressive street-level sampling campaigns, regional roadshows, and real-time consumer data collection.", impact: "Penetrates local markets rapidly while capturing precise, boots-on-the-ground consumer insights." },
      { title: "Merchandising & Collateral Production", what: "Industrial design, high-quality manufacturing, and logistics management for all physical marketing assets.", output: "Premium corporate gift items, custom point-of-sale (POS) displays, high-impact rollup banners, and branded corporate apparel.", impact: "Solidifies your brand's physical footprint and maintains continuous visual visibility at the retail level." },
    ],
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&h=600&fit=crop&auto=format",
    alt: "Experiential and BTL marketing",
  },
  {
    num: "09",
    id: "content-distribution",
    title: "Content Distribution & Amplification",
    tagline: "Bypassing low-reach organic algorithms to guarantee high-volume visibility, engagement, and direct conversion across established media networks.",
    pillars: [
      "Guaranteed Mass Reach — prevent production wastage by pushing creative campaigns straight through our active multi-channel network, skipping algorithm blocks completely.",
      "Conversational Conversion — turn dry, deeply complex tech tools into fun, highly engaging discussions hosted by our trusted media personalities.",
      "Unified Campaign Framework — secure complete market share of voice across audio networks, video hubs, and email subscriber pipelines simultaneously.",
    ],
    subs: [
      { title: "Sponsored Content Amplification", what: "Strategic placement and cross-pollination of pre-made brand videos and corporate announcements across our network assets.", output: "Guaranteed distribution across high-traffic social media channels, premium email newsletters, and active video streaming feeds.", impact: "Eliminates the 'empty video' problem, ensuring high-budget creative assets get immediate, massive viewership." },
      { title: "Native Advertising Segments", what: "Scripted integration, interactive feature breakdowns, and organic conversational reviews embedded into our chart-topping media properties.", output: "Live-read host endorsements, mid-roll app feature walkthroughs, and co-branded narrative discussions within our highly rated podcast feeds.", impact: "Bypasses ad fatigue by transforming product launches into entertaining, digestible content that consumers actually want to watch." },
      { title: "Co-branded Digital Campaigns", what: "Joint audience mapping, cross-platform multimedia storytelling, and performance-tracked lead generation funnels.", output: "Comprehensive digital campaigns where our trusted media persona anchors and your product team launch collaborative digital assets.", impact: "Instantly inherits our deep community trust, accelerating your customer acquisition cycle through direct, trackable audience conversion." },
    ],
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&h=600&fit=crop&auto=format",
    alt: "Content distribution and amplification",
  },
  {
    num: "10",
    id: "influencer-network",
    title: "Influencer Marketing & Network",
    tagline: "Building, managing, and scaling high-yield creator networks to drive authentic consumer engagement while eliminating the operational friction of influencer logistics.",
    pillars: [
      "Single-Point Accountability — clear massive HR bottlenecks by passing brief creation, talent policing, compliance tracking, and creator pay streams to our single agency desk.",
      "Guaranteed Brand Alignment — protect brand guidelines through highly rigid pre-approval content systems and strict timeline management frameworks.",
      "Data-Backed Scale — push beyond volatile organic algorithms by pairing creator assets with high-performance paid ad managers on Meta, Google, and TikTok.",
    ],
    subs: [
      { title: "Creator Campaign Curation", what: "Developing, vetting, and maintaining an exclusive internal roster of content creators, micro-influencers, and cross-industry celebrities.", output: "Pre-vetted, highly matched talent portfolios aligned with your exact brand values, target demographics, and campaign aesthetic.", impact: "Ensures your brand avoids problematic partnerships while instantly securing high-conversion, highly credible faces to lead your narrative." },
      { title: "End-to-End Campaign Management", what: "Total operational orchestration including brief engineering, timeline compliance auditing, automated creator payouts, and centralised analytics.", output: "Seamless execution of large-scale influencer activations where you deal with a single partner instead of manually tracking individual creators.", impact: "Removes the operational burden of influencer management so your team focuses on strategy, not logistics." },
      { title: "Performance Marketing & Event Turnout", what: "Launching and optimising data-driven paid advertising campaigns across major digital networks (Meta, Google, TikTok).", output: "Conversion-focused hyper-targeted ad funnels designed specifically to guarantee live ticket sales, app installations, and venue attendance.", impact: "De-risks financial allocations into physical events by leveraging precise tracking data to fill seats and guarantee high turnout numbers." },
    ],
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&h=600&fit=crop&auto=format",
    alt: "Influencer marketing network",
  },
  {
    num: "11",
    id: "brand-identity",
    title: "Strategic & Brand Identity Solutions",
    tagline: "Unifying every visual asset, market intelligence, and communication system under one coherent corporate identity engineered for long-term dominance.",
    pillars: [
      "Empirical Regional Context — market rollout plans grounded in active day-to-day data tracking from our extensive regional consumer attention networks.",
      "Holistic Narrative Safety — prevent branding fragmentation by managing core visuals, market data tracking, and PR crisis plans under one roof.",
      "Capital Risk Mitigation — validate product pricing, feature demands, and campaign directions using real focus groups before launching to market.",
    ],
    subs: [
      { title: "Corporate Rebranding & Identity Systems", what: "Developing custom logos, definitive brand architecture guidelines, strategic colour palettes, and corporate typography systems.", output: "Fully realised, high-end corporate identity manuals that unify every visual asset across print, digital, and physical operations.", impact: "Modernises market presence, increases brand equity, and ensures absolute aesthetic consistency across all global divisions." },
      { title: "Go-To-Market (GTM) Strategy Engineering", what: "Designing comprehensive local marketing blueprints, operational roll-out timelines, and data-driven launch frameworks.", output: "Tailored commercial entry playbooks for international brands entering Nigeria, or local enterprises launching new products.", impact: "De-risks expensive market entry strategies, identifies low-hanging commercial revenue streams, and accelerates speed-to-market." },
      { title: "Market Research & Consumer Insights", what: "Coordinating localised focus groups, deploying deep audience surveys, and analysing real-time regional consumer trends.", output: "Actionable data intelligence reports detailing exact customer behaviours, buying friction points, and product opportunities.", impact: "Backs corporate product development pipelines with empirical data, preventing capital wastage and validating commercial decisions." },
    ],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop&auto=format",
    alt: "Strategic brand identity solutions",
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
          {service.pillars.map((p, i) => (
            <div key={i} className="flex gap-3 p-5 bg-secondary border border-border hover:border-primary/30 transition-colors duration-300">
              <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Sub-service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.subs.map((sub, i) => (
            <SubCard key={sub.title} sub={sub} index={i} />
          ))}
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
                The 11 Core<br />
                <span className="text-primary">Service</span><br />
                Pillars
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Explore our specialised services below to turn your brand identity into a high-yielding corporate asset. Every pillar is fully staffed, fully equipped, and ready to deploy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "11", label: "Fully staffed service pillars" },
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
                All 11 service pillars under one roof. One account manager, one invoice, zero micro-management. Your marketing team gets back to strategy — we handle everything else.
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
          <p className="font-mono text-[10px] text-muted-foreground tracking-wide">11 Core Service Pillars · Enterprise Profile & Service Catalogue</p>
        </div>
      </div>
    </div>
  );
}
