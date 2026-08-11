"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var SHOWS = [
    { id: "live-leostaytrill", title: "LEOSTAYTRILL ft. Shoday", kind: "Live sessions", label: "Live session 01", date: "Jun 08, 2026", duration: "04:12", excerpt: "A live performance shaped by shadow, rhythm, and intimate cinematic atmosphere.", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&h=760&fit=crop&auto=format", href: "https://www.youtube.com/watch?v=lxo0l5Mow_4&list=RDlxo0l5Mow_4&start_radio=1", featured: true, "new": true },
    { id: "special-ycee", title: "YCEE — Lemonade", kind: "Specials", label: "Studio special", date: "May 24, 2026", duration: "03:48", excerpt: "A bold, stripped-back performance captured in the EchooRoom light.", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=900&h=600&fit=crop&auto=format", href: "https://www.youtube.com/watch?v=JpJSbZEpWew", "new": true },
    { id: "bts-cut-room", title: "The Cut Room Diaries", kind: "Behind the scenes", label: "Field notes 04", date: "May 12, 2026", excerpt: "A look inside the room where every frame is tuned for sound and shadow.", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&h=600&fit=crop&auto=format", href: "https://www.youtube.com/watch?v=VYOjWnS4cMY" },
    { id: "podcast-synths", title: "Synths & Sovereignty", kind: "Podcast", label: "EchoFreq · Ep. 89", guest: "with Odunsi The Engine", date: "May 02, 2026", duration: "58:12", excerpt: "On influence, ritual, creative blocks, and the pressure of staying iconic.", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&h=600&fit=crop&auto=format", href: "https://www.youtube.com/watch?v=F7rHps6VWIU", "new": true },
    { id: "story-attention", title: "Attention is the new currency", kind: "Stories", label: "The EchooRoom journal", date: "Apr 18, 2026", excerpt: "Why the most valuable media brands are building trust before they build reach.", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&h=600&fit=crop&auto=format", href: "/stories/attention-is-the-new-currency" },
    { id: "interview-roundtable", title: "The Creative Roundtable", kind: "Interviews", label: "Conversation 24", guest: "with Falz & Simi", date: "Apr 06, 2026", duration: "1:02:44", excerpt: "A conversation on creative independence, the business of music, and owning your masters.", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&h=600&fit=crop&auto=format", href: "https://www.youtube.com/watch?v=7QU9mvNHnKg" },
];
var CATEGORIES = [
    { label: "Live sessions", icon: lucide_react_1.Radio, color: "text-rose-400" }, { label: "Specials", icon: lucide_react_1.Sparkles, color: "text-amber-400" },
    { label: "Behind the scenes", icon: lucide_react_1.Video, color: "text-sky-400" }, { label: "Podcast", icon: lucide_react_1.Headphones, color: "text-emerald-400" },
    { label: "Stories", icon: lucide_react_1.BookOpen, color: "text-violet-400" }, { label: "Interviews", icon: lucide_react_1.Mic2, color: "text-orange-400" },
];
function CategoryIcon(_a) {
    var _b, _c;
    var kind = _a.kind, _d = _a.className, className = _d === void 0 ? "" : _d;
    var category = CATEGORIES.find(function (_a) {
        var label = _a.label;
        return label === kind;
    });
    var Icon = (_b = category === null || category === void 0 ? void 0 : category.icon) !== null && _b !== void 0 ? _b : lucide_react_1.Video;
    return React.createElement(Icon, { className: ((_c = category === null || category === void 0 ? void 0 : category.color) !== null && _c !== void 0 ? _c : "text-primary") + " " + className });
}
function ShowCard(_a) {
    var show = _a.show;
    var external = show.href.startsWith("http");
    return (React.createElement("a", { href: show.href, target: external ? "_blank" : undefined, rel: external ? "noreferrer" : undefined, className: "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" },
        React.createElement("div", { className: "relative aspect-[4/3] overflow-hidden rounded-sm bg-muted" },
            React.createElement("img", { src: show.image, alt: show.title + " \u2014 " + show.kind, className: "h-full w-full object-cover grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0", loading: "lazy" }),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" }),
            React.createElement("div", { className: "absolute left-4 top-4 flex items-center gap-2" },
                show["new"] && React.createElement("span", { className: "bg-primary px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-primary-foreground" }, "New"),
                React.createElement("span", { className: "flex items-center gap-1.5 bg-black/55 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-white/80 backdrop-blur-sm" },
                    React.createElement(CategoryIcon, { kind: show.kind, className: "size-3" }),
                    show.kind)),
            React.createElement("div", { className: "absolute bottom-4 left-4 right-4 flex items-end justify-between" },
                React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-white/60" }, show.label),
                show.duration && React.createElement("span", { className: "flex items-center gap-1 bg-black/55 px-2 py-1 font-mono text-[10px] text-white/75" },
                    React.createElement(lucide_react_1.Clock3, { size: 11 }),
                    show.duration)),
            React.createElement("span", { className: "absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100" },
                React.createElement("span", { className: "flex size-12 scale-75 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition duration-300 group-hover:scale-100" },
                    React.createElement(lucide_react_1.Play, { size: 16, fill: "currentColor" })))),
        React.createElement("div", { className: "pt-4" },
            React.createElement("div", { className: "mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground" },
                React.createElement("span", null, show.date),
                React.createElement(lucide_react_1.ArrowUpRight, { size: 14, className: "opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" })),
            React.createElement("h3", { className: "font-display text-xl font-black leading-tight transition-colors group-hover:text-primary" }, show.title),
            show.guest && React.createElement("p", { className: "mt-1 text-sm text-muted-foreground" }, show.guest),
            React.createElement("p", { className: "mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground" }, show.excerpt))));
}
function Shows() {
    var _a;
    var _b = react_1.useState("All"), activeCategory = _b[0], setActiveCategory = _b[1];
    var featured = (_a = SHOWS.find(function (show) { return show.featured; })) !== null && _a !== void 0 ? _a : SHOWS[0];
    var episodes = SHOWS.filter(function (show) { return !show.featured && (activeCategory === "All" || show.kind === activeCategory); });
    var featuredExternal = featured.href.startsWith("http");
    return (React.createElement("main", { className: "min-h-screen bg-background" },
        React.createElement("header", { className: "mx-auto max-w-[1400px] px-6 pb-12 pt-28 md:px-12 md:pt-36" },
            React.createElement("div", { className: "max-w-3xl" },
                React.createElement("p", { className: "mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary" }, "EchooRoom / Media library"),
                React.createElement("h1", { className: "font-display text-5xl font-black leading-[0.95] tracking-tight md:text-8xl" },
                    "Experience worth",
                    React.createElement("br", null),
                    React.createElement("span", { className: "text-muted-foreground/45" }, "staying for.")),
                React.createElement("p", { className: "mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg" }, "Live sessions, honest conversations, and the stories behind the work. Explore everything we make, all in one room.")),
            React.createElement("div", { className: "mt-14 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6" }, CATEGORIES.map(function (_a) {
                var label = _a.label, Icon = _a.icon, color = _a.color;
                return React.createElement("button", { key: label, onClick: function () { return setActiveCategory(label); }, className: "flex items-center gap-3 bg-background px-4 py-4 text-left transition hover:bg-card " + (activeCategory === label ? "ring-1 ring-inset ring-primary" : "") },
                    React.createElement(Icon, { size: 16, className: color }),
                    React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground" }, label));
            }))),
        React.createElement("section", { className: "border-y border-border bg-card/40" },
            React.createElement("div", { className: "mx-auto max-w-[1400px] px-6 py-10 md:px-12 md:py-14" },
                React.createElement("div", { className: "mb-6 flex items-center justify-between" },
                    React.createElement("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground" }, "Now playing- This Week"),
                    React.createElement("span", { className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary" },
                        React.createElement("span", { className: "size-1.5 animate-pulse rounded-full bg-primary" }),
                        "Featured")),
                React.createElement("a", { href: featured.href, target: featuredExternal ? "_blank" : undefined, rel: featuredExternal ? "noreferrer" : undefined, className: "group grid overflow-hidden bg-[#0d1117] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" },
                    React.createElement("div", { className: "relative min-h-[300px] overflow-hidden" },
                        React.createElement("img", { src: featured.image, alt: featured.title, className: "h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" }),
                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" }),
                        React.createElement("div", { className: "absolute bottom-6 left-6 md:bottom-10 md:left-10" },
                            React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-primary" }, featured.label),
                            React.createElement("h2", { className: "mt-3 max-w-lg font-display text-3xl font-black md:text-5xl" }, featured.title)),
                        React.createElement("span", { className: "absolute right-6 top-6 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-110" },
                            React.createElement(lucide_react_1.Play, { size: 16, fill: "currentColor" }))),
                    React.createElement("div", { className: "flex flex-col justify-between p-6 md:p-10" },
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-sm leading-relaxed text-white/60 md:text-base" }, featured.excerpt),
                            React.createElement("p", { className: "mt-6 font-mono text-[10px] uppercase tracking-widest text-white/40" },
                                featured.date,
                                " \u00B7 ",
                                featured.duration)),
                        React.createElement("span", { className: "mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary" },
                            "Watch full session ",
                            React.createElement(lucide_react_1.ArrowUpRight, { size: 14 })))))),
        React.createElement("section", { className: "mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24" },
            React.createElement("div", { className: "mb-10 flex flex-col justify-between gap-5 border-b border-border pb-6 sm:flex-row sm:items-end" },
                React.createElement("div", null,
                    React.createElement("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-primary" }, "The archive"),
                    React.createElement("h2", { className: "mt-2 font-display text-3xl font-black md:text-4xl" }, "Browse the room")),
                React.createElement("div", { className: "flex flex-wrap gap-2" },
                    React.createElement("button", { onClick: function () { return setActiveCategory("All"); }, className: "px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition " + (activeCategory === "All" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground") }, "All"),
                    CATEGORIES.map(function (_a) {
                        var label = _a.label;
                        return React.createElement("button", { key: label, onClick: function () { return setActiveCategory(label); }, className: "hidden px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition sm:block " + (activeCategory === label ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground") }, label);
                    }))),
            React.createElement("p", { className: "mb-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground" },
                episodes.length,
                " ",
                episodes.length === 1 ? "story" : "stories",
                " in ",
                activeCategory === "All" ? "the archive" : activeCategory),
            episodes.length ? React.createElement("div", { className: "grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" }, episodes.map(function (show) { return React.createElement(ShowCard, { key: show.id, show: show }); })) : React.createElement("div", { className: "border border-dashed border-border py-24 text-center" },
                React.createElement("p", { className: "font-display text-2xl font-black" }, "Nothing here yet."),
                React.createElement("p", { className: "mt-2 text-sm text-muted-foreground" },
                    "Check back soon for new ",
                    activeCategory.toLowerCase(),
                    ".")))));
}
exports["default"] = Shows;
