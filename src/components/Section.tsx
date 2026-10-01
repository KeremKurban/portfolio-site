import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 border-t border-line/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-sm tracking-wide text-accent">{eyebrow}</p>
        <h2 id={headingId} className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro ? <div className="mt-4 max-w-2xl text-muted">{intro}</div> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-ink/60 px-2.5 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}
