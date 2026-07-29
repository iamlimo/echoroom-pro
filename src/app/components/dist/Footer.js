"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Footer() {
    return (react_1["default"].createElement("footer", { className: "border-t border-border py-12 px-6 md:px-12 max-w-[1400px] mx-auto" },
        react_1["default"].createElement("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-8" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "flex items-center gap-0 select-none" },
                    react_1["default"].createElement("img", { src: "/assets/echoroom-logo.png", alt: "EchoRoom", className: "h-10 w-auto md:h-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]", style: { filter: "brightness(0) invert(1)" } })),
                react_1["default"].createElement("p", { className: "text-xs text-muted-foreground mt-2 font-mono tracking-wide" }, "EchooRoom Studio Ltd")),
            react_1["default"].createElement("div", { className: "flex flex-wrap gap-8" },
                react_1["default"].createElement("a", { href: "/about", className: "text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide" }, "About"),
                react_1["default"].createElement("a", { href: "/services", className: "text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide" }, "Services"),
                react_1["default"].createElement("a", { href: "/studio", className: "text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide" }, "Studio"),
                react_1["default"].createElement("a", { href: "/shows", className: "text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide" }, "Shows"),
                react_1["default"].createElement("a", { href: "/#contact", className: "text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide" }, "Contact")),
            react_1["default"].createElement("a", { href: "mailto:Echooroom@starksltd.com", className: "font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide" }, "Echooroom@starksltd.com")),
        react_1["default"].createElement("div", { className: "mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2" },
            react_1["default"].createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-wide" }, "\u00A9 2026 EchooRoom Studio Ltd. All rights reserved."),
            react_1["default"].createElement("p", { className: "font-mono text-[10px] text-muted-foreground tracking-wide" }, "Strategic Capability Document \u00B7 Enterprise Profile & Service Catalogue"))));
}
exports["default"] = Footer;
