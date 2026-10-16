import { expect, test } from "vitest";
import { isActivePath } from "./userInterface.js";

test("isActivePath returns true when current path matches href exactly", () => {
  expect(isActivePath("/match", "/match")).toBe(true);
});

test("isActivePath returns true for root path when path is /", () => {
  expect(isActivePath("/", "/")).toBe(true);
});

test("isActivePath returns true for root path when path is /index.html", () => {
  expect(isActivePath("/", "/index.html")).toBe(true);
});

test("isActivePath returns true when current path includes the href", () => {
  expect(isActivePath("/match", "/match/123")).toBe(true);
});

test("isActivePath returns false when paths don't match", () => {
  expect(isActivePath("/match", "/login")).toBe(false);
});
