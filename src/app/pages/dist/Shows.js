"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var lucide_react_1 = require("lucide-react");
var gsap_1 = require("gsap");
var THREE = require("three");
var showCategories_1 = require("../data/showCategories");
var normalizeCategory = function (value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};
var toCanonicalCategory = function (value) {
    var _a;
    var normalized = normalizeCategory(value);
    if (!normalized)
        return null;
    var directMatch = showCategories_1.CONTENT_KINDS.find(function (category) { return normalizeCategory(category) === normalized; });
    if (directMatch)
        return directMatch;
    var aliases = {
        "live session": "Live sessions",
        special: "Specials",
        "behind the scene": "Behind the scenes",
        story: "Stories",
        interview: "Interviews"
    };
    return (_a = aliases[normalized]) !== null && _a !== void 0 ? _a : null;
};
function ShowsPage() {
    var _a, _b, _c, _d;
    var location = react_router_1.useLocation();
    var selectedCategory = react_1.useMemo(function () {
        var rawValue = new URLSearchParams(location.search).get("category");
        if (!rawValue)
            return null;
        return toCanonicalCategory(rawValue);
    }, [location.search]);
    var slidesForDisplay = react_1.useMemo(function () {
        if (selectedCategory) {
            return showCategories_1.SHOW_CATEGORY_DATA[selectedCategory];
        }
        return showCategories_1.ALL_SHOWS;
    }, [selectedCategory]);
    var _e = react_1.useState(0), activeSlide = _e[0], setActiveSlide = _e[1];
    var _f = react_1.useState(true), loading = _f[0], setLoading = _f[1];
    var _g = react_1.useState(0), progress = _g[0], setProgress = _g[1];
    var _h = react_1.useState(true), muted = _h[0], setMuted = _h[1];
    var _j = react_1.useState(false), isThrottled = _j[0], setIsThrottled = _j[1];
    var canvasRef = react_1.useRef(null);
    var videoRef = react_1.useRef(null);
    var touchStartY = react_1.useRef(null);
    react_1.useEffect(function () {
        setActiveSlide(0);
    }, [selectedCategory]);
    react_1.useEffect(function () {
        var timeline = gsap_1["default"].timeline({ defaults: { ease: "power3.inOut" } });
        var duration = 4800;
        var current = 0;
        var interval = window.setInterval(function () {
            current = Math.min(100, current + Math.floor(Math.random() * 7) + 4);
            setProgress(current);
            if (current >= 100) {
                window.clearInterval(interval);
                timeline.to(".studio-loader", {
                    yPercent: -110,
                    opacity: 0,
                    duration: 1.4
                });
                timeline.fromTo(".studio-shell", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1.3, clearProps: "all" }, "<0.35");
                window.setTimeout(function () { return setLoading(false); }, 500);
            }
        }, duration / 12);
        return function () {
            window.clearInterval(interval);
        };
    }, []);
    react_1.useEffect(function () {
        var video = videoRef.current;
        if (!video)
            return;
        video.pause();
        video.load();
        void video.play()["catch"](function () {
            // Autoplay fallback handled by muted attribute
        });
        gsap_1["default"].fromTo(".slide-meta", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        gsap_1["default"].fromTo(".category-card", { opacity: 0, x: 18 }, { opacity: 1, x: 0, duration: 0.75, stagger: 0.05, ease: "power3.out" });
    }, [activeSlide, selectedCategory]);
    react_1.useEffect(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(55, 1, 0.1, 20);
        camera.position.z = 3;
        var particleCount = 120;
        var positions = new Float32Array(particleCount * 3);
        var sizes = new Float32Array(particleCount);
        for (var i = 0; i < particleCount; i += 1) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 4;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
            sizes[i] = Math.random() * 2 + 1;
        }
        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
        var material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.03,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        });
        var points = new THREE.Points(geometry, material);
        scene.add(points);
        var clock = new THREE.Clock();
        var frameId = 0;
        var resize = function () {
            var width = canvas.clientWidth;
            var height = canvas.clientHeight;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        var animate = function () {
            var time = clock.getElapsedTime();
            var positionsArray = geometry.attributes.position.array;
            for (var i = 0; i < particleCount; i += 1) {
                var idx = i * 3;
                positionsArray[idx + 0] += Math.sin(time + i * 0.1) * 0.0008;
                positionsArray[idx + 1] += Math.cos(time + i * 0.12) * 0.0009;
                positionsArray[idx + 2] += Math.sin(time + i * 0.15) * 0.0005;
            }
            geometry.attributes.position.needsUpdate = true;
            points.rotation.y = time * 0.015;
            points.rotation.x = Math.sin(time * 0.2) * 0.02;
            renderer.render(scene, camera);
            frameId = window.requestAnimationFrame(animate);
        };
        resize();
        window.addEventListener("resize", resize);
        animate();
        return function () {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("resize", resize);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);
    var clampIndex = function (next) {
        if (next < 0)
            return 0;
        if (next >= slidesForDisplay.length)
            return Math.max(slidesForDisplay.length - 1, 0);
        return next;
    };
    var changeSlide = function (next) {
        setActiveSlide(clampIndex(next));
    };
    var handleTouchStart = function (event) {
        var _a, _b;
        touchStartY.current = (_b = (_a = event.touches[0]) === null || _a === void 0 ? void 0 : _a.clientY) !== null && _b !== void 0 ? _b : null;
    };
    var handleTouchEnd = function (event) {
        var _a;
        if (loading || isThrottled || touchStartY.current === null)
            return;
        var delta = touchStartY.current - ((_a = event.changedTouches[0]) === null || _a === void 0 ? void 0 : _a.clientY);
        if (Math.abs(delta) < 40) {
            touchStartY.current = null;
            return;
        }
        setIsThrottled(true);
        setTimeout(function () { return setIsThrottled(false); }, 600);
        changeSlide(activeSlide + (delta > 0 ? 1 : -1));
        touchStartY.current = null;
    };
    var slide = (_a = slidesForDisplay[activeSlide]) !== null && _a !== void 0 ? _a : slidesForDisplay[0];
    if (!slide) {
        return null;
    }
    return (React.createElement("div", { className: "min-h-screen overflow-hidden bg-[#050505] text-white" },
        React.createElement("div", { className: "studio-loader fixed inset-0 z-[90] flex items-center justify-center bg-[#030303] transition-opacity " + (loading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0") },
            React.createElement("div", { className: "w-full max-w-md px-6 text-center" },
                React.createElement("p", { className: "font-mono text-[10px] uppercase tracking-[0.4em] text-white/60" }, "EchooRoom Studio"),
                React.createElement("p", { className: "mt-4 text-5xl font-black tracking-[0.24em] text-white" },
                    progress,
                    "%"),
                React.createElement("div", { className: "mt-5 h-2 overflow-hidden rounded-full border border-white/20 bg-white/5" },
                    React.createElement("div", { className: "h-full bg-white transition-all duration-200", style: { width: progress + "%" } })),
                React.createElement("p", { className: "mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45" }, selectedCategory
                    ? selectedCategory + " showcase"
                    : "Welcome to the EchooRoom experience"))),
        React.createElement("div", { className: "studio-shell transition-opacity duration-500 " + (loading ? "opacity-0" : "opacity-100"), onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd },
            React.createElement("div", { className: "relative min-h-screen" },
                React.createElement("div", { className: "absolute inset-0 overflow-hidden" },
                    React.createElement("video", { ref: videoRef, key: slide.id, className: "absolute inset-0 h-full w-full object-cover brightness-110 contrast-105 saturate-110", muted: muted, loop: true, autoPlay: true, playsInline: true, preload: "auto", poster: slide.thumbLink },
                        React.createElement("source", { src: slide.backgroundVideoUrl, type: "video/mp4" })),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" }),
                    React.createElement("div", { className: "absolute inset-0 bg-black/10" }),
                    React.createElement("canvas", { ref: canvasRef, className: "pointer-events-none absolute inset-0 h-full w-full" })),
                React.createElement("div", { className: "relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-4 py-10 sm:px-6 lg:px-8" },
                    React.createElement("div", { className: "grid items-end gap-8 lg:grid-cols-[1.7fr_0.9fr]" },
                        React.createElement("section", { className: "slide-meta max-w-3xl space-y-6 pb-1 sm:pb-3" },
                            React.createElement("div", { className: "inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/70 backdrop-blur" },
                                slide.category === "Live sessions" ? (React.createElement("span", { className: "flex h-3 items-end gap-0.5", role: "status", "aria-label": "Live session active" },
                                    React.createElement("span", { className: "h-1.5 w-0.5 animate-pulse bg-white/80" }),
                                    React.createElement("span", { className: "h-3 w-0.5 animate-pulse bg-white/80 [animation-delay:160ms]" }),
                                    React.createElement("span", { className: "h-2 w-0.5 animate-pulse bg-white/80 [animation-delay:320ms]" }))) : (React.createElement("span", { className: "h-2.5 w-2.5 rounded-full bg-white/80" })),
                                React.createElement("span", null, slide.category)),
                            React.createElement("div", { className: "space-y-5" },
                                React.createElement("h1", { className: "text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl" }, slide.title),
                                React.createElement("p", { className: "max-w-2xl text-lg leading-8 text-white/70 sm:text-xl" }, slide.description)),
                            React.createElement("div", { className: "flex flex-wrap items-center gap-4" },
                                React.createElement("a", { href: (_b = slide.watchLink) !== null && _b !== void 0 ? _b : "/shows", target: ((_c = slide.watchLink) === null || _c === void 0 ? void 0 : _c.startsWith("http")) ? "_blank" : undefined, rel: ((_d = slide.watchLink) === null || _d === void 0 ? void 0 : _d.startsWith("http")) ? "noreferrer"
                                        : undefined, className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/40 hover:bg-white/15" },
                                    "Watch on Youtube",
                                    React.createElement(lucide_react_1.ArrowUpRight, { size: 14 })),
                                React.createElement("button", { type: "button", onClick: function () { return setMuted(function (value) { return !value; }); }, className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10" },
                                    muted ? React.createElement(lucide_react_1.Volume2, { size: 16 }) : React.createElement(lucide_react_1.VolumeX, { size: 16 }),
                                    muted ? "Unmute" : "Mute")),
                            React.createElement("p", { className: "max-w-xl text-sm uppercase tracking-[0.32em] text-white/45" }, selectedCategory
                                ? "Showing " + selectedCategory + " previews."
                                : "Select a category to change the preview, or swipe on touch devices.")),
                        React.createElement("aside", { className: "rounded-[1.5rem] border border-white/15 bg-black/45 p-4 backdrop-blur-xl lg:mb-3" },
                            React.createElement("div", { className: "mb-6 flex items-center justify-between" },
                                React.createElement("div", null,
                                    React.createElement("p", { className: "text-[11px] uppercase tracking-[0.32em] text-white/50" }, "The Echoroom Studio"),
                                    React.createElement("p", { className: "mt-2 text-sm font-semibold text-white" }, selectedCategory !== null && selectedCategory !== void 0 ? selectedCategory : "All shows")),
                                React.createElement("span", { className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/60" },
                                    activeSlide + 1,
                                    "/",
                                    slidesForDisplay.length)),
                            React.createElement("div", { className: "space-y-3" }, slidesForDisplay.map(function (item, index) {
                                var _a;
                                var isActive = index === activeSlide;
                                return (React.createElement("button", { key: item.id, type: "button", className: "category-card group w-full overflow-hidden rounded-xl border px-4 py-3 text-left transition " + (isActive ? "border-white/50 bg-white/10" : "border-white/10 bg-black/20 hover:border-white/30 hover:bg-white/5"), onClick: function () { return changeSlide(index); } },
                                    React.createElement("div", { className: "flex items-start justify-between gap-4" },
                                        React.createElement("div", { className: "min-w-0" },
                                            React.createElement("p", { className: "flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/85" },
                                                item.category === "Live sessions" ? (React.createElement("span", { className: "flex h-3 items-end gap-0.5", "aria-label": "Live session active" },
                                                    React.createElement("span", { className: "h-1.5 w-0.5 animate-pulse bg-white/80" }),
                                                    React.createElement("span", { className: "h-3 w-0.5 animate-pulse bg-white/80 [animation-delay:160ms]" }),
                                                    React.createElement("span", { className: "h-2 w-0.5 animate-pulse bg-white/80 [animation-delay:320ms]" }))) : null,
                                                item.category),
                                            React.createElement("p", { className: "mt-1 truncate text-xs text-white/45" }, item.title)),
                                        React.createElement("span", { className: "pt-0.5 text-[10px] tabular-nums text-white/35" }, String(index + 1).padStart(2, "0"))),
                                    React.createElement("div", { className: "mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/50" },
                                        React.createElement("span", null, isActive ? "Playing" : "Preview"),
                                        React.createElement("span", null, (_a = item.badge) !== null && _a !== void 0 ? _a : "Live"))));
                            })))))))));
}
exports["default"] = ShowsPage;
