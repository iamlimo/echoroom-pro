import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Megaphone,
  MessageSquareText,
  PenLine,
  Sparkles,
} from "lucide-react";

const serviceCards = [
  {
    title: "Brand & Strategy",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Creative & Content",
    Icon: PenLine,
  },
  {
    title: "Digital Marketing & Growth",
    Icon: Megaphone,
  },
  {
    title: "PR & Corporate Communications",
    Icon: MessageSquareText,
  },
  {
    title: "Campaigns, Experiential & Events",
    Icon: Sparkles,
  },
  {
    title: "360° Marketing Partnership",
    Icon: ArrowUpRight,
  },
];

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-[#f3f1ee] text-[#171717]">
      <main className="mx-auto max-w-[1280px] px-5 pt-24 md:px-8 lg:px-10">
        <section className="pt-8 pb-10 md:pt-12 md:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.28fr]">
            <div className="pt-4 md:pt-8">
              <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-[#171717]">
                ECHOOROOM LTD · NIGERIA
              </p>

              <h1 className="max-w-xl text-[clamp(2.7rem,4vw,4.2rem)] font-black leading-[0.96] tracking-[-0.06em] text-[#171717]">
                Give your brand a bigger voice.
              </h1>

              <p className="mt-6 max-w-[32rem] text-base leading-relaxed text-[#2a2a2a] md:text-lg">
                Strategy, content, advertising and campaigns that turn attention into growth.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 bg-[#f4d90d] px-6 py-3 text-sm font-bold text-[#111111] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5">
                Start a Project
              </button>
            </div>

            <div className="relative h-[380px] overflow-hidden md:h-[460px]">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
            </div>
          </div>
        </section>

        <section className="pt-8 pb-8 md:pt-12 md:pb-12">
          <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#171717]">
            WHAT WE DO
          </p>

          <h2 className="text-[clamp(2.1rem,3vw,3.2rem)] font-black leading-[1.05] tracking-[-0.06em] text-[#171717]">
            Build it to work together.
          </h2>

          <div className="mt-8 grid border border-[#d7d4d1] bg-[#f5f3f1] md:grid-cols-3">
            {serviceCards.map(({ title, Icon }, index) => (
              <div
                key={title}
                className={[
                  "min-h-[165px] border border-[#d7d4d1] bg-[#f5f3f1] p-4 md:p-5",
                  index % 3 !== 2 ? "md:border-r" : "",
                ].join(" ")}
              >
                <div className="mb-12 flex h-8 w-8 items-center justify-center rounded-full border border-[#171717] bg-transparent text-[#171717]">
                  <Icon size={14} strokeWidth={1.8} />
                </div>

                <h3 className="text-[1.05rem] font-semibold leading-snug text-[#171717] md:text-[1.2rem]">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 mb-8 bg-[#f6d10d] px-5 py-6 md:px-8 md:py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-1 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-[#171717]">
                YOUR NEXT MOVE
              </p>

              <div className="flex flex-col gap-1 md:flex-row md:items-end md:gap-3">
                <h3 className="text-[clamp(2rem,3vw,3rem)] font-black leading-none tracking-[-0.06em] text-[#171717]">
                  Tell us what you need
                </h3>
              </div>

              <p className="mt-2 text-base text-[#171717]/80">
                Open our project brief form and tell us what you&apos;re working on.
              </p>
            </div>

            <button className="inline-flex items-center justify-center bg-[#111111] px-6 py-3 text-sm font-bold uppercase tracking-[0.02em] text-white transition-transform hover:-translate-y-0.5">
              Submit Your Brief
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
