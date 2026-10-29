import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";
import { contact, profile } from "../src/content/profile";
import { projects } from "../src/content/projects";
import { homepage } from "../src/content/site";

const captureDirectory = ".impeccable/review";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
});

test("contenido, accesibilidad y capturas de la portada", async ({ page }, testInfo) => {
  await expect(page).toHaveTitle(`${profile.name} · ${profile.role}`);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(homepage.hero.headline);
  for (const project of projects) {
    await expect(page.getByRole("heading", { name: project.name, exact: true })).toBeVisible();
    if (project.repository) {
      await expect(page.locator(`#${project.id}`).getByRole("link", { name: "Ver repositorio", exact: true })).toHaveAttribute("href", project.repository.href);
    }
  }
  await expect(page.locator("#experiencia").getByRole("heading", { name: "Outlier" })).toBeVisible();
  await expect(page.locator("#proyectos")).not.toContainText("Outlier");
  const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(accessibility.violations).toEqual([]);
  await mkdir(captureDirectory, { recursive: true });
  await page.screenshot({ path: `${captureDirectory}/portfolio-${testInfo.project.name}.png`, fullPage: true });
  await page.screenshot({ path: `${captureDirectory}/portfolio-${testInfo.project.name}-first.png` });
});

test("navegación, detalles, contacto y targets accesibles", async ({ page }, testInfo) => {
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Saltar al contenido" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  for (const label of ["Proyectos", "Sobre mí", "Contacto"]) {
    const link = page.getByRole("navigation").getByRole("link", { name: label, exact: true });
    await link.focus();
    await expect(link).toHaveCSS("outline-style", "solid");
    await page.keyboard.press("Enter");
    const href = await link.getAttribute("href");
    expect(new URL(page.url()).hash).toBe(href);
    const top = await page.locator(href!).evaluate((element) => element.getBoundingClientRect().top);
    expect(top).toBeGreaterThanOrEqual(0);
  }
  for (const name of ["Hangar", "TaskFlow Pro"]) {
    const summary = page.locator("summary").filter({ hasText: name });
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(summary.locator("..")).toHaveAttribute("open", "");
  }
  const openState = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(openState.violations).toEqual([]);
  await expect(page.getByRole("link", { name: "Escríbeme", exact: true })).toHaveAttribute("href", contact.email!.href);
  await expect(page.getByRole("link", { name: "Descargar CV" })).toHaveCount(0);
  const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll((links) => links.map((link) => link.getAttribute("href")!).filter((href) => !document.getElementById(href.slice(1))));
  expect(brokenAnchors).toEqual([]);
  const smallTargets = await page.locator("a, summary").evaluateAll((elements) => elements.filter((element) => {
    const box = element.getBoundingClientRect();
    return box.width > 0 && (box.width < 44 || box.height < 44);
  }).map((element) => element.textContent));
  expect(smallTargets).toEqual([]);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.getByRole("link", { name: "Hablemos", exact: true })).toHaveCSS("transition-duration", "0s");
  await mkdir(captureDirectory, { recursive: true });
  // Axe can restore focus to the first link; capture the actual disclosure state.
  await page.locator("#hangar summary").focus();
  await page.locator("#hangar").evaluate((element) => element.scrollIntoView({ block: "start" }));
  // Capture the viewport: an element taller than it can misplace fixed elements in Chromium clips.
  await page.screenshot({ path: `${captureDirectory}/portfolio-${testInfo.project.name}-details.png` });
  await page.getByRole("link", { name: "Escríbeme", exact: true }).focus();
  await page.locator("#contacto").screenshot({ path: `${captureDirectory}/portfolio-${testInfo.project.name}-contact.png` });
});

test("sin desbordamientos en móvil estrecho, tablet y pantalla grande", async ({ page }, testInfo) => {
  const widths = testInfo.project.name === "mobile" ? [320, 390] : [768, 1024, 1920];
  await mkdir(captureDirectory, { recursive: true });
  for (const width of widths) {
    await page.setViewportSize({ width, height: 1000 });
    const overflow = await page.locator("body *").evaluateAll((elements) => elements.filter((element) => {
      if (element.closest("details:not([open])") && !element.closest("summary")) return false;
      if (element.classList.contains("skip-link") || element.classList.contains("sr-only")) return false;
      const box = element.getBoundingClientRect();
      return box.width > 0 && (box.right > innerWidth + 1 || box.left < -1);
    }).map((element) => `${element.tagName}.${element.className}`));
    expect(overflow, `Overflow at ${width}px`).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if ([320, 768, 1920].includes(width)) {
      await page.screenshot({ path: `${captureDirectory}/portfolio-${width}.png`, fullPage: true });
      await page.screenshot({ path: `${captureDirectory}/portfolio-${width}-first.png` });
    }
  }
});
