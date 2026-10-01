import { expect, test } from "@playwright/test";
import { certifications, experience } from "../src/content/experience";
import { projectFilters, projects } from "../src/content/projects";
import { publications } from "../src/content/publications";
import { site } from "../src/content/site";
import { LEGACY_CDN_HOST, REPO_RAW_PREFIX } from "../src/lib/assets";

// Repositories under github.com/KeremKurban that are forks of other people's work.
// Credit them via the upstream repository and an explicit role, never as your own repo.
const KNOWN_FORKS = [
  "fly_ai_simulator", "BlueCelluLab", "step-audio-editx", "neo4j-gnn-llm-example",
  "introduction-to-terraform-on-google-cloud-platform-4506001", "neuroagent", "citation-graph",
  "AdaptiveResonanceLib", "project-based-learning", "PySpike", "langchain-extract",
  "connectome-manipulator", "example-get-started-experiments", "neo4j-generative-ai-aws",
  "BluePyEModel", "NaLLM", "morphoclass", "multinetx", "ConnectomeUtilities", "CNS-2023-Tutorial",
  "transformer-xl", "gnn-project", "cuhnsw", "topological_sampling", "handson-ml",
  "reinforcement-learning-an-introduction", "Detailed-Spiking-Neural-Network",
  "deep-belief-network", "Face-recognition-using-deep-learning", "Kaggle_Challenge_LIVE",
];

function collectUrls(value: unknown, out = new Set<string>()): Set<string> {
  if (typeof value === "string") {
    if (/^https?:\/\//.test(value)) out.add(value);
  } else if (Array.isArray(value)) {
    value.forEach((v) => collectUrls(v, out));
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((v) => collectUrls(v, out));
  }
  return out;
}

const allUrls = [...collectUrls([site, experience, certifications, projects, publications])];

test("projects are well-formed and uniquely identified", () => {
  const ids = projects.map((p) => p.id);
  expect(new Set(ids).size).toBe(ids.length);
  for (const p of projects) {
    expect(p.title.trim(), p.id).not.toBe("");
    expect(p.description.trim(), p.id).not.toBe("");
    expect(p.tags.length, p.id).toBeGreaterThan(0);
    expect(p.github, p.id).toMatch(/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/);
  }
});

test("every project filter matches at least one project", () => {
  for (const f of projectFilters) {
    expect(projects.some((p) => p.tags.includes(f)), `filter "${f}" shows nothing`).toBe(true);
  }
});

test("no project credits a fork as personal work", () => {
  const forkLinks = allUrls.filter((u) =>
    KNOWN_FORKS.some((f) => new RegExp(`github\\.com/KeremKurban/${f}(/|$)`, "i").test(u)),
  );
  expect(forkLinks).toEqual([]);
});

test("experience and certifications are complete", () => {
  for (const r of experience) {
    expect(r.title && r.org && r.period, r.title).toBeTruthy();
    expect(r.highlights.length, r.title).toBeGreaterThan(0);
  }
  for (const c of certifications) expect(c.name && c.issuer && c.date, c.name).toBeTruthy();
});

test("publications include the author and valid DOIs", () => {
  for (const p of publications) {
    expect(p.authors, p.title).toMatch(/Kurban|et al\./);
    if (p.doi) expect(p.doi, p.title).toMatch(/^10\.\d{4,}\//);
  }
});

test("every link uses https", () => {
  expect(allUrls.filter((u) => !u.startsWith("https://"))).toEqual([]);
});

test("assets referenced from the portfolio repo exist", async () => {
  test.skip(!!process.env.OFFLINE, "network checks disabled");
  const repoUrls = allUrls.filter((u) => u.startsWith(REPO_RAW_PREFIX));
  expect(repoUrls.length).toBeGreaterThan(0);
  const missing: string[] = [];
  for (const url of repoUrls) {
    const res = await fetch(url, { method: "HEAD" });
    if (!res.ok) missing.push(`${res.status} ${url}`);
  }
  expect(missing).toEqual([]);
});

test("external links resolve", async () => {
  test.skip(!process.env.CHECK_LINKS, "set CHECK_LINKS=1 to verify external links");
  test.setTimeout(120_000);
  const external = allUrls.filter(
    (u) => !u.startsWith(REPO_RAW_PREFIX) && !u.includes(LEGACY_CDN_HOST) && !u.includes("linkedin.com"),
  );
  const broken: string[] = [];
  for (const url of external) {
    const isDoi = url.startsWith("https://doi.org/");
    const res = await fetch(url, { redirect: isDoi ? "manual" : "follow" });
    const ok = isDoi ? res.status >= 300 && res.status < 400 : res.ok;
    if (!ok) broken.push(`${res.status} ${url}`);
  }
  expect(broken).toEqual([]);
});

test("report images still hosted on the create.xyz CDN", () => {
  const legacy = allUrls.filter((u) => u.includes(LEGACY_CDN_HOST));
  test.info().annotations.push({
    type: "migration",
    description: `${legacy.length} image(s) still on ${LEGACY_CDN_HOST}; move them into github.com/KeremKurban/portfolio`,
  });
});
