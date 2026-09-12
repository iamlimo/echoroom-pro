import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Music2, Twitter, Youtube } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/echooroom_?stkn=bDlzcGpkb3NsdjJq&utm_source=qr",
    tagline: "Behind the scenes and new releases",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@echooroom",
    tagline: "Short trailers. Big energy.",
    icon: Music2,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@echooroom",
    tagline: "Trailers, BTS, and interviews",
    icon: Youtube,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18Nj96pwdg/?mibextid=wwXIfr",
    tagline: "Join the EchooRoom TV page and community",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/echooroom",
    tagline: "Thought leadership and industry updates",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/echooroom_?s=11",
    tagline: "Fresh updates, perspectives, and moments",
    icon: Twitter,
  },
];

export default function Bio() {
  usePageMeta({
    title: "EchooRoom | Bio",
    description:
      "EchooRoom is a media and storytelling brand creating real stories, culture, conversations, and compelling content across Africa and beyond.",
    url: "https://echooroom.com/bio",
  });

  return (
    <div className="min-h-screen bg-[#0b0d13] text-foreground">
      <div className="relative isolate min-h-screen overflow-hidden bg-[#0b0d13]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(245, 140, 45, 0.22), transparent 35%), linear-gradient(90deg, rgba(20, 18, 16, 0.82) 0%, rgba(8, 12, 18, 0.9) 60%, rgba(20, 17, 15, 0.76) 100%)",
          }}
        />

        <main className="relative z-10 mx-auto flex min-h-screen max-w-[540px] items-center justify-center px-5 py-10 sm:px-6">
          <div className="w-full">
            <div className="mb-7 flex justify-center">
              <img
                src="/assets/echoroom-logo.png"
                alt="EchooRoom"
                className="h-auto w-full max-w-[460px] select-none object-contain drop-shadow-[0_0_18px_rgba(245,140,45,0.12)]"
              />
            </div>

            <p className="text-center font-mono text-[10px] uppercase tracking-[0.35em] text-[#d9d5cf]">
              Africa&apos;s home of real stories
            </p>

            <h1 className="mt-4 text-center text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">
              EchooRoom
            </h1>

            <p className="mt-5 text-center text-[15px] leading-relaxed text-[#d9d5cf]">
              EchooRoom is a storytelling and media platform spotlighting real culture,
              voices, conversations, and experiences that move people across Africa and
              beyond.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-[#d9d5cf]">
                Stay connected
              </p>

              <div className="space-y-3">
                {SOCIAL_LINKS.map(({ label, href, tagline, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#151a20]/85 px-4 py-3.5 transition-colors duration-200 hover:border-[#f58c2d]/40 hover:bg-[#1a2129]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0f1419] text-white">
                        <Icon size={16} />
                      </span>

                      <div className="min-w-0">
                        <div className="truncate text-base font-semibold text-white">
                          {label}
                        </div>
                        <div className="truncate text-xs text-[#b6b0aa]">{tagline}</div>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="ml-3 shrink-0 text-[#f58c2d] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="mailto:Echooroom@starksltd.com"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#111821]/80 px-3 py-2 text-xs text-[#e7e1db] transition-colors hover:border-[#f58c2d]/50 hover:text-white"
              >
                <Mail size={12} className="text-[#f58c2d]" />
                Echooroom@starksltd.com
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
