import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("user can navigate to venue details", async ({ page }) => {
    // Go to home page
    await page.goto("/");

    // Wait for the venue list to load
    await page.locator("#venue-container a").first().waitFor();

    // Click the first venue
    await page.locator("#venue-container a").first().click();

    // Check that the venue details page loaded
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
