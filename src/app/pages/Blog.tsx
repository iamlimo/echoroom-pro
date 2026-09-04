import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <main className="pt-28 pb-20 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-border bg-card/60 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-primary">
            Blog
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Coming Soon
            </p>
            <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-foreground md:text-6xl">
              Fresh stories are on the way.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              We&apos;re preparing thoughtful insights, industry updates, and creative ideas
              from the EchooRoom studio. Check back soon for new posts.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-bold tracking-wide transition-colors hover:bg-primary/85"
            >
              <ArrowLeft size={16} />
              Back home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
