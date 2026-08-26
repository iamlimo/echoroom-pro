"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var showCategories_1 = require("../data/showCategories");
var CATEGORIES = [
    { label: "Live sessions", icon: lucide_react_1.Radio },
    { label: "Specials", icon: lucide_react_1.Sparkles },
    { label: "Behind the scenes", icon: lucide_react_1.Video },
    { label: "Podcast", icon: lucide_react_1.Headphones },
    { label: "Stories", icon: lucide_react_1.BookOpen },
    { label: "Interviews", icon: lucide_react_1.Mic2 },
];
function CategoryCard(_a) {
    var label = _a.label;
    var items = showCategories_1.SHOW_CATEGORY_DATA[label];
    var representative = items[0];
    var count = items.length;
    return (React.createElement("a", { href: "/shows?category=" + encodeURIComponent(label), className: "group relative h-40 overflow-hidden rounded-xl shadow-md ring-1 ring-inset ring-border" },
        React.createElement("img", { src: representative.thumbLink, alt: label, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
        React.createElement("div", { className: "absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" }),
        React.createElement("div", { className: "relative z-10 flex h-full items-end p-4" },
            React.createElement("div", null,
                React.createElement("span", { className: "font-mono text-[10px] uppercase tracking-widest text-white/90" }, label),
                React.createElement("p", { className: "mt-1 text-sm text-white/70" },
                    count,
                    " ",
                    count === 1 ? "item" : "items")))));
}
function Studio() {
    var categories = react_1.useMemo(function () { return CATEGORIES; }, []);
    return (React.createElement("main", { className: "min-h-screen bg-background" },
        React.createElement("header", { className: "mx-auto max-w-4xl px-6 py-20 text-center" },
            React.createElement("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-primary" }, "EchooRoom / Studio"),
            React.createElement("h1", { className: "mt-4 font-display text-4xl font-black" }, "Explore categories"),
            React.createElement("p", { className: "mt-3 text-sm text-muted-foreground" }, "Minimal, clickable previews of the room\u2019s content.")),
        React.createElement("section", { className: "mx-auto max-w-6xl px-6 pb-24" },
            React.createElement("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" }, categories.map(function (_a) {
                var label = _a.label;
                return (React.createElement(CategoryCard, { key: label, label: label }));
            })))));
}
exports["default"] = Studio;
