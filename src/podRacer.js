export class PodRace {
  #racers;
  constructor(...racers) {
    this.#racers = racers;
  }

  updateRacersPosition(updateCommandString) {
    const [racer, command] = updateCommandString.split(" ");

    if (!this.racers.includes(racer)) return;

    if (command === "ELIMINATE") return this.#eliminateRacer(racer);

    if (isNaN(command)) return;

    return this.#updateRacersPosition(racer, command);
  }

  #updateRacersPosition(racer, command) {
    const racersOnline = this.racers.filter(
      (attemptedRacer) => !attemptedRacer.includes("ELIMINATED")
    );
    const racersEliminated = this.racers.filter((attemptedRacer) =>
      attemptedRacer.includes("ELIMINATED")
    );

    const currentRacerIndex = racersOnline.indexOf(racer);
    const newRacerIndex =
      currentRacerIndex - command < 0
        ? 0
        : currentRacerIndex - command > racersOnline.length - 1
        ? racersOnline.length - 1
        : currentRacerIndex - command;

    racersOnline.splice(currentRacerIndex, 1);

    racersOnline.splice(newRacerIndex, 0, racer);

    this.#racers = [...racersOnline, ...racersEliminated];
  }

  #eliminateRacer(racer) {
    const currentRacerIndex = this.racers.indexOf(racer);
    this.#racers.splice(currentRacerIndex, 1);
    this.#racers.push(`${racer} ELIMINATED`);
  }

  get racers() {
    return [...this.#racers];
  }

  get positions() {
    return this.#racers.reduce(
      (acc, curr, index) => {
        if (curr.includes("ELIMINATED")) acc.eliminated.push(curr.replace(" ELIMINATED", ""));
        else acc[`${index + 1}`] = curr;
        return acc;
      },
      { eliminated: [] }
    );
  }
}
