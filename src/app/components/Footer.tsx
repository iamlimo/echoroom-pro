import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-0 select-none">
            <img
              src="/assets/echoroom-logo.png"
              alt="EchoRoom"
              className="h-10 w-auto md:h-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-mono tracking-wide">EchooRoom Ltd</p>
        </div>

        <div className="flex flex-wrap gap-8">
          <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            About
          </a>
          <a href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Services
          </a>
          <a href="/studio" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Entertainment
          </a>
          {/* <a href="/shows" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Shows
          </a> */}
          <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Contact
          </a>
        </div>

        <a href="mailto:Echooroom@starksltd.com" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide">
          Echooroom@starksltd.com
        </a>
      </div>
      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2">
        <p className="font-mono text-[10px] text-muted-foreground tracking-wide">© 2026 EchooRoom Ltd. All rights reserved.</p>
        <p className="font-mono text-[10px] text-muted-foreground tracking-wide">Strategic Capability Document · Enterprise Profile & Service Catalogue</p>
      </div>
    </footer>
  );
}
