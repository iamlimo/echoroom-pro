"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_1 = require("react-router");
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
    var children = _a.children, _b = _a.delayMs, delayMs = _b === void 0 ? 0 : _b, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.y, y = _d === void 0 ? 16 : _d;
    var _e = useInView(0.12), ref = _e.ref, visible = _e.visible;
    return (React.createElement("div", { ref: ref, className: className, style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(" + y + "px)",
            transition: "opacity 520ms ease " + delayMs + "ms, transform 520ms ease " + delayMs + "ms"
        } }, children));
}
function getInitials(name) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(function (p) { var _a; return (_a = p[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase(); })
        .join("");
}
function initialsBg(name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++)
        hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
    var hues = [210, 265, 165, 35, 320, 10];
    var hue = hues[hash % hues.length];
    return "hsl(" + hue + " 85% 50%)";
}
function scrollToHash(hash) {
    var _a;
    (_a = document.querySelector(hash)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
}
function ProfileCard(_a) {
    var member = _a.member;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    return (React.createElement("div", { className: "group w-full", onMouseEnter: function () { return setOpen(true); }, onMouseLeave: function () { return setOpen(false); }, onFocus: function () { return setOpen(true); }, onBlur: function () { return setOpen(false); } },
        React.createElement("article", { className: "overflow-hidden rounded-[20px] border bg-card transition-all duration-300 " + (open ? "border-primary/35 -translate-y-1 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)]" : "border-border hover:border-border/80") },
            React.createElement("div", { className: "relative aspect-[4/5] overflow-hidden bg-muted" },
                member.imageSrc ? (React.createElement("img", { src: member.imageSrc, alt: member.name + " portrait", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]", loading: "lazy", onError: function (e) {
                        var img = e.currentTarget;
                        img.style.display = "none";
                    } })) : null,
                React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/5 to-transparent" }),
                React.createElement("div", { className: "absolute inset-x-0 bottom-0 p-5" },
                    React.createElement("div", { className: "flex items-end justify-between gap-3" },
                        React.createElement("div", { className: "min-w-0" },
                            React.createElement("p", { className: "font-mono text-[10px] tracking-[0.24em] uppercase text-primary" }, "Profile"),
                            React.createElement("h3", { className: "mt-2 font-display text-[1.55rem] font-black leading-none text-foreground" }, member.name)),
                        React.createElement("span", { className: "rounded-full border border-border/70 bg-card/80 px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase text-foreground/75" }, open ? "Close" : "Open"))),
                !member.imageSrc ? (React.createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                    React.createElement("span", { className: "flex h-24 w-24 items-center justify-center rounded-[20px] text-lg font-black text-foreground/90", style: { background: initialsBg(member.name) } }, getInitials(member.name)))) : null),
            React.createElement("div", { className: "p-5" },
                React.createElement("p", { className: "font-mono text-[10px] tracking-[0.2em] uppercase text-primary" }, member.role),
                React.createElement("div", { className: "overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out " + (open ? "mt-4 max-h-44 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1") },
                    React.createElement("p", { className: "text-sm leading-relaxed text-muted-foreground" }, member.bio),
                    React.createElement("div", { className: "mt-4 flex flex-wrap gap-2" }, member.tags.map(function (tag) { return (React.createElement("span", { key: tag, className: "rounded-full border border-border bg-muted/15 px-3 py-1 text-[11px] text-muted-foreground" }, tag)); }))),
                React.createElement("div", { className: "mt-4 flex items-center justify-between border-t border-border pt-4" },
                    React.createElement("span", { className: "text-xs text-muted-foreground" }, "Hover to preview"),
                    React.createElement("span", { className: "text-xs font-medium text-foreground/75" }, open ? "Hide" : "Brief"))))));
}
function Team() {
    var navigate = react_router_1.useNavigate();
    var location = react_router_1.useLocation();
    var contactHash = react_1.useMemo(function () { return "#contact"; }, []);
    var teamAsset = function (fileName) { return "/assets/Teams/" + encodeURIComponent(fileName); };
    var MEMBERS = react_1.useMemo(function () { return [
        {
            name: "Olusegun M Adeniran",
            role: "Founder",
            bio: "Leads the company with a strategic, people-first vision focused on sustainable growth, operational clarity, and premium execution.",
            tags: ["Vision Leadership", "Growth Strategy", "Partnerships"],
            imageSrc: teamAsset("Olusegun_adeniran.jpeg")
        },
        {
            name: "David George",
            role: "Growth and Sales Manager",
            bio: "Builds strategic sales opportunities and partner relationships that keep the pipeline steady and high-value.",
            tags: ["Sales Strategy", "Partnerships", "Revenue Growth"],
            imageSrc: teamAsset("David George \nGrowth and Sales Manager.jpeg")
        },
        {
            name: "Doris Kenneth",
            role: "Editor",
            bio: "Shapes the rhythm, clarity, and emotional pacing of every final story, frame, and cut.",
            tags: ["Editing", "Story Flow", "Post Production"],
            imageSrc: teamAsset("Doris Kenneth \n\nEditor.jpeg")
        },
        {
            name: "Elizabeth Akhere",
            role: "Head of Operations",
            bio: "Keeps delivery teams organized, efficient, and resilient across every project milestone.",
            tags: ["Operations", "Project Delivery", "Team Systems"],
            imageSrc: teamAsset("Elizabeth Akhere\n\nHead of Operations.jpeg")
        },
        {
            name: "Olamide Amubieya",
            role: "HR Lead",
            bio: "Builds a strong team culture through onboarding, retention, and clear people-first systems.",
            tags: ["People Ops", "Talent", "Culture"],
            imageSrc: teamAsset("Olamide Amubieya HR Lead.jpeg")
        },
        {
            name: "Rosemary Adeoti",
            role: "Growth and Business Development Manager",
            bio: "Turns market insight and strategic outreach into sustainable opportunities and long-term partnerships.",
            tags: ["Business Development", "Growth", "Strategy"],
            imageSrc: teamAsset("Rosemary Adeoti\nGrowth and Business Development Manager.jpeg")
        },
        {
            name: "Kehinde Adeolu",
            role: "Production Manager",
            bio: "Coordinates people, timelines, and logistics to keep production moving smoothly from concept through delivery without friction.",
            tags: ["Production Planning", "Crew Coordination", "Delivery Ops"],
            imageSrc: teamAsset("Kehinde_adeolu.jpeg")
        },
    ]; }, []);
    var goToContact = function () {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(function () { return scrollToHash(contactHash); }, 80);
            return;
        }
        scrollToHash(contactHash);
    };
    return (React.createElement("div", { className: "min-h-screen bg-background text-foreground" },
        React.createElement("section", { className: "px-6 pb-12 pt-24 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]" },
                React.createElement(RevealBlock, null,
                    React.createElement("div", { className: "p-6 md:p-10 md:py-12" },
                        React.createElement("div", { className: "flex items-center gap-3" },
                            React.createElement("span", { className: "h-2 w-2 rounded-full bg-primary" }),
                            React.createElement("p", { className: "font-mono text-[10px] tracking-[0.24em] uppercase text-primary" }, "Our Team")),
                        React.createElement("h1", { className: "mt-5 font-display text-[clamp(2.5rem,5vw,4.25rem)] font-black leading-[0.95] tracking-tight text-foreground" },
                            "A disciplined crew.",
                            React.createElement("br", null),
                            "A calm operating rhythm."),
                        React.createElement("p", { className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground" }, "EchoRoom\u2019s specialists work as one accountable production unit \u2014 combining strategy, design, delivery, and communications under a single executive standard."),
                        React.createElement("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row" },
                            React.createElement("button", { onClick: goToContact, className: "inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90" },
                                "Start a project ",
                                React.createElement(lucide_react_1.ArrowRight, { size: 15 })),
                            React.createElement("a", { href: "#team", onClick: function (e) {
                                    var _a;
                                    e.preventDefault();
                                    (_a = document.querySelector("#team")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
                                }, className: "inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 text-sm tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary" }, "Meet the team")))),
                React.createElement(RevealBlock, { delayMs: 90 },
                    React.createElement("div", { className: "rounded-[18px] border border-border bg-card p-6 md:p-8" },
                        React.createElement("p", { className: "font-mono text-[10px] tracking-[0.2em] uppercase text-primary" }, "Delivery principles"),
                        React.createElement("div", { className: "mt-5 space-y-4" }, [
                            { icon: lucide_react_1.Check, title: "Systems that scale", desc: "Repeatable execution with no operational drift." },
                            { icon: lucide_react_1.BadgeCheck, title: "Enterprise-safe", desc: "Privacy-first handling through every production touchpoint." },
                            { icon: lucide_react_1.Sparkles, title: "Immersive craft", desc: "Premium execution for serious brand presence." },
                        ].map(function (item) { return (React.createElement("div", { key: item.title, className: "flex items-start gap-3 rounded-2xl border border-border/70 bg-background/50 p-3" },
                            React.createElement("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card" },
                                React.createElement(item.icon, { size: 16, className: "text-primary" })),
                            React.createElement("div", null,
                                React.createElement("div", { className: "font-display text-base font-black text-foreground" }, item.title),
                                React.createElement("div", { className: "mt-1 text-sm leading-relaxed text-muted-foreground" }, item.desc)))); })))))),
        React.createElement("section", { id: "team", className: "px-6 pb-20 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "mb-12 md:mb-14" },
                React.createElement(RevealBlock, null,
                    React.createElement("p", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-primary" }, "Specialists"),
                    React.createElement("h2", { className: "mt-4 font-display text-4xl md:text-5xl font-black leading-tight text-foreground max-w-3xl" },
                        "Built to execute.",
                        React.createElement("br", null),
                        "Designed to elevate."),
                    React.createElement("p", { className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground" }, "A focused cadre across creative systems, production, narrative, design, and reputation \u2014 aligned around a single quiet standard of delivery."))),
            React.createElement("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3" }, MEMBERS.map(function (member, index) { return (React.createElement(RevealBlock, { key: member.name, delayMs: index * 40, y: 10 },
                React.createElement(ProfileCard, { member: member }))); }))),
        React.createElement("section", { className: "border-y border-border bg-card py-16" },
            React.createElement("div", { className: "px-6 md:px-12 max-w-[1400px] mx-auto" },
                React.createElement("div", { className: "grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center" },
                    React.createElement(RevealBlock, null,
                        React.createElement("p", { className: "font-mono text-[10px] tracking-[0.22em] uppercase text-primary" }, "CTA"),
                        React.createElement("h2", { className: "mt-4 font-display text-4xl md:text-5xl font-black leading-tight text-foreground" }, "Ready for a team that ships quietly."),
                        React.createElement("p", { className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground" }, "Send a quick brief and we\u2019ll align the right specialists for your next immersive production.")),
                    React.createElement("div", { className: "flex flex-col gap-3 sm:flex-row" },
                        React.createElement(RevealBlock, { delayMs: 70 },
                            React.createElement("button", { onClick: goToContact, className: "inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/85" },
                                "Get a tailored plan ",
                                React.createElement(lucide_react_1.ArrowRight, { size: 15 }))),
                        React.createElement(RevealBlock, { delayMs: 140 },
                            React.createElement("a", { href: "#team", onClick: function (e) {
                                    var _a;
                                    e.preventDefault();
                                    (_a = document.querySelector("#team")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
                                }, className: "inline-flex items-center justify-center gap-2 border border-border bg-card px-7 py-4 text-sm font-bold tracking-wide text-foreground transition-colors hover:border-primary/50 hover:text-primary" }, "Explore bios"))))))));
}
exports["default"] = Team;
