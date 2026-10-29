import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/design-system");
  await page.evaluate(() => document.fonts.ready);
});

test("exportación accesible y sin desbordamiento", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Sistema de diseño");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(results.violations).toEqual([]);
  await page.setViewportSize({ width: 320, height: 800 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("teclado, navegación, selección y validación", async ({ page }) => {
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Saltar al contenido" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  const index = page.getByText("Índice de esta página", { exact: true });
  if (await index.isVisible()) await index.click();
  await page.getByRole("link", { name: "Interacción", exact: true }).click();
  await expect(page.getByRole("link", { name: "Interacción", exact: true })).toHaveAttribute("aria-current", "location");
  const mark = page.getByRole("button", { name: "Marcar ejemplo" });
  await mark.focus();
  await page.keyboard.press("Space");
  await expect(mark).toHaveAttribute("aria-pressed", "true");
  await expect(mark).toHaveCSS("outline-style", "solid");
  await expect(page.getByRole("button", { name: "Acción no disponible" })).toBeDisabled();
  const empty = page.getByRole("radio", { name: "Vacío", exact: true });
  await empty.focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("radio", { name: "Cargando", exact: true })).toBeChecked();
  await expect(page.getByText("Cargando muestra…", { exact: true })).toBeVisible();
  await page.getByRole("radio", { name: "Error", exact: true }).check();
  await expect(page.getByText("No se pudo cargar la muestra.", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Volver al estado inicial" }).click();
  await expect(empty).toBeChecked();
  await page.getByRole("button", { name: "Validar muestra" }).click();
  const field = page.getByRole("textbox", { name: "Nombre de la muestra" });
  await expect(field).toBeFocused();
  await expect(field).toHaveAttribute("aria-invalid", "true");
  await field.fill("Revisión visual");
  await page.getByRole("button", { name: "Validar muestra" }).click();
  await expect(page.getByText("Validación completada. No se han enviado datos.")).toBeVisible();
  await page.getByRole("button", { name: "Restablecer" }).click();
  await expect(field).toBeEmpty();
});

test("contraste de estados y preferencia de movimiento reducido", async ({ page }) => {
  await page.getByRole("radio", { name: "Error", exact: true }).check();
  await page.getByRole("button", { name: "Validar muestra" }).click();
  const errors = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(errors.violations).toEqual([]);
  await page.getByRole("radio", { name: "Listo", exact: true }).check();
  const ready = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(ready.violations).toEqual([]);
  await page.emulateMedia({ reducedMotion: "reduce" });
  const duration = await page.getByRole("button", { name: "Marcar ejemplo" }).evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(duration.split(", ").every((part) => part === "0s")).toBe(true);
});

test("detalle nativo y objetivos táctiles", async ({ page }) => {
  const summary = page.locator("article summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("article details")).toHaveAttribute("open", "");
  await expect(page.getByText("Demuestra jerarquía y relación entre evidencia y contexto.", { exact: false })).toBeVisible();
  const shortTargets = await page.locator("button, .nav-link, .text-link, summary, input[type=text], input:not([type]), label:has(input[type=radio])").evaluateAll((elements) => elements.filter((e) => e.checkVisibility() && e.getBoundingClientRect().height < 44).map((e) => e.outerHTML));
  expect(shortTargets).toEqual([]);
});
