import { it, expect, describe, beforeAll } from "@jest/globals";
import { validateUserName } from "./validateUserName";

describe("Validation of user`s name", () => {
  it("should return false for input '52alfred'", () => {
    const content = "52alfred";
    const result = validateUserName(content);

    expect(result).toBeFalsy();
  });

  it("should return false for input 'erick_14'", () => {
    const content = "erick_14";
    const result = validateUserName(content);

    expect(result).toBeFalsy();
  });

  it("should return false for input 'erick_14*'", () => {
    const content = "erick_14*";
    const result = validateUserName(content);

    expect(result).toBeFalsy();
  });

  it("should return false for input 'hugo123_'", () => {
    const content = "hugo123_";
    const result = validateUserName(content);

    expect(result).toBeFalsy();
  });

  it("should return false for input 'k_9'", () => {
    const content = "k_9";
    const result = validateUserName(content);

    expect(result).toBeFalsy();
  });

  it("should return true for input 'josh_g15'", () => {
    const content = "josh_g15";
    const result = validateUserName(content);

    expect(result).toBe(true);
  });
});
