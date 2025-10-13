import { describe, it, expect } from "vitest";
import { validate } from "./validation";

describe("Validate function", () => {
  it("should be exist", () => {
    expect(validate).toBeDefined();
    expect(typeof validate).toBe("function");
  });
});
