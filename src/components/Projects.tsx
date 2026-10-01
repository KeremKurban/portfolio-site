"use client";

import { useState } from "react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projectFilters, projects, type Project } from "@/content/projects";
import { GitHubIcon } from "./icons";
import { Modal } from "./Modal";
import { Chip, Section } from "./Section";
import { SmartImage } from "./SmartImage";

const placeholder = (
  <div className="grid size-full place-items-center bg-linear-to-br from-teal-400/20 to-panel-2" data-placeholder>
    <FolderGit2 className="size-12 text-fg/70" aria-hidden="true" />
  </div>
);

function LinkRow({ project }: { project: Project }) {
  const cls = "inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent";
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <a href={project.github} target="_blank" rel="noopener noreferrer" className={cls}>
        <GitHubIcon className="size-4" /> GitHub
        <span className="sr-only"> repository for {project.title}</span>
      </a>
      {project.live ? (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={cls}>
          <ArrowUpRight className="size-4" aria-hidden="true" /> Live demo
          <span className="sr-only"> of {project.title}</span>
        </a>
      ) : null}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));

  const filterBtn = (value: string, label: string) => (
    <button
      key={value}
      type="button"
      aria-pressed={filter === value}
      onClick={() => setFilter(value)}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
        filter === value ? "border-accent bg-accent text-ink" : "border-line text-muted hover:border-accent/60 hover:text-fg"
      }`}
    >
      {label}
    </button>
  );

  return (
    <Section id="projects" eyebrow="02 · Projects" title="Featured Projects">
      <div role="toolbar" aria-label="Filter projects by tag" className="flex flex-wrap gap-2">
        {filterBtn("all", "All")}
        {projectFilters.map((t) => filterBtn(t, t))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.id} data-project data-tags={p.tags.join("|")} className="flex">
            <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/60 transition hover:border-accent/50">
              <div className="aspect-[16/9] overflow-hidden border-b border-line bg-panel-2">
                <SmartImage
                  src={p.image}
                  alt=""
                  className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  fallback={placeholder}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                  {p.tags.length > 4 ? <Chip>+{p.tags.length - 4}</Chip> : null}
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <LinkRow project={p} />
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-accent transition hover:bg-accent/10"
                  >
                    Details<span className="sr-only"> about {p.title}</span>
                  </button>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <Modal open={selected !== null} onClose={() => setSelected(null)} labelledBy="project-dialog-title">
        {selected ? (
          <div>
            <h3 id="project-dialog-title" className="pr-10 text-2xl font-semibold">
              {selected.title}
            </h3>
            <div className="mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-line bg-panel-2">
              <SmartImage src={selected.image} alt={`${selected.title} preview`} className="size-full object-cover" fallback={placeholder} />
            </div>
            <p className="mt-6 leading-relaxed text-muted">{selected.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {selected.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <LinkRow project={selected} />
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
