import { ArrowRight, FileText, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Chip } from "./Section";
import { SmartImage } from "./SmartImage";

export function Hero() {
  return (
    <section id="about" aria-labelledby="hero-heading" className="relative scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_-10%,rgb(100_255_218/0.12),transparent),radial-gradient(40rem_25rem_at_0%_110%,rgb(56_189_248/0.08),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr] md:gap-12 md:py-28">
        <div className="fade-up">
          <p className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {site.location}
          </p>
          <h1 id="hero-heading" className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl text-accent sm:text-2xl">{site.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {site.highlights.map((h) => (
              <Chip key={h}>{h}</Chip>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-ink transition hover:bg-accent-strong"
              data-testid="hero-cv"
            >
              <FileText className="size-5" aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-medium transition hover:border-accent hover:text-accent"
            >
              See projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg p-2.5 text-muted transition hover:bg-panel hover:text-fg">
                <GitHubIcon className="size-5" />
              </a>
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2.5 text-muted transition hover:bg-panel hover:text-fg">
                <LinkedInIcon className="size-5" />
              </a>
              <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`} className="rounded-lg p-2.5 text-muted transition hover:bg-panel hover:text-fg">
                <Mail className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="fade-up order-first w-32 sm:w-40 md:order-none md:mx-auto md:w-full md:max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-full border border-line bg-panel shadow-[0_0_0_6px_rgb(100_255_218/0.06)]">
            <SmartImage
              src={site.photo}
              alt={`Profile photo of ${site.name}`}
              loading="eager"
              className="size-full object-cover"
              fallback={
                <div className="grid size-full place-items-center bg-[linear-gradient(135deg,var(--color-panel),var(--color-panel-2))]">
                  <span role="img" aria-label={`${site.name} (photo unavailable)`} className="font-mono text-3xl text-accent/80 md:text-6xl">
                    KK
                  </span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
