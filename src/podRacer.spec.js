import { it, expect, describe, beforeAll } from "@jest/globals";
import { PodRace } from "./podRacer";

const racers = ["Alfa", "Beta", "Gama", "Delta"];
let podRacers = undefined;

describe("Pod Racers", () => {
  beforeAll(() => {
    podRacers = new PodRace(...racers);
  });

  it("should have the same classification on start", () => {
    const expected = racers;
    const result = podRacers.racers;

    expect(result).toEqual(expected);
  });

  it("should have moved Beta 1 position up", () => {
    const expected = ["Beta", "Alfa", "Gama", "Delta"];
    podRacers.updateRacersPosition("Beta +1");
    const result = podRacers.racers;

    expect(result).toEqual(expected);
  });

  it("should have moved Gama 1 position down", () => {
    const expected = ["Beta", "Alfa", "Delta", "Gama"];
    podRacers.updateRacersPosition("Gama -1");
    const result = podRacers.racers;

    expect(result).toEqual(expected);
  });

  it("should have eliminated Delta", () => {
    const expected = ["Beta", "Alfa", "Gama", "Delta ELIMINATED"];
    podRacers.updateRacersPosition("Delta ELIMINATE");
    const result = podRacers.racers;

    expect(result).toEqual(expected);
  });

  it("should have not moved with wrong racer", () => {
    const expected = ["Beta", "Alfa", "Gama", "Delta ELIMINATED"];
    podRacers.updateRacersPosition("Gamaa +1");
    const result = podRacers.racers;

    expect(result).toEqual(expected);
  });

  it("should have not moved with wrong parameter", () => {
    const expected = ["Beta", "Alfa", "Gama", "Delta ELIMINATED"];
    podRacers.updateRacersPosition("Gama a+1");
    const result = podRacers.racers;

    expect(result).toEqual(expected);
  });

  it("should have moved Gama 2 position up", () => {
    const expected = ["Gama", "Beta", "Alfa", "Delta ELIMINATED"];
    podRacers.updateRacersPosition("Gama +2");
    const result = podRacers.racers;

    expect(result).toEqual(expected);
  });

  it("should return the proper position", () => {
    const expected = { 1: "Gama", 2: "Beta", 3: "Alfa", eliminated: ["Delta"] };

    const result = podRacers.positions;

    expect(result).toEqual(expected);
  });

  it("should have eliminated Beta", () => {
    const expected = ["Gama", "Alfa", "Delta ELIMINATED", "Beta ELIMINATED"];
    podRacers.updateRacersPosition("Beta ELIMINATE");
    const result = podRacers.racers;

    expect(result).toEqual(expected);
  });

  it("should return the proper position", () => {
    const expected = { 1: "Gama", 2: "Alfa", eliminated: ["Delta", "Beta"] };

    const result = podRacers.positions;

    expect(result).toEqual(expected);
  });
});
