import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    // Go to login page
    await page.goto("/login/");

    // Fill in email
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    // Fill in password
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Click login
    await page.getByRole("button", { name: "Login" }).click();

    // Check that login was successful
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("wrong password shows error", async ({ page }) => {
    await page.goto("/login/");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    // Fill in wrong password
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    // Check for error message
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
