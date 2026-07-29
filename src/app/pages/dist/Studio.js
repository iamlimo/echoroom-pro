"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
// Videos
var VIDEOS = [
    {
        id: "v1",
        title: "Midnight Studio Session",
        artist: "Adekunle Gold",
        type: "Live Session",
        duration: "42:18",
        year: "2024",
        thumb: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=675&fit=crop&auto=format",
        alt: "Adekunle Gold studio session",
        featured: true,
        description: "An intimate late-night session recorded live at EchooRoom Studio. Three cameras, one take, zero edits."
    },
];
// Shows
var SHOWS = [
    {
        id: "s1",
        title: "The Creative Roundtable",
        category: "Interview",
        episode: "Ep. 24",
        guest: "Falz & Simi",
        host: "Kemi Adeyemi",
        duration: "1:02:44",
        date: "Nov 28, 2024",
        thumb: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop&auto=format",
        alt: "Creative Roundtable episode",
        excerpt: "Falz and Simi sit down with Kemi Adeyemi to discuss creative independence, the business of music, and why Nigerian artists must own their masters.",
        featured: true,
        "new": true
    },
];
var FILTERS_V = ["All", "Live Session", "Performance", "Special", "Behind The Scenes"];
var FILTERS_S = ["All", "Interview", "Podcast", "Programme", "Panel"];
var CATEGORY_ICONS = {
    Interview: lucide_react_1.Mic,
    Podcast: lucide_react_1.Radio,
    Programme: lucide_react_1.Tv,
    Panel: lucide_react_1.Users
};
var CATEGORY_COLORS = {
    Interview: "text-amber-400",
    Podcast: "text-emerald-400",
    Programme: "text-sky-400",
    Panel: "text-violet-400"
};
// Simple Featured video player (kept lightweight)
function FeaturedPlayer(_a) {
    var video = _a.video;
    var _b = react_1.useState(false), playing = _b[0], setPlaying = _b[1];
    var _c = react_1.useState(false), muted = _c[0], setMuted = _c[1];
    var _d = react_1.useState(0), progress = _d[0], setProgress = _d[1];
    return (React.createElement("div", { className: "relative w-full aspect-video bg-black overflow-hidden group cursor-pointer" },
        React.createElement("img", { src: video.thumb, alt: video.alt, className: "w-full h-full object-cover transition-all duration-700 " + (playing ? "scale-105" : "scale-100"), style: { filter: playing ? "brightness(0.55)" : "brightness(0.75)" } }),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" }),
        React.createElement("button", { onClick: function () { return setPlaying(!playing); }, className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 " + (playing ? "opacity-0 scale-75" : "opacity-100 scale-100"), "aria-label": playing ? "Pause" : "Play" },
            React.createElement("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200" }, playing ? React.createElement(lucide_react_1.Pause, { size: 24, className: "text-primary-foreground" }) : React.createElement(lucide_react_1.Play, { size: 24, className: "text-primary-foreground ml-1 fill-current" }))),
        React.createElement("div", { className: "absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-6 md:pb-8" },
            React.createElement("div", { className: "w-full h-0.5 bg-white/20 mb-5 cursor-pointer relative" },
                React.createElement("div", { className: "h-full bg-primary", style: { width: progress + "%" } })),
            React.createElement("div", { className: "flex items-end justify-between" },
                React.createElement("div", null,
                    React.createElement("p", { className: "font-mono text-[10px] text-primary tracking-widest uppercase mb-1.5" }, video.type),
                    React.createElement("h2", { className: "font-display text-xl md:text-3xl font-black text-white leading-tight" }, video.title),
                    React.createElement("p", { className: "text-white/60 text-sm mt-1" }, video.artist)),
                React.createElement("div", { className: "flex items-center gap-4" },
                    React.createElement("span", { className: "font-mono text-xs text-white/60" }, video.duration),
                    React.createElement("button", { onClick: function () { return setMuted(!muted); }, className: "text-white/60 hover:text-white transition-colors", "aria-label": "Toggle mute" }, muted ? React.createElement(lucide_react_1.VolumeX, { size: 16 }) : React.createElement(lucide_react_1.Volume2, { size: 16 })),
                    React.createElement("button", { className: "text-white/60 hover:text-white transition-colors", "aria-label": "Fullscreen" },
                        React.createElement(lucide_react_1.Maximize2, { size: 16 })))))));
}
function VideoCard(_a) {
    var video = _a.video, onSelect = _a.onSelect, active = _a.active;
    var _b = react_1.useState(false), hovered = _b[0], setHovered = _b[1];
    return (React.createElement("button", { className: "group text-left w-full transition-all duration-200 " + (active ? "opacity-100" : "opacity-80 hover:opacity-100"), onClick: onSelect, onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); } },
        React.createElement("div", { className: "relative aspect-video overflow-hidden bg-muted mb-4" },
            React.createElement("img", { src: video.thumb, alt: video.alt, className: "w-full h-full object-cover transition-all duration-500 " + (hovered ? "scale-105 brightness-75" : "scale-100 brightness-60") }),
            React.createElement("div", { className: "absolute inset-0 flex items-center justify-center transition-opacity duration-200 " + (hovered ? "opacity-100" : "opacity-0") },
                React.createElement("div", { className: "w-11 h-11 rounded-full bg-primary flex items-center justify-center" },
                    React.createElement(lucide_react_1.Play, { size: 14, className: "text-primary-foreground fill-current ml-0.5" }))),
            React.createElement("div", { className: "absolute bottom-2 right-2 bg-black/80 px-2 py-0.5" },
                React.createElement("span", { className: "font-mono text-[10px] text-white tracking-wide" }, video.duration)),
            active && React.createElement("div", { className: "absolute inset-0 border-2 border-primary pointer-events-none" })),
        React.createElement("div", { className: "flex items-start justify-between gap-2" },
            React.createElement("div", { className: "min-w-0" },
                React.createElement("p", { className: "font-mono text-[9px] text-primary tracking-widest uppercase mb-1" }, video.type),
                React.createElement("h3", { className: "font-display font-black text-sm leading-tight truncate transition-colors " + (hovered ? "text-primary" : "text-foreground") }, video.title),
                React.createElement("p", { className: "text-muted-foreground text-xs mt-0.5" },
                    video.artist,
                    " \u00B7 ",
                    video.year)),
            React.createElement(lucide_react_1.ArrowUpRight, { size: 14, className: "shrink-0 mt-0.5 transition-all duration-200 " + (hovered ? "text-primary" : "text-muted-foreground opacity-0 group-hover:opacity-100") }))));
}
function FeaturedShow(_a) {
    var show = _a.show;
    var Icon = CATEGORY_ICONS[show.category];
    return (React.createElement("div", null,
        React.createElement("div", { className: "relative aspect-[16/7] overflow-hidden bg-muted mb-6" },
            React.createElement("img", { src: show.thumb, alt: show.alt, className: "w-full h-full object-cover brightness-40" }),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" }),
            React.createElement("div", { className: "absolute bottom-0 left-0 p-8 md:p-10 max-w-2xl" },
                React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                    show["new"] && (React.createElement("span", { className: "bg-primary text-primary-foreground font-mono text-[9px] tracking-widest uppercase px-2.5 py-1" }, "New")),
                    React.createElement("span", { className: "flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase " + CATEGORY_COLORS[show.category] },
                        React.createElement(Icon, { size: 11 }),
                        " ",
                        show.category),
                    React.createElement("span", { className: "font-mono text-[10px] text-white/40 tracking-wide" }, show.episode)),
                React.createElement("h2", { className: "font-display text-2xl md:text-4xl font-black text-white leading-tight mb-2" }, show.title),
                React.createElement("p", { className: "text-white/60 text-sm" },
                    "with ",
                    show.guest,
                    " \u00B7 hosted by ",
                    show.host)),
            React.createElement("div", { className: "absolute top-6 right-6 flex items-center gap-1.5 bg-black/60 px-3 py-1.5" },
                React.createElement(lucide_react_1.Clock, { size: 11, className: "text-white/60" }),
                React.createElement("span", { className: "font-mono text-[10px] text-white/60 tracking-wide" }, show.duration))),
        React.createElement("p", { className: "text-muted-foreground leading-relaxed max-w-3xl" }, show.excerpt)));
}
function ShowCard(_a) {
    var show = _a.show;
    return (React.createElement("article", { className: "group cursor-pointer" },
        React.createElement("div", { className: "relative aspect-video overflow-hidden bg-muted mb-4" },
            React.createElement("img", { src: show.thumb, alt: show.alt, className: "w-full h-full object-cover brightness-60" }),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
            React.createElement("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" },
                React.createElement("div", { className: "w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl" },
                    React.createElement(lucide_react_1.Play, { size: 14, className: "text-primary-foreground fill-current ml-0.5" }))),
            React.createElement("div", { className: "absolute bottom-3 left-3 right-3 flex items-end justify-between" },
                React.createElement("span", { className: "flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase bg-black/70 px-2 py-1 text-amber-400" },
                    React.createElement(lucide_react_1.Mic, { size: 9 }),
                    " Interview"),
                React.createElement("span", { className: "font-mono text-[10px] text-white/70 bg-black/70 px-2 py-1" }, show.duration))),
        React.createElement("div", null,
            React.createElement("div", { className: "flex items-center justify-between mb-2" },
                React.createElement("span", { className: "font-mono text-[9px] text-muted-foreground tracking-widest" },
                    show.episode,
                    " \u00B7 ",
                    show.date),
                React.createElement(lucide_react_1.ArrowUpRight, { size: 13, className: "transition-all duration-200 text-muted-foreground opacity-0 group-hover:opacity-100" })),
            React.createElement("h3", { className: "font-display font-black text-base leading-tight mb-1 text-foreground" }, show.title),
            React.createElement("p", { className: "text-muted-foreground text-xs mb-2" },
                "with ",
                React.createElement("span", { className: "text-foreground" }, show.guest)),
            React.createElement("p", { className: "text-muted-foreground text-xs leading-relaxed line-clamp-2" }, show.excerpt))));
}
function Studio() {
    var _a;
    var _b = react_1.useState("All"), filterV = _b[0], setFilterV = _b[1];
    var _c = react_1.useState(VIDEOS[0]), featured = _c[0], setFeatured = _c[1];
    var _d = react_1.useState("All"), filterS = _d[0], setFilterS = _d[1];
    var featuredShow = (_a = SHOWS.find(function (s) { return s.featured; })) !== null && _a !== void 0 ? _a : SHOWS[0];
    var filteredVideos = filterV === "All" ? VIDEOS : VIDEOS.filter(function (v) { return v.type === filterV; });
    var restShows = SHOWS.filter(function (s) { return !s.featured; });
    var filteredShows = filterS === "All" ? restShows : restShows.filter(function (s) { return s.category === filterS; });
    return (React.createElement("div", { className: "min-h-screen bg-background" },
        React.createElement("div", { className: "pt-24 pb-10 px-6 md:px-12 max-w-[1400px] mx-auto" },
            React.createElement("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" },
                React.createElement("div", null,
                    React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.22em] uppercase mb-3" }, "EchooRoom Studio"),
                    React.createElement("h1", { className: "font-display text-4xl md:text-6xl font-black leading-tight text-foreground" }, "The Studio"),
                    React.createElement("p", { className: "text-muted-foreground mt-3 max-w-md leading-relaxed" }, "Recorded artist sessions, live performances, specials, and shows \u2014 captured in cinematic quality from our state-of-the-art studios.")),
                React.createElement("div", { className: "flex flex-wrap gap-2" }, FILTERS_V.map(function (f) { return (React.createElement("button", { key: f, onClick: function () { return setFilterV(f); }, className: "px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-200 " + (filterV === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground") }, f)); })))),
        React.createElement("div", { className: "px-6 md:px-12 max-w-[1400px] mx-auto pb-24" },
            React.createElement("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 items-start" },
                React.createElement("div", { className: "sticky top-20" },
                    React.createElement(FeaturedPlayer, { video: featured }),
                    React.createElement("div", { className: "mt-5 flex items-start gap-6" },
                        React.createElement("div", { className: "flex-1" },
                            React.createElement("div", { className: "flex items-center gap-3 mb-2" },
                                React.createElement("span", { className: "font-mono text-[9px] text-primary tracking-widest uppercase border border-primary/30 px-2 py-0.5" }, featured.type),
                                React.createElement("span", { className: "flex items-center gap-1 font-mono text-[10px] text-muted-foreground" },
                                    React.createElement(lucide_react_1.Clock, { size: 11 }),
                                    " ",
                                    featured.duration),
                                React.createElement("span", { className: "font-mono text-[10px] text-muted-foreground" }, featured.year)),
                            React.createElement("p", { className: "text-muted-foreground text-sm leading-relaxed" }, featured.description)))),
                React.createElement("div", { className: "space-y-6" },
                    React.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-border" },
                        React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase" },
                            filteredVideos.length,
                            " ",
                            filterV === "All" ? "videos" : filterV.toLowerCase() + "s"),
                        React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase" }, "Latest first")),
                    filteredVideos.map(function (v) { return (React.createElement(VideoCard, { key: v.id, video: v, active: featured.id === v.id, onSelect: function () { return setFeatured(v); } })); })))),
        React.createElement("div", { className: "px-6 md:px-12 max-w-[1400px] mx-auto pb-24 border-t border-border pt-16" },
            React.createElement("div", { className: "flex items-end justify-between mb-10" },
                React.createElement("h2", { className: "font-display text-3xl md:text-4xl font-black text-foreground" }, "All Sessions & Shows"),
                React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase hidden md:block" },
                    VIDEOS.length + SHOWS.length,
                    " recordings")),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" },
                React.createElement("div", { className: "lg:col-span-2" },
                    React.createElement("div", { className: "mb-6" },
                        React.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-border mb-6" },
                            React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase" },
                                "Shows \u2014 ",
                                filteredShows.length,
                                " results"),
                            React.createElement("div", { className: "flex flex-wrap gap-2" }, FILTERS_S.map(function (f) { return (React.createElement("button", { key: f, onClick: function () { return setFilterS(f); }, className: "px-4 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-200 " + (filterS === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground") }, f)); }))),
                        featuredShow && (React.createElement("div", { className: "mb-8" },
                            React.createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-4" }, "Latest episode"),
                            React.createElement(FeaturedShow, { show: featuredShow }))),
                        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" }, filteredShows.map(function (s) { return (React.createElement(ShowCard, { key: s.id, show: s })); })),
                        filteredShows.length === 0 && (React.createElement("div", { className: "py-24 text-center" },
                            React.createElement("p", { className: "font-display text-2xl font-black text-muted-foreground" }, "No episodes yet"),
                            React.createElement("p", { className: "text-muted-foreground text-sm mt-2" }, "Check back soon."))))),
                React.createElement("div", { className: "" },
                    React.createElement("div", { className: "border-t border-border bg-card pt-6" },
                        React.createElement("div", { className: "px-6 md:px-0" },
                            React.createElement("p", { className: "font-mono text-xs text-primary tracking-[0.2em] uppercase mb-2" }, "Never miss an episode"),
                            React.createElement("h3", { className: "font-display text-xl font-black text-foreground mb-2" }, "Subscribe to EchooRoom Shows"),
                            React.createElement("p", { className: "text-muted-foreground text-sm mb-4" }, "New interviews, podcasts, and programmes every week."),
                            React.createElement("div", { className: "flex flex-col sm:flex-row gap-3" }, ['Spotify', 'Apple Podcasts', 'YouTube'].map(function (p) { return (React.createElement("button", { key: p, className: "px-5 py-3 border border-border text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors font-mono tracking-wide text-[11px] uppercase" }, p)); })))))))));
}
exports["default"] = Studio;
