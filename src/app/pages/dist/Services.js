"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_1 = require("react-router");
// ─── Data ─────────────────────────────────────────────────────────────────────
var SERVICES = [
    {
        num: "01",
        id: "media-production",
        title: "Media Production",
        tagline: "Every brand has a story. We create premium media production for commercials, brand films, documentaries, social content, podcasts and live broadcast campaigns.",
        pillars: [
            "End-to-end visual and audio production from concept, shooting, studio work, editing and delivery.",
            "Broadcast-ready execution for TVCs, digital commercials, documentaries, live streaming and social video.",
            "Integrated media output including motion graphics, photography, drone, event coverage and post-production.",
        ],
        subs: [
            { title: "Video & Commercial Production", what: "From TV commercials and brand films to corporate videos and documentaries.", output: "Broadcast and digital-ready storytelling assets that build trust and inspire action.", impact: "Turns brand narratives into memorable visual campaigns with measurable influence." },
            { title: "Social & Digital Content", what: "Short-form production, explainer videos, product demos, motion graphics and animation.", output: "High-engagement digital video for social feeds, YouTube shows and paid media.", impact: "Boosts visibility, engagement and campaign performance across every touchpoint." },
            { title: "Live, Studio & Audio Production", what: "Podcast sessions, live performance broadcasts, audio production and livestream events.", output: "Polished audio-visual content for owned channels, events and hybrid productions.", impact: "Creates immersive brand experiences that strengthen audience loyalty and trust." },
        ],
        img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&h=600&fit=crop&auto=format",
        alt: "Premium media production"
    },
    {
        num: "02",
        id: "digital-marketing",
        title: "Digital Marketing",
        tagline: "Growth doesn't happen by chance. We design integrated digital marketing campaigns that combine data, creativity and technology to increase visibility, generate demand and accelerate performance.",
        pillars: [
            "Performance-led campaign planning across search, social, email and conversion channels.",
            "Marketing automation, lead generation and optimisation to improve campaign ROI.",
            "Integrated digital growth strategies that support e-commerce, apps and audience acquisition.",
        ],
        subs: [
            { title: "Performance Marketing", what: "SEM, paid social, programmatic and direct response campaigns.", output: "Targeted demand generation across digital channels with measurable cost control.", impact: "Improves lead quality, lowers acquisition cost and drives scalable growth." },
            { title: "Content & Activation", what: "Content marketing campaigns, email, mobile marketing and conversion optimisation.", output: "Integrated digital experiences that keep audiences moving through the funnel.", impact: "Increases engagement and turns traffic into qualified enquiries." },
            { title: "Growth Systems", what: "Marketing automation, CRM activation and lifecycle campaign engineering.", output: "Reliable, repeatable digital sales funnels and customer acquisition pathways.", impact: "Makes digital growth predictable and easier to scale over time." },
        ],
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&auto=format",
        alt: "Digital marketing campaign work"
    },
    {
        num: "03",
        id: "brand-strategy",
        title: "Brand Strategy",
        tagline: "Great brands are built on clarity, not coincidence. We help organisations define who they are, what they stand for, and how they create value.",
        pillars: [
            "Brand positioning, messaging and architecture designed for long-term growth.",
            "Identity systems that align every customer touchpoint with your purpose.",
            "Market and experience strategy to ensure your brand is consistent, memorable and trusted.",
        ],
        subs: [
            { title: "Positioning & Identity", what: "Brand positioning, identity development and architecture.", output: "Clear brand frameworks, naming, guidelines and visual direction.", impact: "Builds a differentiated brand foundation that earns trust and loyalty." },
            { title: "Messaging & Experience", what: "Brand messaging, employer branding and customer experience strategy.", output: "Distinctive communication systems and experience maps that align teams and audiences.", impact: "Ensures every interaction reinforces your brand promise." },
            { title: "Launch & Audit", what: "Go-to-market strategy, brand audits and market positioning analysis.", output: "Actionable launch plans and insight-driven improvement recommendations.", impact: "Reduces risk and speeds up the path from strategy to market impact." },
        ],
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop&auto=format",
        alt: "Brand strategy planning"
    },
    {
        num: "04",
        id: "creative-strategy",
        title: "Creative Strategy",
        tagline: "Creativity is most powerful when it solves business problems. We turn insight into campaigns, experiences and stories that connect with audiences and deliver measurable results.",
        pillars: [
            "Campaign concept development aligned with commercial goals.",
            "Integrated storytelling and communication strategy across channels.",
            "Creative systems that scale from big launches to ongoing content programs.",
        ],
        subs: [
            { title: "Campaign Development", what: "Creative campaign planning, messaging and concept ideation.", output: "Original campaign ideas, editorial systems and storytelling frameworks.", impact: "Creates work that is memorable, persuasive and easy to execute." },
            { title: "Creative Direction", what: "Visual direction, production briefs and creative workshop facilitation.", output: "Tightly aligned creative treatments, scripts and launch concepts.", impact: "Reduces wasted creative work and keeps every asset on brand." },
            { title: "Content Strategy", what: "Content planning, channel sequencing and activation roadmaps.", output: "Integrated creative systems for social, digital, PR and experiential executions.", impact: "Ensures creativity delivers sustained business impact, not one-off moments." },
        ],
        img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=900&h=600&fit=crop&auto=format",
        alt: "Creative strategy planning"
    },
    {
        num: "05",
        id: "media-buying",
        title: "Media Buying",
        tagline: "The right message deserves the right audience. We plan, negotiate and optimise media investments across digital, broadcast, print and outdoor channels.",
        pillars: [
            "Channel planning and buying across digital, TV, radio, print and outdoor.",
            "Negotiation and optimisation to maximise reach and lower media waste.",
            "Performance audits and reporting to keep spend accountable and efficient.",
        ],
        subs: [
            { title: "Digital & Programmatic Buying", what: "Media buying for paid social, display, search and programmatic channels.", output: "Targeted digital campaigns with performance tracking and efficiency optimisation.", impact: "Delivers measurable reach and return for every media investment." },
            { title: "Broadcast & OOH Buying", what: "TV, radio, print, cinema and outdoor planning and negotiation.", output: "High-impact traditional media presence that supports modern brand campaigns.", impact: "Extends brand visibility beyond digital and into mass-market channels." },
            { title: "Media Strategy & Audits", what: "Media audit, planning and buying recommendations based on audience and budget.", output: "Optimised media plans with clear channel allocation and performance goals.", impact: "Helps clients move spend from assumptions to outcomes." },
        ],
        img: "https://images.unsplash.com/photo-1498600553572-b17b5a0e0a85?w=900&h=600&fit=crop&auto=format",
        alt: "Media buying and planning"
    },
    {
        num: "06",
        id: "social-media-management",
        title: "Social Media Management",
        tagline: "Conversations shape brands every day. We help organisations build relationships through strategic content, community management, platform growth and engagement campaigns.",
        pillars: [
            "Strategy-driven content calendars that keep channels active and purposeful.",
            "Community management, listening and reputation support across platforms.",
            "Platform-specific growth and reporting for YouTube, TikTok, Instagram, LinkedIn and X.",
        ],
        subs: [
            { title: "Strategy & Content", what: "Social media strategy, calendar creation and content development.", output: "Branded social campaigns, creative posts and audience-first content.", impact: "Keeps your social channels aligned, consistent and audience-relevant." },
            { title: "Community & Reputation", what: "Community management, social listening and reputation response.", output: "Stronger conversations, better sentiment and faster issue resolution.", impact: "Helps your brand show up with credibility and confidence online." },
            { title: "Channel Growth & Reporting", what: "YouTube, TikTok, Instagram, LinkedIn and X channel management.", output: "Platform-specific growth plans and performance reporting.", impact: "Improves reach, engagement and campaign learnings across every social channel." },
        ],
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop&auto=format",
        alt: "Social media management"
    },
    {
        num: "07",
        id: "pr-communications",
        title: "PR & Communications",
        tagline: "Reputation is earned through every conversation. We help organisations communicate with confidence, build credibility and manage public perception.",
        pillars: [
            "Strategic public relations and media relations that position leaders and brands.",
            "Purposeful corporate communications and executive profiling.",
            "Crisis response planning and reputation management for every scenario.",
        ],
        subs: [
            { title: "PR Strategy & Media Relations", what: "Press release development, journalist outreach and editorial placement.", output: "Earned media coverage, thought leadership features and brand storytelling.", impact: "Builds credibility, visibility and trust in your market." },
            { title: "Corporate & Internal Communications", what: "Corporate messaging, executive profiles, internal communications and speech writing.", output: "Consistent messaging across external and internal audiences.", impact: "Keeps stakeholders aligned and strengthens leadership credibility." },
            { title: "Crisis Communication", what: "Crisis planning, rapid response scripts and media monitoring.", output: "Reputation defence plans, stakeholder messaging and reassurance assets.", impact: "Protects trust and helps organisations recover faster from disruption." },
        ],
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=600&fit=crop&auto=format",
        alt: "PR communications"
    },
    {
        num: "08",
        id: "experiential-marketing",
        title: "Experiential Marketing",
        tagline: "People remember how brands make them feel. We create immersive experiences that deepen engagement and turn interactions into lasting loyalty.",
        pillars: [
            "Purposeful experience design for product launches, pop-ups and roadshows.",
            "Interactive brand activations that turn audiences into participants.",
            "Retail, campus and trade experiences designed to create measurable momentum.",
        ],
        subs: [
            { title: "Brand Experience Design", what: "Immersive events, installations and pop-up experiences.", output: "Live brand environments that educate, entertain and convert.", impact: "Builds stronger emotional connection and recall." },
            { title: "Launch & Trade Experiences", what: "Product launch experiences, trade fair design and consumer engagement campaigns.", output: "Memorable activation platforms for new products and B2B showcases.", impact: "Generates audience interest and business leads in the moment." },
            { title: "Sampling & Retail Campaigns", what: "Sampling campaigns, retail activations, campus tours and street experiences.", output: "Hands-on trials and engagement that move people closer to purchase.", impact: "Creates real-world brand momentum and direct consumer response." },
        ],
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop&auto=format",
        alt: "Experiential marketing"
    },
    {
        num: "09",
        id: "influencer-marketing",
        title: "Influencer Marketing",
        tagline: "Influence is built on trust, not just reach. We connect brands with creators and cultural voices to deliver authentic campaigns that spark action.",
        pillars: [
            "Creator strategy, talent sourcing and campaign planning for authentic influence.",
            "Campaign management with compliance, negotiation and reporting baked in.",
            "Performance-driven partnerships that move audiences with credibility.",
        ],
        subs: [
            { title: "Influencer Strategy", what: "Influencer discovery, talent sourcing and ambassador programme design.", output: "Campaign-ready creator groups aligned with your brand values.", impact: "Drives trust, relevance and community-driven awareness." },
            { title: "Campaign Management", what: "Creator brief engineering, content approval, delivery and compensation management.", output: "Fully managed influencer activations that run smoothly and transparently.", impact: "Eliminates friction while protecting your brand reputation." },
            { title: "UGC & Performance Reporting", what: "User-generated content campaigns, affiliate programs and results tracking.", output: "Authentic creator-led content with campaign-level performance insight.", impact: "Makes influencer investment accountable and optimises next steps." },
        ],
        img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=900&h=600&fit=crop&auto=format",
        alt: "Influencer marketing"
    },
    {
        num: "10",
        id: "btl-activations",
        title: "BTL Activations",
        tagline: "The strongest brand connections happen in the real world. We design below-the-line campaigns that bring brands closer to consumers through memorable experiences and measurable impact.",
        pillars: [
            "Product sampling, retail activations and street campaigns designed for conversion.",
            "Campus, market and dealer activation programs that capture attention locally.",
            "High-touch experiential execution with real-time measurement and accountability.",
        ],
        subs: [
            { title: "Sampling & Retail Activation", what: "Product sampling, mall activations, market activations and retail experiences.", output: "Hands-on brand encounters that drive trial and recall.", impact: "Creates direct consumer engagement and boosts purchase intent." },
            { title: "Campus & Street Campaigns", what: "Campus activations, street teams, guerrilla marketing and event support.", output: "High-energy brand moments in meaningful local environments.", impact: "Builds attention and advocacy among targeted communities." },
            { title: "Trade & Dealer Programs", what: "Merchandising, trade marketing activations, dealer support and door-to-door campaigns.", output: "Commercial field programs that support distribution and retail sell-through.", impact: "Strengthens brand presence at the point of purchase and in the channel." },
        ],
        img: "https://images.unsplash.com/photo-1506321806993-0fbdc8c1d6ef?w=900&h=600&fit=crop&auto=format",
        alt: "BTL activations"
    },
    {
        num: "11",
        id: "event-production",
        title: "Event Production",
        tagline: "Every event is an opportunity to create influence. We produce executive forums, product launches, conferences and live experiences that leave lasting impressions.",
        pillars: [
            "Full-service event production from concept to stage, technical execution and talent booking.",
            "Hybrid, virtual and live formats designed for maximum brand impact.",
            "Premium event logistics and technical support for seamless delivery.",
        ],
        subs: [
            { title: "Corporate & Conference Production", what: "Corporate events, conferences and executive forums with end-to-end production.", output: "High-quality live experiences that elevate corporate positioning.", impact: "Strengthens stakeholder relationships and brand authority." },
            { title: "Product Launches & Awards Shows", what: "Launch experiences, awards ceremonies and festival-style activations.", output: "Memorable brand moments that generate media coverage and market buzz.", impact: "Creates momentum for new products and brand campaigns." },
            { title: "Virtual, Hybrid & Exhibition Production", what: "Virtual event platforms, hybrid broadcast production and exhibition staging.", output: "Accessible, scalable event experiences for remote and live audiences.", impact: "Expands reach while preserving premium production value." },
        ],
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=600&fit=crop&auto=format",
        alt: "Event production"
    },
    {
        num: "12",
        id: "research-analytics",
        title: "Research & Analytics",
        tagline: "The best decisions begin with better insights. We transform research, market intelligence and performance analytics into actionable brand and campaign strategy.",
        pillars: [
            "Market and consumer research that reveals audience motivations and opportunity spaces.",
            "Campaign performance reporting, social listening and digital analytics.",
            "ROI measurement, attribution and dashboards that make data easy to act on.",
        ],
        subs: [
            { title: "Market & Consumer Research", what: "Market research, customer studies, competitor analysis and brand health tracking.", output: "Insight reports that reveal customer behaviour, market positioning and growth opportunities.", impact: "Helps teams make better decisions and reduce commercial risk." },
            { title: "Campaign Performance Analytics", what: "Social, digital and media analytics with clear reporting and optimisation guidance.", output: "Performance dashboards, campaign reports and impact summaries.", impact: "Increases confidence in spend and improves future campaign effectiveness." },
            { title: "ROI & Business Intelligence", what: "Attribution models, ROI measurement and data dashboards for marketing outcomes.", output: "Actionable intelligence that ties brand activity to business results.", impact: "Turns creative and media investment into measurable commercial insight." },
        ],
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format",
        alt: "Research and analytics"
    },
];
// ─── Animation hook ───────────────────────────────────────────────────────────
function useInView(threshold) {
    if (threshold === void 0) { threshold = 0.15; }
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
// ─── Sub-service card ─────────────────────────────────────────────────────────
function SubCard(_a) {
    var sub = _a.sub, index = _a.index;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = useInView(0.1), ref = _c.ref, visible = _c.visible;
    return (React.createElement("div", { ref: ref, className: "border border-border bg-card group hover:border-primary/40 transition-all duration-300", style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.5s ease " + index * 80 + "ms, transform 0.5s ease " + index * 80 + "ms, border-color 0.3s"
        } },
        React.createElement("button", { className: "w-full text-left px-6 py-5 flex items-start justify-between gap-4", onClick: function () { return setOpen(!open); }, "aria-expanded": open },
            React.createElement("h4", { className: "font-display font-black text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-200 leading-snug" }, sub.title),
            React.createElement(lucide_react_1.ChevronDown, { size: 18, className: "shrink-0 text-muted-foreground mt-0.5 transition-transform duration-300 " + (open ? "rotate-180 text-primary" : "") })),
        React.createElement("div", { className: "overflow-hidden transition-all duration-400", style: { maxHeight: open ? "500px" : "0", opacity: open ? 1 : 0 } },
            React.createElement("div", { className: "px-6 pb-6 space-y-4 border-t border-border pt-4" }, [
                { label: "What we do", value: sub.what },
                { label: "The output", value: sub.output },
                { label: "The impact", value: sub.impact },
            ].map(function (_a) {
                var label = _a.label, value = _a.value;
                return (React.createElement("div", { key: label, className: "flex gap-3" },
                    React.createElement("span", { className: "font-mono text-[9px] tracking-widest uppercase text-primary border border-primary/25 px-2 py-1 h-fit shrink-0 mt-0.5" }, label),
                    React.createElement("p", { className: "text-muted-foreground text-sm leading-relaxed" }, value)));
            })))));
}
// ─── Service section ──────────────────────────────────────────────────────────
function ServiceSection(_a) {
    var service = _a.service;
    var _b = useInView(0.08), ref = _b.ref, visible = _b.visible;
    return (React.createElement("section", { id: service.id, className: "py-20 border-b border-border scroll-mt-20" },
        React.createElement("div", { ref: ref },
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start mb-14", style: {
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease"
                } },
                React.createElement("div", null,
                    React.createElement("div", { className: "flex items-center gap-4 mb-5" },
                        React.createElement("span", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase border border-primary/30 px-3 py-1.5" }, service.num),
                        React.createElement("div", { className: "flex-1 h-px bg-border" })),
                    React.createElement("h2", { className: "font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-5" }, service.title),
                    React.createElement("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-xl" }, service.tagline)),
                React.createElement("div", { className: "aspect-[4/3] overflow-hidden bg-muted relative", style: {
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateX(0)" : "translateX(24px)",
                        transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s"
                    } },
                    React.createElement("img", { src: service.img, alt: service.alt, className: "w-full h-full object-cover brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-700" }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" }))),
            React.createElement("div", { className: "mb-10 grid grid-cols-1 md:grid-cols-3 gap-4", style: {
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s"
                } }, service.pillars.map(function (p, i) { return (React.createElement("div", { key: i, className: "flex gap-3 p-5 bg-secondary border border-border hover:border-primary/30 transition-colors duration-300" },
                React.createElement(lucide_react_1.CheckCircle2, { size: 15, className: "text-primary shrink-0 mt-0.5" }),
                React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed" }, p))); })),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, service.subs.map(function (sub, i) { return (React.createElement(SubCard, { key: sub.title, sub: sub, index: i })); })))));
}
// ─── Page ─────────────────────────────────────────────────────────────────────
function Services() {
    var _a = react_1.useState(SERVICES[0].id), activeId = _a[0], setActiveId = _a[1];
    var navigate = react_router_1.useNavigate();
    // Track active section on scroll
    react_1.useEffect(function () {
        var sections = SERVICES.map(function (s) { return document.getElementById(s.id); });
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting)
                    setActiveId(entry.target.id);
            });
        }, { rootMargin: "-30% 0px -60% 0px" });
        sections.forEach(function (s) { return s && observer.observe(s); });
        return function () { return observer.disconnect(); };
    }, []);
    var scrollTo = react_1.useCallback(function (id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    return (React.createElement("div", { className: "min-h-screen bg-background" },
        React.createElement("div", { className: "pt-24 pb-16 px-6 md:px-12 bg-card border-b border-border" },
            React.createElement("div", { className: "max-w-[1400px] mx-auto" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-end" },
                    React.createElement("div", null,
                        React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.22em] uppercase mb-5" }, "Section 3 \u2014 Service Catalogue"),
                        React.createElement("h1", { className: "font-display text-5xl md:text-7xl font-black leading-[0.95] text-foreground mb-6" },
                            "The 12 Core",
                            React.createElement("br", null),
                            React.createElement("span", { className: "text-primary" }, "Service"),
                            React.createElement("br", null),
                            "Pillars"),
                        React.createElement("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-md" }, "Explore our specialised services below to turn your brand identity into a high-yielding corporate asset. Every pillar is fully staffed, fully equipped, and ready to deploy.")),
                    React.createElement("div", { className: "grid grid-cols-2 gap-4" }, [
                        { val: "12", label: "Fully staffed service pillars" },
                        { val: "1", label: "Partner. One invoice. Zero friction." },
                        { val: "∞", label: "Scalable across all industries" },
                        { val: "NDA", label: "Available on every engagement" },
                    ].map(function (s) { return (React.createElement("div", { key: s.label, className: "border border-border p-5 hover:border-primary/40 transition-colors duration-300" },
                        React.createElement("div", { className: "font-display text-4xl font-black text-primary mb-1" }, s.val),
                        React.createElement("div", { className: "text-xs text-muted-foreground leading-snug" }, s.label))); }))),
                React.createElement("div", { className: "mt-12 flex flex-wrap gap-2" }, SERVICES.map(function (s) { return (React.createElement("button", { key: s.id, onClick: function () { return scrollTo(s.id); }, className: "font-mono text-[9px] tracking-widest uppercase border border-border text-muted-foreground px-3 py-1.5 hover:border-primary/50 hover:text-primary transition-all duration-200" },
                    s.num,
                    " ",
                    s.title.split(" ")[0])); })))),
        React.createElement("div", { className: "max-w-[1400px] mx-auto px-6 md:px-12" },
            React.createElement("div", { className: "flex gap-12 lg:gap-16 items-start" },
                React.createElement("aside", { className: "hidden lg:block w-56 shrink-0 sticky top-20 pt-10 pb-20 self-start" },
                    React.createElement("p", { className: "font-mono text-[9px] text-muted-foreground tracking-widest uppercase mb-4" }, "Jump to service"),
                    React.createElement("nav", { className: "space-y-0.5" }, SERVICES.map(function (s) { return (React.createElement("button", { key: s.id, onClick: function () { return scrollTo(s.id); }, className: "w-full text-left flex items-center gap-3 px-3 py-2.5 transition-all duration-200 group " + (activeId === s.id
                            ? "text-primary bg-primary/5 border-l-2 border-primary"
                            : "text-muted-foreground hover:text-foreground border-l-2 border-transparent hover:border-border") },
                        React.createElement("span", { className: "font-mono text-[9px] tracking-widest shrink-0 transition-colors " + (activeId === s.id ? "text-primary" : "text-muted-foreground/60") }, s.num),
                        React.createElement("span", { className: "text-xs leading-snug" }, s.title))); })),
                    React.createElement("div", { className: "mt-8 border border-primary/30 p-4 bg-primary/5" },
                        React.createElement("p", { className: "font-mono text-[9px] text-primary tracking-widest uppercase mb-2" }, "Ready to start?"),
                        React.createElement("p", { className: "text-xs text-muted-foreground leading-snug mb-3" }, "Book a 15-minute alignment brief \u2014 no pitch decks."),
                        React.createElement("button", { onClick: function () { return navigate("/"); }, className: "w-full bg-primary text-primary-foreground py-2 text-xs font-bold tracking-wide hover:bg-primary/85 transition-colors flex items-center justify-center gap-1.5" },
                            "Get started ",
                            React.createElement(lucide_react_1.ArrowRight, { size: 11 })))),
                React.createElement("main", { className: "flex-1 min-w-0 pt-4" }, SERVICES.map(function (service) { return (React.createElement(ServiceSection, { key: service.id, service: service })); })))),
        React.createElement("div", { className: "bg-primary mt-0" },
            React.createElement("div", { className: "max-w-[1400px] mx-auto px-6 md:px-12 py-20" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", null,
                        React.createElement("p", { className: "font-mono text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60 mb-4" }, "One partner. Every capability."),
                        React.createElement("h2", { className: "font-display text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-4" },
                            "Stop managing",
                            React.createElement("br", null),
                            "multiple vendors."),
                        React.createElement("p", { className: "text-primary-foreground/70 text-lg leading-relaxed" }, "All 12 service pillars under one roof. One account manager, one invoice, zero micro-management. Your marketing team gets back to strategy \u2014 we handle everything else.")),
                    React.createElement("div", { className: "space-y-4" },
                        [
                            "Save costs — no equipment purchases or studio rentals",
                            "No HR burden — our 200+ creatives are on demand",
                            "Bulletproof privacy — NDA on every engagement",
                            "One invoice — covering all services, any combination",
                        ].map(function (point, i) { return (React.createElement("div", { key: i, className: "flex items-start gap-3 p-4 bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors duration-200" },
                            React.createElement(lucide_react_1.CheckCircle2, { size: 16, className: "text-primary-foreground shrink-0 mt-0.5" }),
                            React.createElement("span", { className: "text-primary-foreground text-sm" }, point))); }),
                        React.createElement("div", { className: "flex flex-col sm:flex-row gap-3 pt-4" },
                            React.createElement("button", { onClick: function () { navigate("/"); setTimeout(function () { var _a; return (_a = document.getElementById("contact")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" }); }, 80); }, className: "inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-7 py-4 font-bold text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors" },
                                "Book your alignment brief ",
                                React.createElement(lucide_react_1.ArrowRight, { size: 15 })),
                            React.createElement("a", { href: "mailto:Echooroom@starksltd.com", className: "inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-4 text-sm tracking-wide hover:border-primary-foreground/60 transition-colors" },
                                "Echooroom@starksltd.com ",
                                React.createElement(lucide_react_1.ArrowUpRight, { size: 14 }))))))),
        React.createElement("div", { className: "bg-background border-t border-border px-6 md:px-12 py-8 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "flex flex-col sm:flex-row justify-between gap-2" },
                React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-wide" }, "\u00A9 2024 EchooRoom Studio Ltd. All rights reserved."),
                React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-wide" }, "12 Core Service Pillars \u00B7 Enterprise Profile & Service Catalogue")))));
}
exports["default"] = Services;
