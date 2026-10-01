"use client";

import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { site } from "@/content/site";

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const linkClass = (id: string) =>
    `rounded-md px-3 py-2 text-sm transition ${
      active === id ? "bg-panel text-accent" : "text-muted hover:text-fg"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#about" className="flex items-center gap-3 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg border border-accent/40 bg-panel font-mono text-sm text-accent"
          >
            KK
          </span>
          <span>{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "true" : undefined}>
              {label}
            </a>
          ))}
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-medium text-ink transition hover:bg-accent-strong"
          >
            <FileText className="size-4" aria-hidden="true" />
            CV
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-muted hover:text-fg lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line/60 bg-ink px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block ${linkClass(id)}`}
                  aria-current={active === id ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-medium text-ink"
              >
                <FileText className="size-4" aria-hidden="true" />
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
