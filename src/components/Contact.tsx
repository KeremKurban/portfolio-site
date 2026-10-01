import { FileText, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Section } from "./Section";

export function Contact() {
  const item = "flex items-center gap-3 rounded-xl border border-line bg-ink/40 p-4 transition hover:border-accent/60";
  return (
    <Section id="contact" eyebrow="05 · Contact" title="Get in Touch">
      <div className="rounded-3xl border border-line bg-panel/60 p-6 sm:p-10">
        <div className="grid gap-3 sm:grid-cols-2">
          <a href={`mailto:${site.email}`} className={item}>
            <Mail className="size-5 text-accent" aria-hidden="true" />
            <span>{site.email}</span>
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className={item}>
            <LinkedInIcon className="size-5 text-accent" />
            <span>LinkedIn Profile</span>
          </a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className={item}>
            <GitHubIcon className="size-5 text-accent" />
            <span>GitHub Profile</span>
          </a>
          <a href={site.cv} target="_blank" rel="noopener noreferrer" className={item}>
            <FileText className="size-5 text-accent" aria-hidden="true" />
            <span>Download CV</span>
          </a>
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <MapPin className="size-4" aria-hidden="true" />
          {site.location}
        </p>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <p className="mx-auto max-w-6xl px-4 text-sm text-muted sm:px-6">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
