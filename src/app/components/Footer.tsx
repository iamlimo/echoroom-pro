import React from "react";
import { Facebook, Instagram, Linkedin, Music2, Twitter, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/echooroom_?stkn=bDlzcGpkb3NsdjJq&utm_source=qr", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/share/18Nj96pwdg/?mibextid=wwXIfr", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/echooroom", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@echooroom", icon: Youtube },
  { label: "TikTok", href: "https://www.tiktok.com/@echooroom", icon: Music2 },
  { label: "X", href: "https://x.com/echooroom", icon: Twitter },
];

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
          <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Blog
          </a>
          <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
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
