import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
  Compass,
  Layers,
  Megaphone,
  Lightbulb,
  Globe,
  BarChart3,
  Activity,
  BookOpen,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-16 md:pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="relative overflow-hidden">
          <div className="absolute -top-24 -left-10 h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-[320px] w-[320px] rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <RevealBlock>
              <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-6">
                About EchooRoom
              </p>
              <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tight max-w-4xl">
                Building brands that matter. Creating impact that lasts.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mt-6">
                EchooRoom is an integrated creative company that helps ambitious organisations build influential brands, create meaningful experiences, and accelerate growth through strategy, storytelling, media, marketing, and technology.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
                  Explore services
                </button>
              </div>
            </RevealBlock>

            <RevealBlock delayMs={90}>
              <div className="rounded-[28px] border border-border bg-card/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="font-mono text-[10px] text-primary tracking-[0.22em] uppercase mb-2">
                      Brand idea
                    </p>
                    <h2 className="font-display text-3xl font-black leading-tight">
                      Great brands don't compete for attention. They earn influence.
                    </h2>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles size={20} />
                  </span>
                </div>

                <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <p className="font-semibold text-foreground">Brand Philosophy</p>
                    <p>Great brands don't compete for attention.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Brand Belief</p>
                    <p>Brands are built through meaningful experiences, consistent communication, and measurable impact.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Brand Promise</p>
                    <p>We transform business ambitions into brands people remember, trust, and choose.</p>
                  </div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <RevealBlock>
            <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4">
              The EchooRoom Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
              Limitless creativity. Relentless innovation. Fearless exploration.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              These are more than principles. They are the foundation of how we think, create, and help organisations shape the future. They influence every strategy, every story, every experience, and every partnership because we believe creativity has never been more valuable—or more necessary—than it is today.
            </p>
          </RevealBlock>

          <RevealBlock delayMs={90}>
            <div className="space-y-4 rounded-[28px] border border-border bg-card p-8">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Compass size={18} />
                </span>
                <div>
                  <p className="font-bold text-foreground">Our Responsibility</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    We measure success by stronger brands, deeper trust, meaningful influence, business growth, and lasting impact—not simply campaigns launched or content produced.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Layers size={18} />
                </span>
                <div>
                  <p className="font-bold text-foreground">Integrated Thinking</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    Strategy, creativity, production, communications, media, research, and technology are not separate disciplines. They work together as one connected system to build brands that matter.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Globe size={18} />
                </span>
                <div>
                  <p className="font-bold text-foreground">Looking Forward</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    The future belongs to brands that create value before they seek attention. We exist to help organisations earn trust, inspire action, and build lasting influence.
                  </p>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
          <RevealBlock>
            <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4">
              What we believe
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-10">
              Creativity is a force for progress, and every brand is shaped through experience.
            </h2>
          </RevealBlock>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "We believe creativity is progress",
                desc: "The ideas that change industries begin with people willing to imagine what does not yet exist. Creativity transforms complexity into clarity and opportunity into momentum.",
                icon: Lightbulb,
              },
              {
                title: "We believe brands are built through experiences",
                desc: "Brands are shaped by every interaction, every campaign, and every promise kept. Every touchpoint strengthens trust or erodes it.",
                icon: Activity,
              },
              {
                title: "We believe influence is earned",
                desc: "Great brands don’t compete for attention. They earn it through meaningful experiences, consistent communication, and measurable impact.",
                icon: BookOpen,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <RevealBlock key={item.title} delayMs={idx * 70}>
                  <div className="group rounded-[22px] border border-border bg-background/90 p-8 h-full transition hover:-translate-y-1 hover:border-primary/40">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-2xl font-black text-foreground mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <RevealBlock>
            <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4">
              Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-4">
              Strategy, media, creative and technology all working together to build influence.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We deliver connected service experiences that help ambitious organisations create meaningful brands, engage audiences, and measure impact with clarity.
            </p>
          </RevealBlock>

          <RevealBlock delayMs={90}>
            <div className="rounded-[28px] border border-border bg-primary/5 p-8">
              <p className="font-semibold text-foreground uppercase tracking-[0.22em] text-sm mb-4">Service pillars</p>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>Media Production</p>
                <p>Brand Strategy & Creative Strategy</p>
                <p>Digital Marketing & Media Buying</p>
                <p>Social, PR, Influencer and Experiential</p>
                <p>Research, analytics and activation</p>
              </div>
            </div>
          </RevealBlock>
        </div>

        <div className="mt-12 rounded-[28px] border border-border bg-card p-5 md:p-8">
          <Tabs defaultValue="media" className="grid gap-4">
            <TabsList className="grid grid-cols-1 gap-2 md:grid-cols-3">
              <TabsTrigger value="media">Media & Production</TabsTrigger>
              <TabsTrigger value="strategy">Strategy & Brand</TabsTrigger>
              <TabsTrigger value="growth">Growth & Influence</TabsTrigger>
            </TabsList>

            <TabsContent value="media">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  {[
                    {
                      title: "Media Production",
                      summary: "We create premium media productions—from commercials and films to podcasts and live broadcasts—that help organisations build trust, inspire action, and create lasting impact.",
                      products: [
                        "TV Commercials (TVC)",
                        "Digital Commercials",
                        "Brand Films",
                        "Corporate Videos",
                        "Documentary Production",
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
                    },
                    {
                      title: "Event Production",
                      summary: "Every event is an opportunity to create influence. We produce executive forums, launches, and live experiences that strengthen brands and leave a lasting impression.",
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
                    },
                    {
                      title: "Experiential Marketing",
                      summary: "We create immersive brand experiences that bring ideas to life, deepen engagement, and turn meaningful interactions into lasting loyalty.",
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
                    },
                    {
                      title: "BTL Activations",
                      summary: "The strongest brand connections happen in the real world. We design below-the-line activation campaigns that bring brands closer to consumers through memorable engagement.",
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
                    },
                  ].map((service) => (
                    <Accordion type="single" collapsible key={service.title} className="rounded-[20px] border border-border bg-background/90 p-4">
                      <AccordionItem value={service.title}>
                        <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                          {service.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          <p className="mb-4">{service.summary}</p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {service.products.map((product) => (
                              <div key={product} className="rounded-2xl border border-border bg-card/80 px-4 py-3 text-[13px] text-foreground">
                                {product}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>

                <div className="rounded-[24px] border border-border bg-primary/5 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                    <Megaphone size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-black mb-3">Media that earns influence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every production is built to earn attention through trust, clarity and impact. We focus on stories that scale across paid, owned and earned channels.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="strategy">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  {[
                    {
                      title: "Brand Strategy",
                      summary: "Great brands are built on clarity, not coincidence. We help organisations define who they are, what they stand for, and how they create value.",
                      products: [
                        "Brand Positioning",
                        "Brand Identity Development",
                        "Brand Architecture",
                        "Brand Messaging Framework",
                        "Employer Branding",
                        "Brand Guidelines",
                        "Brand Naming",
                        "Brand Refresh/Rebranding",
                        "Customer Experience Strategy",
                        "Go-to-Market Strategy",
                        "Brand Audits",
                        "Market Positioning Analysis",
                      ],
                    },
                    {
                      title: "Creative Strategy",
                      summary: "Creativity is most powerful when it solves business problems. We develop insight-driven creative strategies that transform ideas into campaigns, experiences, and stories.",
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
                        "Creative Ideation Sessions",
                        "Integrated Campaign Strategy",
                      ],
                    },
                    {
                      title: "Research & Analytics",
                      summary: "The best decisions begin with better insights. We transform research, market intelligence, and analytics into strategies that help organisations understand audiences and measure impact.",
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
                    },
                  ].map((service) => (
                    <Accordion type="single" collapsible key={service.title} className="rounded-[20px] border border-border bg-background/90 p-4">
                      <AccordionItem value={service.title}>
                        <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                          {service.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          <p className="mb-4">{service.summary}</p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {service.products.map((product) => (
                              <div key={product} className="rounded-2xl border border-border bg-card/80 px-4 py-3 text-[13px] text-foreground">
                                {product}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>

                <div className="rounded-[24px] border border-border bg-secondary/5 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-4">
                    <Lightbulb size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-black mb-3">Clarity that creates growth</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use insight and intention to turn every creative idea into a structured plan for brand advantage, experience excellence and long-term loyalty.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="growth">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  {[
                    {
                      title: "Digital Marketing",
                      summary: "Growth doesn't happen by chance. We design integrated campaigns that combine data, creativity and technology to increase visibility and demand.",
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
                    },
                    {
                      title: "Media Buying",
                      summary: "The right message deserves the right audience. We plan, negotiate, and optimise media investments across digital, broadcast, print, and outdoor channels.",
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
                    },
                    {
                      title: "Social Media Management",
                      summary: "Conversations shape brands every day. We help organisations build meaningful relationships through strategic content, community management, and platform growth.",
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
                    },
                    {
                      title: "PR & Communications",
                      summary: "Reputation is earned through every conversation. We help organisations communicate with confidence, build credibility, and strengthen public perception.",
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
                    },
                    {
                      title: "Influencer Marketing",
                      summary: "Influence is built on trust, not just reach. We connect brands with creators and cultural voices for authentic campaigns that spark conversation.",
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
                    },
                  ].map((service) => (
                    <Accordion type="single" collapsible key={service.title} className="rounded-[20px] border border-border bg-background/90 p-4">
                      <AccordionItem value={service.title}>
                        <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                          {service.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          <p className="mb-4">{service.summary}</p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {service.products.map((product) => (
                              <div key={product} className="rounded-2xl border border-border bg-card/80 px-4 py-3 text-[13px] text-foreground">
                                {product}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>

                <div className="rounded-[24px] border border-border bg-card p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                    <BarChart3 size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-black mb-3">Performance with purpose</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We blend strategy, media planning, creative and analytics so every campaign earns attention, builds trust, and delivers measurable momentum.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="rounded-[28px] border border-border bg-primary/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <RevealBlock>
              <p className="font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4">
                Our commitment
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
                We challenge conventional thinking, create with purpose, innovate with intention and explore every possibility.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                EchooRoom helps ambitious organisations build influential brands through strategy, creativity, media, marketing and technology. We turn ambition into brands people remember, trust and choose.
              </p>
            </RevealBlock>

            <RevealBlock delayMs={90}>
              <div className="space-y-4">
                {[
                  "Create with purpose",
                  "Innovate with intention",
                  "Explore every possibility",
                  "Build influence through experience",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[20px] border border-border bg-card p-5">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <ShieldCheck size={16} />
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>
      
    </div>
 
  );
}
