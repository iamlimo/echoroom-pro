import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

import ThemeToggle from "./components/theme/ThemeToggle";
import Footer from "./components/Footer";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "Who We Are",
    to: "/about",
    children: [
      { label: "About EchooRoom", to: "/about" },
      { label: "Our Team", to: "/team" },
    ],
  },
  { label: "Services", to: "/services" },
  { label: "Entertainment", to: "/studio" },
  // { label: "Shows", to: "/shows" },
  { label: "Contact", to: "/", hash: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  function handleNavClick(link: (typeof NAV_LINKS)[0]) {
    if (link.hash) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .querySelector(link.hash!)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        document
          .querySelector(link.hash)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  }

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-background/70 backdrop-blur border-b border-border/0"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0 });
          }}
          className="flex items-center gap-0 select-none"
        >
          <img
            src="/assets/echoroom-logo.png"
            alt="EchoRoom"
            className="h-10 w-auto md:h-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </button>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = !link.hash && location.pathname === link.to;
            if (link.children) {
              return (
                <div key={link.label} className="relative group">
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`text-sm tracking-wide transition-colors duration-200 flex items-center gap-2 ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="text-muted-foreground transition-transform duration-200 group-hover:-rotate-180 group-hover:text-foreground"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-3 w-44 bg-background border border-border rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 z-50">
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNavClick(child)}
                        className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background/50"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <div className="hidden md:block">
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <button
              onClick={() =>
                handleNavClick({ label: "Contact", to: "/", hash: "#contact" })
              }
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold tracking-wide hover:bg-primary/85 transition-colors"
            >
              Start a project <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/70 backdrop-blur border-b border-border px-6 pb-8 pt-4 flex flex-col gap-6">
          <ThemeToggle />
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <button
                onClick={() => handleNavClick(link)}
                className="text-left text-2xl font-display font-black text-foreground hover:text-primary transition-colors w-full"
              >
                {link.label}
              </button>

              {link.children && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {link.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handleNavClick(child)}
                      className="text-left text-lg font-display font-bold text-foreground/80 hover:text-primary transition-colors"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() =>
              handleNavClick({ label: "Contact", to: "/", hash: "#contact" })
            }
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-bold tracking-wide w-fit mt-2"
          >
            Start a project <ArrowRight size={14} />
          </button>
        </div>
      )}
    </nav>
  );
}

export default function Layout() {
  return (
    <div
      className="bg-background text-foreground min-h-screen"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        .font-display { font-family: 'Poppins', sans-serif; }
        .font-mono    { font-family: 'DM Mono', monospace; }
      `}</style>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
