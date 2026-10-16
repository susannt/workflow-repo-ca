import { beforeEach, expect, test } from "vitest";
import { getUserName, saveUser } from "./storage.js";

beforeEach(() => {
  localStorage.clear();
});

test("getUserName returns the name from the user object in storage", () => {
  saveUser({ data: { name: "Test User" } });

  expect(getUserName()).toBe("Test User");
});

test("getUserName returns null when no user exists in storage", () => {
  expect(getUserName()).toBe(null);
});
