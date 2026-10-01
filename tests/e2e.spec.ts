import { projects } from "../src/content/projects";
import { publications } from "../src/content/publications";
import { site } from "../src/content/site";
import { expect, test } from "./fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("hero shows identity and a working CV link", async ({ page, consoleErrors }) => {
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(site.name);
  await expect(page.getByText(site.role).first()).toBeVisible();
  await expect(page.getByTestId("hero-cv")).toHaveAttribute("href", site.cv);
  expect(consoleErrors).toEqual([]);
});

test("every section is reachable by its anchor", async ({ page }) => {
  for (const id of ["about", "experience", "projects", "publications", "certifications", "contact"]) {
    await expect(page.locator(`section#${id} :is(h1, h2)`).first()).toBeVisible();
  }
});

test("desktop nav marks the section in view as current", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop navigation only");
  const nav = page.getByRole("navigation", { name: "Primary" });
  await nav.getByRole("link", { name: "Publications" }).click();
  await expect(nav.getByRole("link", { name: "Publications" })).toHaveAttribute("aria-current", "true");
});

test("mobile menu opens, navigates and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile navigation only");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  const menu = page.getByRole("navigation", { name: "Mobile" });
  await expect(menu).toBeVisible();
  await menu.getByRole("link", { name: "Contact" }).click();
  await expect(menu).toBeHidden();
  await expect(page.locator("section#contact h2")).toBeInViewport();
});

test("page never scrolls horizontally", async ({ page }) => {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test("project filters narrow the list and All restores it", async ({ page }) => {
  const cards = page.locator("#projects [data-project]");
  await expect(cards).toHaveCount(projects.length);

  const toolbar = page.getByRole("toolbar", { name: "Filter projects by tag" });
  const neo4j = toolbar.getByRole("button", { name: "Neo4j", exact: true });
  await neo4j.click();
  await expect(neo4j).toHaveAttribute("aria-pressed", "true");
  await expect(cards).toHaveCount(projects.filter((p) => p.tags.includes("Neo4j")).length);
  for (const tags of await cards.evaluateAll((els) => els.map((e) => e.getAttribute("data-tags") ?? ""))) {
    expect(tags.split("|")).toContain("Neo4j");
  }

  await toolbar.getByRole("button", { name: "All", exact: true }).click();
  await expect(cards).toHaveCount(projects.length);
});

test("publication filters narrow the list", async ({ page }) => {
  const items = page.locator("#publications [data-publication]");
  await expect(items).toHaveCount(publications.length);
  await page.getByRole("toolbar", { name: "Filter publications by tag" }).getByRole("button", { name: "fMRI", exact: true }).click();
  await expect(items).toHaveCount(publications.filter((p) => p.tags.includes("fMRI")).length);
});

test("project details open in a dialog that closes with Escape and restores focus", async ({ page }) => {
  const first = projects[0];
  const trigger = page.getByRole("button", { name: `Details about ${first.title}` });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: first.title });
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText(first.description.slice(0, 40));
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("poster preview opens in a dialog", async ({ page }) => {
  await page.getByRole("button", { name: /View poster/ }).first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("img", { name: /^Poster:/ })).toBeVisible();
  await dialog.getByRole("button", { name: "Close" }).click();
  await expect(dialog).toBeHidden();
});

test("broken images fall back to a placeholder instead of a broken icon", async ({ page }) => {
  await page.route(/ucarecdn\.com/, (route) => route.fulfill({ status: 404, body: "" }));
  await page.reload();
  await expect(page.getByRole("img", { name: /photo unavailable/ })).toBeVisible();
  const broken = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLImageElement>("img[data-smart-image]")].filter(
      (i) => i.complete && i.naturalWidth === 0 && i.currentSrc.includes("ucarecdn"),
    ).length,
  );
  expect(broken).toBe(0);
});

test("all external links open in a new tab safely", async ({ page }) => {
  const unsafe = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]')]
      .filter((a) => a.target !== "_blank" || !a.rel.includes("noopener"))
      .map((a) => a.href),
  );
  expect(unsafe).toEqual([]);
});
