import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Megaphone,
  MessageSquareText,
  PenLine,
  Sparkles,
  Upload,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectGoals: "",
    timeline: "",
    preferredChannel: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      if (selectedFile) {
        payload.append("brief", selectedFile);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Unable to send your brief right now.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        projectGoals: "",
        timeline: "",
        preferredChannel: "",
      });
      setSelectedFile(null);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to send your brief right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

              <a
                href="#brief-form"
                className="mt-8 inline-flex items-center gap-2 bg-[#f4d90d] px-6 py-3 text-sm font-bold text-[#111111] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5"
              >
                Start a Project <ArrowRight size={15} />
              </a>
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

            <a
              href="#brief-form"
              className="inline-flex items-center justify-center bg-[#111111] px-6 py-3 text-sm font-bold uppercase tracking-[0.02em] text-white transition-transform hover:-translate-y-0.5"
            >
              Submit Your Brief
            </a>
          </div>
        </section>

        <section id="brief-form" className="pb-16 pt-4 md:pb-20">
          <div className="overflow-hidden rounded-[28px] border border-[#d7d4d1] bg-[#f8f7f5] p-4 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
              <div className="rounded-[22px] bg-[#171717] p-6 text-white md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/70">
                  Project brief
                </p>
                <h3 className="mt-4 text-[2rem] font-black leading-none tracking-[-0.06em] text-white">
                  Share your goals.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  Tell us what you need, your timeline, and any reference materials. We’ll use this to match the right team and next steps.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li>• Brand objectives and campaign focus</li>
                  <li>• Audience, channels and target markets</li>
                  <li>• Timeline, budget and deliverables</li>
                  <li>• Supporting files, references and notes</li>
                </ul>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid gap-5 rounded-[20px] border border-[#d7d4d1] bg-white p-4 md:p-6"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-[#171717]">
                    Full name
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="h-11 rounded-xl border-[#d7d4d1] bg-[#f8f7f5]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-[#171717]">
                    Email address
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="h-11 rounded-xl border-[#d7d4d1] bg-[#f8f7f5]"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-[#171717]">
                    Company
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="h-11 rounded-xl border-[#d7d4d1] bg-[#f8f7f5]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-[#171717]">
                    Budget range
                    <Input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. $10k - $25k"
                      className="h-11 rounded-xl border-[#d7d4d1] bg-[#f8f7f5]"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-medium text-[#171717]">
                  Project goals and brief
                  <Textarea
                    name="projectGoals"
                    value={formData.projectGoals}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us about your brand, target audience, objectives, campaign scope, and any timing or deliverable needs."
                    className="rounded-xl border-[#d7d4d1] bg-[#f8f7f5] text-sm"
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                  <label className="grid gap-2 text-sm font-medium text-[#171717]">
                    Timeline
                    <Input
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="e.g. 6-8 weeks"
                      className="h-11 rounded-xl border-[#d7d4d1] bg-[#f8f7f5]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-medium text-[#171717]">
                    Preferred channel
                    <Input
                      name="preferredChannel"
                      value={formData.preferredChannel}
                      onChange={handleChange}
                      placeholder="Social, PR, Content, Events"
                      className="h-11 rounded-xl border-[#d7d4d1] bg-[#f8f7f5]"
                    />
                  </label>
                </div>

                <div className="rounded-[16px] border border-dashed border-[#bdb6af] bg-[#f8f7f5] p-4">
                  <label
                    htmlFor="brief-upload"
                    className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-transparent bg-white px-3 py-3 text-sm text-[#171717] shadow-sm"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Upload size={16} />
                      {selectedFile ? selectedFile : "Upload brief or reference files"}
                    </span>
                    <span className="rounded-full border border-[#d7d4d1] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#171717]/70">
                      PDF / DOC / JPG
                    </span>
                  </label>
                  <input
                    id="brief-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                    onChange={(event) => {
                      const file = event.target.files?.[0] ?? null;
                      setSelectedFile(file);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-[#171717]/60">
                    By sending this brief, you agree to be contacted about your project request.
                  </p>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 rounded-xl bg-[#111111] px-6 text-sm font-bold text-white hover:bg-[#111111]/90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending…" : "Send Brief"}
                  </Button>
                </div>

                {isSuccess && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Your brief has been sent successfully. We’ll be in touch soon.
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
