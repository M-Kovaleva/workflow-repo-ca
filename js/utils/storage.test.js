import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from user object in storage", () => {
    saveUser({ name: "TestUser" });
    expect(getUsername()).toBe("TestUser");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBe(null);
  });
});
