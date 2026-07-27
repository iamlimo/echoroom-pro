"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var INDUSTRIES = [
    "Commercial Banking", "Fintech", "Manufacturing", "Retail & FMCG",
    "Real Estate", "Global NGOs", "Telecom Giants",
    "High-Growth Startups", "Mid-Market Enterprises", "Tech Companies",
];
var SERVICES = [
    { num: "01", title: "Media Production", desc: "Every brand has a story. The most successful brands know how to tell it. We create premium media productions—from television commercials and brand films to documentaries, digital content, podcasts, and live broadcasts—that help organisations build trust, inspire action, and create lasting business impact." },
    { num: "02", title: "Brand Strategy", desc: "Great brands are built on clarity, not coincidence. We help organisations define who they are, what they stand for, and how they create value—building distinctive brands that earn trust, inspire loyalty, and drive long-term growth." },
    { num: "03", title: "Creative Strategy", desc: "Creativity is most powerful when it solves business problems. We develop insight-driven creative strategies that transform ideas into campaigns, experiences, and stories that connect with audiences and deliver measurable results." },
    { num: "04", title: "Digital Marketing", desc: "Growth doesn't happen by chance. It happens through strategy. We design integrated digital marketing campaigns that combine data, creativity, and technology to increase visibility, generate demand, and accelerate business performance across every digital touchpoint." },
    { num: "05", title: "White-Label Enterprise Solutions", desc: "Backend creative execution engineered to scale content production without increasing internal headcount — under your brand name." },
    { num: "06", title: "Media Buying", desc: "The right message deserves the right audience. We plan, negotiate, and optimise media investments across digital, broadcast, print, and outdoor channels—maximising reach, improving efficiency, and delivering measurable campaign performance." },
    { num: "07", title: "Social Media Management", desc: "Conversations shape brands every day. We help organisations build meaningful relationships through strategic content, community management, platform growth, and social media campaigns that strengthen brand presence and drive engagement." },
    { num: "08", title: "PR & Communications", desc: "Reputation is earned through every conversation. We help organisations communicate with confidence, build credibility, manage public perception, and strengthen relationships through strategic public relations and corporate communications." },
    { num: "09", title: "Experiential Marketing", desc: "People remember how brands make them feel. We create immersive brand experiences that bring ideas to life, deepen audience engagement, and turn meaningful interactions into lasting brand loyalty." },
    { num: "10", title: "Influencer Marketing", desc: "Influence is built on trust, not just reach. We connect brands with creators, industry voices, and cultural influencers to deliver authentic campaigns that spark conversations, build credibility, and inspire action." },
    { num: "11", title: "BTL Activations", desc: "The strongest brand connections happen in the real world. We design below-the-line activation campaigns that bring brands closer to consumers through memorable experiences, product engagement, and measurable market impact." },
    { num: "12", title: "Event Production", desc: "Every event is an opportunity to create influence. From executive forums and product launches to large-scale conferences and live experiences, we produce events that engage audiences, strengthen brands, and leave lasting impressions." },
    { num: "13", title: "Research & Analytics", desc: "The best decisions begin with better insights. We transform research, market intelligence, and performance analytics into actionable strategies that help organisations understand audiences, measure impact, and make confident business decisions." },
];
var ADVANTAGES = [
    { num: "2.1", title: "Save Costs. Stop Buying Expensive Equipment.", desc: "Turn big upfront costs into a simple, predictable monthly expense. Instant access to our multi-million Naira setup — film studios, design engines, sound stages, and pre-built distribution networks.", icon: "₦" },
    { num: "2.2", title: "No HR Stress, Hiring Hassles, or Creative Burnout.", desc: "A fully trained, expert creative department on demand. Scriptwriters, video editors, sound masters, brand partnership managers, and physical event coordinators — ready now.", icon: "⚡" },
    { num: "2.3", title: "Bulletproof Privacy & Enterprise-Grade Security.", desc: "Encrypted data workflows, isolated file storage, and strict white-label contracts. We work completely behind the scenes — your brand reputation is completely safe.", icon: "🔒" },
    { num: "2.4", title: "One Partner. One Invoice. Zero Micro-Management.", desc: "All 11 marketing and media services under one roof. One account manager, one invoice. Your team stops chasing suppliers and freelancers — permanently.", icon: "✦" },
];
var STATS = [
    { value: "13", label: "Core service pillars" },
    { value: "85%", label: "Drop in negative mentions within 24hrs" },
    { value: "98.2%", label: "Client retention rate" },
    { value: "3×", label: "Share of Voice increase post-crisis" },
];
var ONBOARDING = [
    { step: "01", title: "The Alignment Brief", desc: "A focused 15-minute call to map your quarterly content goals, campaign priorities, and production requirements." },
    { step: "02", title: "The Framework Scope", desc: "We deliver custom retainer tiers or campaign estimates tailored to your exact scale and budget." },
    { step: "03", title: "Studio Rollout", desc: "Camera crews, scriptwriters, and strategy sessions activate. Your pipeline runs — without adding to your headcount." },
];
function Ticker() {
    return (React.createElement("div", { className: "overflow-hidden border-y border-border py-4 select-none" },
        React.createElement("div", { className: "flex gap-12 animate-[ticker_28s_linear_infinite] w-max" }, __spreadArrays(INDUSTRIES, INDUSTRIES, INDUSTRIES).map(function (item, i) { return (React.createElement("span", { key: i, className: "text-[11px] font-mono text-muted-foreground tracking-[0.18em] uppercase whitespace-nowrap flex items-center gap-12" },
            item,
            React.createElement("span", { className: "text-primary text-base leading-none" }, "\u25C6"))); })),
        React.createElement("style", null, "@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }")));
}
function Hero() {
    return (React.createElement("section", { className: "min-h-screen flex flex-col justify-end pt-24 pb-16 px-6 md:px-12 relative overflow-hidden" },
        React.createElement("style", null, "\n        @media (prefers-reduced-motion: reduce) {\n          .hero-bg-video { display: none !important; }\n        }\n      "),
        React.createElement("div", { className: "hero-bg-video absolute inset-0 w-full h-full", "aria-hidden": "true" },
            React.createElement("video", { className: "absolute inset-0 w-full h-full object-cover", src: "/assets/home-back.mp4", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "auto" })),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-black/[0.65]", "aria-hidden": "true" }),
        React.createElement("div", { className: "absolute inset-0 pointer-events-none bg-gradient-to-b from-black/[0.55] via-black/[0.28] to-black/[0.72]", "aria-hidden": "true" }),
        React.createElement("div", { className: "relative z-10 w-full" },
            React.createElement("div", { className: "max-w-[1400px] mx-auto" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-end" },
                    React.createElement("div", null,
                        React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.22em] uppercase mb-8" }, "Strategic Capability \u2014 Enterprise Profile & Service Catalogue"),
                        React.createElement("h3", { className: "font-display text-[clamp(3.2rem,9vw,8.5rem)] font-black leading-[0.92] tracking-tight text-foreground" },
                            "Great Brands Don't Compete for  ",
                            React.createElement("em", { className: "not-italic text-primary" }, "Attention"),
                            React.createElement("br", null),
                            " They Earn ",
                            React.createElement("em", { className: "not-italic text-primary" }, "Influence"),
                            ".")),
                    React.createElement("div", { className: "lg:max-w-sm pb-2" },
                        React.createElement("p", { className: "text-foreground/90 text-lg leading-relaxed mb-8" }, "EchooRoom is an integrated creative company that helps ambitious organisations build influential brands, create meaningful experiences, and accelerate growth through strategy, storytelling, media, marketing, and technology."),
                        React.createElement("div", { className: "flex flex-col sm:flex-row gap-3" },
                            React.createElement("a", { href: "#services", className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors" },
                                "Explore 11 services ",
                                React.createElement(lucide_react_1.ArrowRight, { size: 15 })),
                            React.createElement("a", { href: "#contact", className: "inline-flex items-center gap-2 border border-white/25 text-foreground px-6 py-3.5 text-sm tracking-wide hover:border-primary/60 transition-colors" },
                                React.createElement(lucide_react_1.Play, { size: 13, className: "fill-current" }),
                                " Book alignment brief")))),
                React.createElement("div", { className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border" }, STATS.map(function (s) { return (React.createElement("div", { key: s.label },
                    React.createElement("div", { className: "font-display text-3xl md:text-4xl font-black text-primary" }, s.value),
                    React.createElement("div", { className: "text-xs text-muted-foreground mt-1.5 leading-snug" }, s.label))); }))))));
}
function Services() {
    var _a = react_1.useState(null), active = _a[0], setActive = _a[1];
    return (React.createElement("section", { id: "services", className: "py-24 px-6 md:px-12 max-w-[1400px] mx-auto" },
        React.createElement("div", { className: "mb-16" },
            React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4" }, "Section 3"),
            React.createElement("div", { className: "flex items-end justify-between gap-8" },
                React.createElement("h2", { className: "font-display text-4xl md:text-6xl font-black leading-tight text-foreground" },
                    "The 13 Core",
                    React.createElement("br", null),
                    "Service Pillars"),
                React.createElement("p", { className: "hidden md:block max-w-xs text-muted-foreground text-sm leading-relaxed" }, "Explore our specialised services below to turn your brand identity into a high-yielding corporate asset."))),
        React.createElement("div", { className: "divide-y divide-border" }, SERVICES.map(function (s, i) { return (React.createElement("div", { key: s.num, className: "group cursor-pointer", onMouseEnter: function () { return setActive(i); }, onMouseLeave: function () { return setActive(null); } },
            React.createElement("div", { className: "py-6 md:py-7 grid grid-cols-[56px_1fr_auto] md:grid-cols-[72px_1fr_340px_32px] gap-4 md:gap-8 items-center" },
                React.createElement("span", { className: "font-mono text-xs text-primary tracking-widest font-medium" }, s.num),
                React.createElement("h3", { className: "font-display text-xl md:text-3xl font-black transition-colors duration-150 " + (active === i ? "text-primary" : "text-foreground") }, s.title),
                React.createElement("p", { className: "hidden md:block text-sm text-muted-foreground leading-relaxed transition-opacity duration-200 " + (active === i ? "opacity-100" : "opacity-50") }, s.desc),
                React.createElement(lucide_react_1.ArrowUpRight, { size: 18, className: "transition-all duration-200 shrink-0 " + (active === i ? "text-primary rotate-0" : "text-muted-foreground -rotate-45") })),
            React.createElement("p", { className: "md:hidden text-sm text-muted-foreground leading-relaxed pb-5" }, s.desc))); }))));
}
function Advantage() {
    return (React.createElement("section", { id: "advantage", className: "py-24 bg-card" },
        React.createElement("div", { className: "px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "mb-16" },
                React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4" }, "Section 2"),
                React.createElement("h2", { className: "font-display text-4xl md:text-6xl font-black leading-tight text-foreground max-w-2xl" }, "The Enterprise Advantage"),
                React.createElement("p", { className: "text-muted-foreground mt-4 text-lg max-w-xl leading-relaxed" }, "Four structural reasons your business stops losing time and money on fragmented marketing.")),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-border" }, ADVANTAGES.map(function (adv) { return (React.createElement("div", { key: adv.num, className: "bg-card p-8 md:p-10 group hover:bg-secondary transition-colors duration-300" },
                React.createElement("div", { className: "flex items-start justify-between mb-6" },
                    React.createElement("span", { className: "font-mono text-[10px] text-primary tracking-widest uppercase border border-primary/30 px-2.5 py-1" }, adv.num),
                    React.createElement("span", { className: "text-2xl opacity-40 group-hover:opacity-100 transition-opacity" }, adv.icon)),
                React.createElement("h3", { className: "font-display text-xl md:text-2xl font-black text-foreground mb-4 leading-tight" }, adv.title),
                React.createElement("p", { className: "text-muted-foreground text-sm leading-relaxed" }, adv.desc))); })))));
}
function StudioProfile() {
    return (React.createElement("section", { className: "py-24 px-6 md:px-12 max-w-[1400px] mx-auto" },
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" },
            React.createElement("div", null,
                React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase mb-6" }, "Section 1 \u2014 The Studio Profile"),
                React.createElement("h2", { className: "font-display text-4xl md:text-5xl font-black leading-[1.05] text-foreground mb-8" }, "Your fully outsourced creative department."),
                React.createElement("p", { className: "text-muted-foreground text-lg leading-relaxed mb-5" }, "We design premium visual, auditory, and experiential assets for brands that refuse to blend into the background."),
                React.createElement("p", { className: "text-muted-foreground leading-relaxed mb-10" }, "We transform complex corporate narratives and service offerings into high-impact digital assets that capture attention, command authority, and unlock massive commercial value with zero operational friction."),
                React.createElement("div", { className: "space-y-3 mb-10" }, ["Cinematic Enterprise Video Production", "Dynamic Motion Graphics Animation", "Studio-Grade Branded Audio Networks", "Experiential BTL Marketing Activations", "High-Yield Content Retainers"].map(function (item) { return (React.createElement("div", { key: item, className: "flex items-center gap-3" },
                    React.createElement(lucide_react_1.CheckCircle2, { size: 15, className: "text-primary shrink-0" }),
                    React.createElement("span", { className: "text-sm text-foreground" }, item))); })),
                React.createElement("a", { href: "#contact", className: "inline-flex items-center gap-2 text-primary text-sm font-bold tracking-wide hover:gap-3 transition-all duration-200" },
                    "Book your alignment brief ",
                    React.createElement(lucide_react_1.ArrowRight, { size: 15 }))),
            React.createElement("div", { className: "relative" },
                React.createElement("div", { className: "aspect-[4/5] bg-muted overflow-hidden" },
                    React.createElement("img", { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=900&fit=crop&auto=format", alt: "EchooRoom Studio production environment", className: "w-full h-full object-cover" }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" })),
                React.createElement("div", { className: "absolute -bottom-6 -left-6 bg-primary p-6 max-w-[220px]" },
                    React.createElement("div", { className: "font-display text-5xl font-black text-primary-foreground leading-none" }, "11"),
                    React.createElement("div", { className: "font-mono text-[10px] text-primary-foreground/70 tracking-widest mt-2 uppercase leading-snug" }, "Core service pillars under one roof"))))));
}
function CaseStudy() {
    return (React.createElement("section", { id: "casestudy", className: "py-24 bg-card" },
        React.createElement("div", { className: "px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "mb-16" },
                React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4" }, "Section 4 \u2014 Archived Impact"),
                React.createElement("h2", { className: "font-display text-4xl md:text-6xl font-black leading-tight text-foreground" },
                    "Crisis Mitigation &",
                    React.createElement("br", null),
                    "Reputational Recovery")),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-px bg-border mb-16" }, [
                { label: "The Challenge", color: "bg-card", content: "A regional corporate organisation faced an unexpected operational disruption during a critical product rollout, causing service delays and a sudden wave of negative public sentiment across major digital platforms." },
                { label: "Our Intervention", color: "bg-secondary", content: "Within two hours, we activated a custom Crisis Management Blueprint — establishing unified response scripts, coordinating with key industry editors, briefing micro-influencers to anchor public attention on the brand's rapid resolution roadmap." },
                { label: "The Result", color: "bg-card", content: "Harmful public mentions fell 85% within the first 24 hours. We secured 14 positive, high-authority editorial placements across top-tier networks inside five days. Customer retention stabilised at 98.2%, and Share of Voice increased threefold." },
            ].map(function (col) { return (React.createElement("div", { key: col.label, className: col.color + " p-8 md:p-10" },
                React.createElement("p", { className: "font-mono text-[10px] text-primary tracking-widest uppercase mb-5 border-b border-border pb-4" }, col.label),
                React.createElement("p", { className: "text-foreground text-sm leading-relaxed" }, col.content))); })),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border" }, [
                { val: "85%", label: "Drop in harmful mentions within 24 hours" },
                { val: "14", label: "High-authority editorial placements secured" },
                { val: "98.2%", label: "Customer retention post-crisis" },
                { val: "3×", label: "Share of Voice vs. pre-crisis baseline" },
            ].map(function (s) { return (React.createElement("div", { key: s.label },
                React.createElement("div", { className: "font-display text-3xl md:text-5xl font-black text-primary" }, s.val),
                React.createElement("div", { className: "text-xs text-muted-foreground mt-2 leading-snug" }, s.label))); })))));
}
function Industries() {
    return (React.createElement("section", { className: "py-24 px-6 md:px-12 max-w-[1400px] mx-auto" },
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start" },
            React.createElement("div", null,
                React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4" }, "Industries we amplify"),
                React.createElement("h2", { className: "font-display text-4xl md:text-5xl font-black leading-tight text-foreground mb-6" }, "Built for every sector."),
                React.createElement("p", { className: "text-muted-foreground text-base leading-relaxed" }, "Modern market leadership belongs to organisations that operate like media companies. We engineer our creative pipeline to adapt precisely to the scale of your operations.")),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3" },
                INDUSTRIES.map(function (ind) { return (React.createElement("div", { key: ind, className: "border border-border px-5 py-4 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200 cursor-default" },
                    React.createElement("span", { className: "text-primary mr-2 text-xs" }, "\u25C6"),
                    ind)); }),
                React.createElement("div", { className: "border border-primary/30 bg-primary/5 px-5 py-4 col-span-2 md:col-span-1" },
                    React.createElement("p", { className: "font-mono text-[10px] text-primary tracking-widest uppercase mb-2" }, "Scaled for"),
                    React.createElement("p", { className: "text-sm text-foreground font-medium" }, "Small Businesses \u00B7 Mid-Scale \u00B7 Large Corporations"))))));
}
function PullQuote() {
    return (React.createElement("section", { className: "py-24 bg-primary" },
        React.createElement("div", { className: "px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "max-w-4xl" },
                React.createElement("p", { className: "font-mono text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60 mb-8" }, "Our commitment"),
                React.createElement("p", { className: "font-display text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.08] mb-10" }, "\u201CWe strip the operational overhead and staffing liability out of your marketing calendar while scaling your visual and auditory presence across the market.\u201D"),
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "w-1 h-8 bg-primary-foreground/30" }),
                    React.createElement("p", { className: "font-mono text-xs text-primary-foreground/60 tracking-widest uppercase" }, "EchooRoom Studio Ltd \u2014 Enterprise Profile"))))));
}
function Onboarding() {
    return (React.createElement("section", { className: "py-24 px-6 md:px-12 max-w-[1400px] mx-auto" },
        React.createElement("div", { className: "mb-16" },
            React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4" }, "Section 5 \u2014 Backstage Pass"),
            React.createElement("h2", { className: "font-display text-4xl md:text-6xl font-black leading-tight text-foreground" },
                "Next steps &",
                React.createElement("br", null),
                "client onboarding")),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-border" }, ONBOARDING.map(function (step) { return (React.createElement("div", { key: step.step, className: "bg-background p-8 md:p-10 group" },
            React.createElement("div", { className: "font-display text-6xl md:text-7xl font-black text-border group-hover:text-primary/20 transition-colors duration-300 mb-6 leading-none" }, step.step),
            React.createElement("h3", { className: "font-display text-xl md:text-2xl font-black text-primary mb-4" }, step.title),
            React.createElement("p", { className: "text-muted-foreground text-sm leading-relaxed" }, step.desc))); }))));
}
function Contact() {
    var _a = react_1.useState({ name: "", email: "", company: "", size: "", message: "" }), form = _a[0], setForm = _a[1];
    var _b = react_1.useState(false), sent = _b[0], setSent = _b[1];
    return (React.createElement("section", { id: "contact", className: "py-24 bg-card" },
        React.createElement("div", { className: "px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" },
                React.createElement("div", null,
                    React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4" }, "Get in touch"),
                    React.createElement("h2", { className: "font-display text-4xl md:text-6xl font-black leading-tight text-foreground mb-8" },
                        "Start something",
                        React.createElement("br", null),
                        "significant."),
                    React.createElement("p", { className: "text-muted-foreground text-lg leading-relaxed mb-12" }, "Tell us about your organisation and production goals. We respond within 24 hours \u2014 no pitch decks, no lengthy intake forms."),
                    React.createElement("div", { className: "space-y-6" },
                        React.createElement("div", null,
                            React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-1" }, "Email"),
                            React.createElement("a", { href: "mailto:Echooroom@starksltd.com", className: "text-foreground hover:text-primary transition-colors" }, "Echooroom@starksltd.com")),
                        React.createElement("div", null,
                            React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2" }, "Services offered")))),
                React.createElement("div", null, sent ? (React.createElement("div", { className: "border border-primary/30 bg-primary/5 p-12 text-center" },
                    React.createElement("div", { className: "text-primary text-4xl mb-5" }, "\u25C6"),
                    React.createElement("h3", { className: "font-display text-2xl font-black text-foreground mb-3" }, "Brief received."),
                    React.createElement("p", { className: "text-muted-foreground text-sm" }, "Our team will be in touch within 24 hours to schedule your alignment call."))) : (React.createElement("form", { onSubmit: function (e) { e.preventDefault(); setSent(true); }, className: "space-y-5" },
                    [
                        { name: "name", label: "Your name", type: "text", required: true },
                        { name: "email", label: "Work email address", type: "email", required: true },
                        { name: "company", label: "Organisation / company", type: "text", required: false },
                        { name: "size", label: "Organisation size", type: "text", required: false },
                    ].map(function (field) { return (React.createElement("div", { key: field.name },
                        React.createElement("label", { className: "block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2" }, field.label),
                        React.createElement("input", { type: field.type, required: field.required, value: form[field.name], onChange: function (e) {
                                var _a;
                                return setForm(__assign(__assign({}, form), (_a = {}, _a[field.name] = e.target.value, _a)));
                            }, className: "w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/40", placeholder: field.label }))); }),
                    React.createElement("div", null,
                        React.createElement("label", { className: "block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2" }, "Tell us about your production goals"),
                        React.createElement("textarea", { required: true, rows: 5, value: form.message, onChange: function (e) { return setForm(__assign(__assign({}, form), { message: e.target.value })); }, className: "w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none placeholder:text-muted-foreground/40", placeholder: "What are you working on? What is the scale of your content needs?" })),
                    React.createElement("button", { type: "submit", className: "w-full bg-primary text-primary-foreground py-4 font-bold text-sm tracking-wide hover:bg-primary/85 transition-colors flex items-center justify-center gap-2" },
                        "Book the alignment brief ",
                        React.createElement(lucide_react_1.ArrowRight, { size: 15 })),
                    React.createElement("p", { className: "text-[11px] text-muted-foreground text-center font-mono tracking-wide" }, "We respond within 24 hours \u2014 NDA available on request"))))))));
}
function Footer() {
    return (React.createElement("footer", { className: "border-t border-border py-12 px-6 md:px-12 max-w-[1400px] mx-auto" },
        React.createElement("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-8" },
            React.createElement("div", null,
                React.createElement("div", { className: "flex items-center gap-0 select-none" },
                    React.createElement("img", { src: "/assets/echoroom-logo.png", alt: "EchoRoom", className: "h-10 w-auto md:h-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]", style: { filter: "brightness(0) invert(1)" } })),
                React.createElement("p", { className: "text-xs text-muted-foreground mt-2 font-mono tracking-wide" }, "EchooRoom Studio Ltd")),
            React.createElement("div", { className: "flex flex-wrap gap-8" }, ["Services", "Studio", "Shows", "Contact"].map(function (item) { return (React.createElement("a", { key: item, href: "#", className: "text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide" }, item)); })),
            React.createElement("a", { href: "mailto:Echooroom@starksltd.com", className: "font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide" }, "Echooroom@starksltd.com")),
        React.createElement("div", { className: "mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2" },
            React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-wide" }, "\u00A9 2026 EchooRoom Studio Ltd. All rights reserved."),
            React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-wide" }, "Strategic Capability Document \u00B7 Enterprise Profile & Service Catalogue"))));
}
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Hero, null),
        React.createElement(Ticker, null),
        React.createElement(Services, null),
        React.createElement(Advantage, null),
        React.createElement(StudioProfile, null),
        React.createElement(CaseStudy, null),
        React.createElement(Industries, null),
        React.createElement(PullQuote, null),
        React.createElement(Onboarding, null),
        React.createElement(Contact, null),
        React.createElement(Footer, null)));
}
exports["default"] = Home;
