"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var lucide_react_1 = require("lucide-react");
var ThemeToggle_1 = require("./components/theme/ThemeToggle");
var Footer_1 = require("./components/Footer");
var NAV_LINKS = [
    { label: "Home", to: "/" },
    {
        label: "Who We Are",
        to: "/about",
        children: [
            { label: "About EchooRoom", to: "/about" },
            { label: "Our Team", to: "/team" },
        ]
    },
    { label: "Services", to: "/services" },
    { label: "Entertainment", to: "/studio" },
    // { label: "Shows", to: "/shows" },
    { label: "Contact", to: "/", hash: "#contact" },
];
function Nav() {
    var _a = react_1.useState(false), scrolled = _a[0], setScrolled = _a[1];
    var _b = react_1.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var navigate = react_router_1.useNavigate();
    var location = react_router_1.useLocation();
    react_1.useEffect(function () {
        var handler = function () { return setScrolled(window.scrollY > 40); };
        window.addEventListener("scroll", handler);
        return function () { return window.removeEventListener("scroll", handler); };
    }, []);
    react_1.useEffect(function () {
        setMenuOpen(false);
    }, [location.pathname]);
    function handleNavClick(link) {
        var _a;
        if (link.hash) {
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(function () {
                    var _a;
                    (_a = document
                        .querySelector(link.hash)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                }, 80);
            }
            else {
                (_a = document
                    .querySelector(link.hash)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            }
        }
        else {
            navigate(link.to);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setMenuOpen(false);
    }
    var isHome = location.pathname === "/";
    return (React.createElement("nav", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " + (scrolled
            ? "bg-background/95 backdrop-blur border-b border-border"
            : "bg-background/70 backdrop-blur border-b border-border/0") },
        React.createElement("div", { className: "max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between" },
            React.createElement("button", { onClick: function () {
                    navigate("/");
                    window.scrollTo({ top: 0 });
                }, className: "flex items-center gap-0 select-none" },
                React.createElement("img", { src: "/assets/echoroom-logo.png", alt: "EchoRoom", className: "h-10 w-auto md:h-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]", style: { filter: "brightness(0) invert(1)" } })),
            React.createElement("div", { className: "hidden md:flex items-center gap-10" }, NAV_LINKS.map(function (link) {
                var isActive = !link.hash && location.pathname === link.to;
                if (link.children) {
                    return (React.createElement("div", { key: link.label, className: "relative group" },
                        React.createElement("button", { onClick: function () { return handleNavClick(link); }, className: "text-sm tracking-wide transition-colors duration-200 flex items-center gap-2 " + (isActive
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground") },
                            link.label,
                            React.createElement(lucide_react_1.ChevronDown, { size: 14, className: "text-muted-foreground transition-transform duration-200 group-hover:-rotate-180 group-hover:text-foreground" })),
                        React.createElement("div", { className: "absolute left-0 mt-3 w-44 bg-background border border-border rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 z-50" }, link.children.map(function (child) { return (React.createElement("button", { key: child.label, onClick: function () { return handleNavClick(child); }, className: "w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background/50" }, child.label)); }))));
                }
                return (React.createElement("button", { key: link.label, onClick: function () { return handleNavClick(link); }, className: "text-sm tracking-wide transition-colors duration-200 " + (isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground") }, link.label));
            })),
            React.createElement("div", { className: "hidden md:block" },
                React.createElement("div", { className: "flex items-center gap-6" },
                    React.createElement(ThemeToggle_1["default"], null),
                    React.createElement("button", { onClick: function () {
                            return handleNavClick({ label: "Contact", to: "/", hash: "#contact" });
                        }, className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold tracking-wide hover:bg-primary/85 transition-colors" },
                        "Start a project ",
                        React.createElement(lucide_react_1.ArrowRight, { size: 14 })))),
            React.createElement("button", { className: "md:hidden text-foreground p-1", onClick: function () { return setMenuOpen(!menuOpen); }, "aria-label": "Toggle menu" }, menuOpen ? React.createElement(lucide_react_1.X, { size: 22 }) : React.createElement(lucide_react_1.Menu, { size: 22 }))),
        menuOpen && (React.createElement("div", { className: "md:hidden bg-background/70 backdrop-blur border-b border-border px-6 pb-8 pt-4 flex flex-col gap-6" },
            React.createElement(ThemeToggle_1["default"], null),
            NAV_LINKS.map(function (link) { return (React.createElement("div", { key: link.label },
                React.createElement("button", { onClick: function () { return handleNavClick(link); }, className: "text-left text-2xl font-display font-black text-foreground hover:text-primary transition-colors w-full" }, link.label),
                link.children && (React.createElement("div", { className: "pl-4 mt-2 flex flex-col gap-2" }, link.children.map(function (child) { return (React.createElement("button", { key: child.label, onClick: function () { return handleNavClick(child); }, className: "text-left text-lg font-display font-bold text-foreground/80 hover:text-primary transition-colors" }, child.label)); }))))); }),
            React.createElement("button", { onClick: function () {
                    return handleNavClick({ label: "Contact", to: "/", hash: "#contact" });
                }, className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-bold tracking-wide w-fit mt-2" },
                "Start a project ",
                React.createElement(lucide_react_1.ArrowRight, { size: 14 }))))));
}
function Layout() {
    return (React.createElement("div", { className: "bg-background text-foreground min-h-screen", style: { fontFamily: "'Poppins', sans-serif" } },
        React.createElement("style", null, "\n        .font-display { font-family: 'Poppins', sans-serif; }\n        .font-mono    { font-family: 'DM Mono', monospace; }\n      "),
        React.createElement(Nav, null),
        React.createElement(react_router_1.Outlet, null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Layout;
