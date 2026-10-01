"use client";

import { useState } from "react";
import { BookOpen, Download, Image as ImageIcon } from "lucide-react";
import { publications, SELF, type Publication } from "@/content/publications";
import { site } from "@/content/site";
import { Modal } from "./Modal";
import { Chip, Section } from "./Section";
import { SmartImage } from "./SmartImage";

function Authors({ text }: { text: string }) {
  const match = text.match(SELF);
  if (!match || match.index === undefined) return <>{text}</>;
  return (
    <>
      {text.slice(0, match.index)}
      <strong className="font-semibold text-fg">{match[0]}</strong>
      {text.slice(match.index + match[0].length)}
    </>
  );
}

const pubTags = ["all", ...new Set(publications.flatMap((p) => p.tags))];

export function Publications() {
  const [tag, setTag] = useState("all");
  const [poster, setPoster] = useState<Publication | null>(null);
  const visible = tag === "all" ? publications : publications.filter((p) => p.tags.includes(tag));

  return (
    <Section id="publications" eyebrow="03 · Publications" title="Publications">
      <div className="flex flex-wrap items-center gap-2">
        <a
          href={site.publicationsPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink transition hover:bg-accent-strong"
        >
          <Download className="size-4" aria-hidden="true" />
          Download all publications
        </a>
        <div role="toolbar" aria-label="Filter publications by tag" className="flex flex-wrap gap-2">
          {pubTags.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tag === t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-3 py-1 text-sm transition ${
                tag === t ? "border-accent bg-accent text-ink" : "border-line text-muted hover:border-accent/60 hover:text-fg"
              }`}
            >
              {t === "all" ? "All" : t}
            </button>
          ))}
        </div>
      </div>

      <ol className="mt-8 space-y-4">
        {visible.map((p) => (
          <li key={p.title} data-publication className="rounded-2xl border border-line bg-panel/60 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full border border-accent/40 px-2 py-0.5 font-medium text-accent">{p.type}</span>
              <span className="font-mono text-muted">{p.year}</span>
            </div>
            <h3 className="mt-3 font-medium leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">
              <Authors text={p.authors} />
            </p>
            <p className="mt-1 text-sm italic text-muted">{p.venue}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            {p.image || p.doi ? (
              <div className="mt-4 flex flex-wrap gap-4 border-t border-line pt-4 text-sm">
                {p.image ? (
                  <button
                    type="button"
                    onClick={() => setPoster(p)}
                    className="inline-flex items-center gap-1.5 text-accent transition hover:text-fg"
                  >
                    <ImageIcon className="size-4" aria-hidden="true" />
                    View poster<span className="sr-only">: {p.title}</span>
                  </button>
                ) : null}
                {p.doi ? (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent transition hover:text-fg"
                  >
                    <BookOpen className="size-4" aria-hidden="true" />
                    Read paper<span className="sr-only">: {p.title}</span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <Modal open={poster !== null} onClose={() => setPoster(null)} labelledBy="poster-dialog-title" wide>
        {poster ? (
          <div>
            <h3 id="poster-dialog-title" className="pr-10 text-xl font-semibold">
              {poster.title}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {poster.venue}, {poster.year}
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-line bg-panel-2">
              <SmartImage
                src={poster.image}
                alt={`Poster: ${poster.title}`}
                className="w-full"
                fallback={<p className="p-8 text-center text-muted">Poster image unavailable.</p>}
              />
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
