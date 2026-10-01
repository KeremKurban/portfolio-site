import { certifications, experience } from "@/content/experience";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="01 · Experience" title="Experience">
      <ol className="relative space-y-12 border-l border-line [&>li]:-ml-[6px]">
        {experience.map((role) => (
          <li key={`${role.title}-${role.period}`} className="relative pl-8">
            <span aria-hidden="true" className="absolute left-0 top-2 size-3 rounded-full border-2 border-accent bg-ink" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{role.title}</h3>
              <p className="shrink-0 font-mono text-sm text-muted">{role.period}</p>
            </div>
            <p className="mt-1 text-accent">{role.org}</p>
            <ul className="mt-4 space-y-2 text-muted">
              {role.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-line" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="04 · Certifications" title="Certifications">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li key={c.name} className="flex flex-col rounded-2xl border border-line bg-panel/60 p-5">
            <h3 className="font-semibold leading-snug">{c.name}</h3>
            <p className="mt-1 text-sm text-muted">{c.issuer}</p>
            <p className="mt-auto pt-3 font-mono text-sm text-accent">{c.date}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
