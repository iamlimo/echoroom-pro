"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_1 = require("react-router");
var tabs_1 = require("../components/ui/tabs");
var accordion_1 = require("../components/ui/accordion");
function useInView(threshold) {
    if (threshold === void 0) { threshold = 0.12; }
    var ref = react_1.useRef(null);
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    react_1.useEffect(function () {
        var el = ref.current;
        if (!el)
            return;
        var obs = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setVisible(true);
                obs.disconnect();
            }
        }, { threshold: threshold });
        obs.observe(el);
        return function () { return obs.disconnect(); };
    }, [threshold]);
    return { ref: ref, visible: visible };
}
function RevealBlock(_a) {
    var children = _a.children, _b = _a.delayMs, delayMs = _b === void 0 ? 0 : _b, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.y, y = _d === void 0 ? 18 : _d;
    var _e = useInView(0.12), ref = _e.ref, visible = _e.visible;
    return (React.createElement("div", { ref: ref, className: className, style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(" + y + "px)",
            transition: "opacity 560ms ease " + delayMs + "ms, transform 560ms ease " + delayMs + "ms"
        } }, children));
}
function scrollToHash(hash) {
    var _a;
    (_a = document.querySelector(hash)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
}
function About() {
    var navigate = react_router_1.useNavigate();
    var location = react_router_1.useLocation();
    var contactHash = react_1.useMemo(function () { return "#contact"; }, []);
    var goToContact = function () {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(function () { return scrollToHash(contactHash); }, 80);
            return;
        }
        scrollToHash(contactHash);
    };
    var goToServices = function () {
        if (location.pathname !== "/services") {
            navigate("/services");
            return;
        }
        scrollToHash("#services");
    };
    return (React.createElement("div", { className: "min-h-screen bg-background text-foreground" },
        React.createElement("section", { className: "pt-24 pb-16 md:pb-24 px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "relative overflow-hidden" },
                React.createElement("div", { className: "absolute -top-24 -left-10 h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl" }),
                React.createElement("div", { className: "absolute -bottom-24 -right-10 h-[320px] w-[320px] rounded-full bg-secondary/20 blur-3xl" }),
                React.createElement("div", { className: "relative z-10 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" },
                    React.createElement(RevealBlock, null,
                        React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.22em] uppercase mb-6" }, "About EchooRoom"),
                        React.createElement("h1", { className: "font-display text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tight max-w-4xl" }, "Building brands that matter. Creating impact that lasts."),
                        React.createElement("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-2xl mt-6" }, "EchooRoom is an integrated creative company that helps ambitious organisations build influential brands, create meaningful experiences, and accelerate growth through strategy, storytelling, media, marketing, and technology."),
                        React.createElement("div", { className: "mt-10 flex flex-col gap-3 sm:flex-row" },
                            React.createElement("button", { onClick: goToContact, className: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors" },
                                "Start a project ",
                                React.createElement(lucide_react_1.ArrowRight, { size: 15 })),
                            React.createElement("button", { onClick: goToServices, className: "inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm tracking-wide hover:border-primary/60 hover:text-primary transition-colors" }, "Explore services"))),
                    React.createElement(RevealBlock, { delayMs: 90 },
                        React.createElement("div", { className: "rounded-[28px] border border-border bg-card/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.04)] backdrop-blur-xl" },
                            React.createElement("div", { className: "flex items-center justify-between gap-4 mb-6" },
                                React.createElement("div", null,
                                    React.createElement("p", { className: "font-mono text-[10px] text-primary tracking-[0.22em] uppercase mb-2" }, "Brand idea"),
                                    React.createElement("h2", { className: "font-display text-3xl font-black leading-tight" }, "Great brands don't compete for attention. They earn influence.")),
                                React.createElement("span", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary" },
                                    React.createElement(lucide_react_1.Sparkles, { size: 20 }))),
                            React.createElement("div", { className: "space-y-5 text-sm text-muted-foreground leading-relaxed" },
                                React.createElement("div", null,
                                    React.createElement("p", { className: "font-semibold text-foreground" }, "Brand Philosophy"),
                                    React.createElement("p", null, "Great brands don't compete for attention.")),
                                React.createElement("div", null,
                                    React.createElement("p", { className: "font-semibold text-foreground" }, "Brand Belief"),
                                    React.createElement("p", null, "Brands are built through meaningful experiences, consistent communication, and measurable impact.")),
                                React.createElement("div", null,
                                    React.createElement("p", { className: "font-semibold text-foreground" }, "Brand Promise"),
                                    React.createElement("p", null, "We transform business ambitions into brands people remember, trust, and choose.")))))))),
        React.createElement("section", { id: "philosophy", className: "py-20 px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end" },
                React.createElement(RevealBlock, null,
                    React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4" }, "The EchooRoom Philosophy"),
                    React.createElement("h2", { className: "font-display text-4xl md:text-5xl font-black leading-tight mb-6" }, "Limitless creativity. Relentless innovation. Fearless exploration."),
                    React.createElement("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl" }, "These are more than principles. They are the foundation of how we think, create, and help organisations shape the future. They influence every strategy, every story, every experience, and every partnership because we believe creativity has never been more valuable\u2014or more necessary\u2014than it is today.")),
                React.createElement(RevealBlock, { delayMs: 90 },
                    React.createElement("div", { className: "space-y-4 rounded-[28px] border border-border bg-card p-8" },
                        React.createElement("div", { className: "flex items-start gap-3" },
                            React.createElement("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary" },
                                React.createElement(lucide_react_1.Compass, { size: 18 })),
                            React.createElement("div", null,
                                React.createElement("p", { className: "font-bold text-foreground" }, "Our Responsibility"),
                                React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed mt-2" }, "We measure success by stronger brands, deeper trust, meaningful influence, business growth, and lasting impact\u2014not simply campaigns launched or content produced."))),
                        React.createElement("div", { className: "flex items-start gap-3" },
                            React.createElement("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary" },
                                React.createElement(lucide_react_1.Layers, { size: 18 })),
                            React.createElement("div", null,
                                React.createElement("p", { className: "font-bold text-foreground" }, "Integrated Thinking"),
                                React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed mt-2" }, "Strategy, creativity, production, communications, media, research, and technology are not separate disciplines. They work together as one connected system to build brands that matter."))),
                        React.createElement("div", { className: "flex items-start gap-3" },
                            React.createElement("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary" },
                                React.createElement(lucide_react_1.Globe, { size: 18 })),
                            React.createElement("div", null,
                                React.createElement("p", { className: "font-bold text-foreground" }, "Looking Forward"),
                                React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed mt-2" }, "The future belongs to brands that create value before they seek attention. We exist to help organisations earn trust, inspire action, and build lasting influence."))))))),
        React.createElement("section", { className: "py-20 bg-card border-y border-border" },
            React.createElement("div", { className: "px-6 md:px-12 max-w-[1400px] mx-auto" },
                React.createElement(RevealBlock, null,
                    React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4" }, "What we believe"),
                    React.createElement("h2", { className: "font-display text-4xl md:text-5xl font-black leading-tight mb-10" }, "Creativity is a force for progress, and every brand is shaped through experience.")),
                React.createElement("div", { className: "grid gap-6 lg:grid-cols-3" }, [
                    {
                        title: "We believe creativity is progress",
                        desc: "The ideas that change industries begin with people willing to imagine what does not yet exist. Creativity transforms complexity into clarity and opportunity into momentum.",
                        icon: lucide_react_1.Lightbulb
                    },
                    {
                        title: "We believe brands are built through experiences",
                        desc: "Brands are shaped by every interaction, every campaign, and every promise kept. Every touchpoint strengthens trust or erodes it.",
                        icon: lucide_react_1.Activity
                    },
                    {
                        title: "We believe influence is earned",
                        desc: "Great brands don’t compete for attention. They earn it through meaningful experiences, consistent communication, and measurable impact.",
                        icon: lucide_react_1.BookOpen
                    },
                ].map(function (item, idx) {
                    var Icon = item.icon;
                    return (React.createElement(RevealBlock, { key: item.title, delayMs: idx * 70 },
                        React.createElement("div", { className: "group rounded-[22px] border border-border bg-background/90 p-8 h-full transition hover:-translate-y-1 hover:border-primary/40" },
                            React.createElement("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5" },
                                React.createElement(Icon, { size: 20 })),
                            React.createElement("h3", { className: "font-display text-2xl font-black text-foreground mb-4 leading-tight" }, item.title),
                            React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed" }, item.desc))));
                })))),
        React.createElement("section", { id: "services", className: "py-20 px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end" },
                React.createElement(RevealBlock, null,
                    React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4" }, "Services"),
                    React.createElement("h2", { className: "font-display text-4xl md:text-5xl font-black leading-tight mb-4" }, "Strategy, media, creative and technology all working together to build influence."),
                    React.createElement("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl" }, "We deliver connected service experiences that help ambitious organisations create meaningful brands, engage audiences, and measure impact with clarity.")),
                React.createElement(RevealBlock, { delayMs: 90 },
                    React.createElement("div", { className: "rounded-[28px] border border-border bg-primary/5 p-8" },
                        React.createElement("p", { className: "font-semibold text-foreground uppercase tracking-[0.22em] text-sm mb-4" }, "Service pillars"),
                        React.createElement("div", { className: "space-y-3 text-sm text-muted-foreground leading-relaxed" },
                            React.createElement("p", null, "Media Production"),
                            React.createElement("p", null, "Brand Strategy & Creative Strategy"),
                            React.createElement("p", null, "Digital Marketing & Media Buying"),
                            React.createElement("p", null, "Social, PR, Influencer and Experiential"),
                            React.createElement("p", null, "Research, analytics and activation"))))),
            React.createElement("div", { className: "mt-12 rounded-[28px] border border-border bg-card p-5 md:p-8" },
                React.createElement(tabs_1.Tabs, { defaultValue: "media", className: "grid gap-4" },
                    React.createElement(tabs_1.TabsList, { className: "grid grid-cols-1 gap-2 md:grid-cols-3" },
                        React.createElement(tabs_1.TabsTrigger, { value: "media" }, "Media & Production"),
                        React.createElement(tabs_1.TabsTrigger, { value: "strategy" }, "Strategy & Brand"),
                        React.createElement(tabs_1.TabsTrigger, { value: "growth" }, "Growth & Influence")),
                    React.createElement(tabs_1.TabsContent, { value: "media" },
                        React.createElement("div", { className: "grid gap-8 lg:grid-cols-[1.2fr_0.8fr]" },
                            React.createElement("div", { className: "space-y-4" }, [
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
                                    ]
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
                                    ]
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
                                    ]
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
                                    ]
                                },
                            ].map(function (service) { return (React.createElement(accordion_1.Accordion, { type: "single", collapsible: true, key: service.title, className: "rounded-[20px] border border-border bg-background/90 p-4" },
                                React.createElement(accordion_1.AccordionItem, { value: service.title },
                                    React.createElement(accordion_1.AccordionTrigger, { className: "text-left text-base font-semibold text-foreground" }, service.title),
                                    React.createElement(accordion_1.AccordionContent, { className: "text-sm text-muted-foreground" },
                                        React.createElement("p", { className: "mb-4" }, service.summary),
                                        React.createElement("div", { className: "grid gap-2 sm:grid-cols-2" }, service.products.map(function (product) { return (React.createElement("div", { key: product, className: "rounded-2xl border border-border bg-card/80 px-4 py-3 text-[13px] text-foreground" }, product)); })))))); })),
                            React.createElement("div", { className: "rounded-[24px] border border-border bg-primary/5 p-6" },
                                React.createElement("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4" },
                                    React.createElement(lucide_react_1.Megaphone, { size: 20 })),
                                React.createElement("h3", { className: "font-display text-2xl font-black mb-3" }, "Media that earns influence"),
                                React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed" }, "Every production is built to earn attention through trust, clarity and impact. We focus on stories that scale across paid, owned and earned channels.")))),
                    React.createElement(tabs_1.TabsContent, { value: "strategy" },
                        React.createElement("div", { className: "grid gap-8 lg:grid-cols-[1.2fr_0.8fr]" },
                            React.createElement("div", { className: "space-y-4" }, [
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
                                    ]
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
                                    ]
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
                                    ]
                                },
                            ].map(function (service) { return (React.createElement(accordion_1.Accordion, { type: "single", collapsible: true, key: service.title, className: "rounded-[20px] border border-border bg-background/90 p-4" },
                                React.createElement(accordion_1.AccordionItem, { value: service.title },
                                    React.createElement(accordion_1.AccordionTrigger, { className: "text-left text-base font-semibold text-foreground" }, service.title),
                                    React.createElement(accordion_1.AccordionContent, { className: "text-sm text-muted-foreground" },
                                        React.createElement("p", { className: "mb-4" }, service.summary),
                                        React.createElement("div", { className: "grid gap-2 sm:grid-cols-2" }, service.products.map(function (product) { return (React.createElement("div", { key: product, className: "rounded-2xl border border-border bg-card/80 px-4 py-3 text-[13px] text-foreground" }, product)); })))))); })),
                            React.createElement("div", { className: "rounded-[24px] border border-border bg-secondary/5 p-6" },
                                React.createElement("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-4" },
                                    React.createElement(lucide_react_1.Lightbulb, { size: 20 })),
                                React.createElement("h3", { className: "font-display text-2xl font-black mb-3" }, "Clarity that creates growth"),
                                React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed" }, "We use insight and intention to turn every creative idea into a structured plan for brand advantage, experience excellence and long-term loyalty.")))),
                    React.createElement(tabs_1.TabsContent, { value: "growth" },
                        React.createElement("div", { className: "grid gap-8 lg:grid-cols-[1.2fr_0.8fr]" },
                            React.createElement("div", { className: "space-y-4" }, [
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
                                    ]
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
                                    ]
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
                                    ]
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
                                    ]
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
                                    ]
                                },
                            ].map(function (service) { return (React.createElement(accordion_1.Accordion, { type: "single", collapsible: true, key: service.title, className: "rounded-[20px] border border-border bg-background/90 p-4" },
                                React.createElement(accordion_1.AccordionItem, { value: service.title },
                                    React.createElement(accordion_1.AccordionTrigger, { className: "text-left text-base font-semibold text-foreground" }, service.title),
                                    React.createElement(accordion_1.AccordionContent, { className: "text-sm text-muted-foreground" },
                                        React.createElement("p", { className: "mb-4" }, service.summary),
                                        React.createElement("div", { className: "grid gap-2 sm:grid-cols-2" }, service.products.map(function (product) { return (React.createElement("div", { key: product, className: "rounded-2xl border border-border bg-card/80 px-4 py-3 text-[13px] text-foreground" }, product)); })))))); })),
                            React.createElement("div", { className: "rounded-[24px] border border-border bg-card p-6" },
                                React.createElement("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4" },
                                    React.createElement(lucide_react_1.BarChart3, { size: 20 })),
                                React.createElement("h3", { className: "font-display text-2xl font-black mb-3" }, "Performance with purpose"),
                                React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed" }, "We blend strategy, media planning, creative and analytics so every campaign earns attention, builds trust, and delivers measurable momentum."))))))),
        React.createElement("section", { className: "py-20 px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "rounded-[28px] border border-border bg-primary/5 p-8 md:p-12" },
                React.createElement("div", { className: "grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" },
                    React.createElement(RevealBlock, null,
                        React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.22em] uppercase mb-4" }, "Our commitment"),
                        React.createElement("h2", { className: "font-display text-4xl md:text-5xl font-black leading-tight mb-6" }, "We challenge conventional thinking, create with purpose, innovate with intention and explore every possibility."),
                        React.createElement("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl" }, "EchooRoom helps ambitious organisations build influential brands through strategy, creativity, media, marketing and technology. We turn ambition into brands people remember, trust and choose.")),
                    React.createElement(RevealBlock, { delayMs: 90 },
                        React.createElement("div", { className: "space-y-4" }, [
                            "Create with purpose",
                            "Innovate with intention",
                            "Explore every possibility",
                            "Build influence through experience",
                        ].map(function (item) { return (React.createElement("div", { key: item, className: "flex items-start gap-3 rounded-[20px] border border-border bg-card p-5" },
                            React.createElement("span", { className: "mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary" },
                                React.createElement(lucide_react_1.ShieldCheck, { size: 16 })),
                            React.createElement("span", { className: "text-sm text-foreground leading-relaxed" }, item))); }))))))));
}
exports["default"] = About;
