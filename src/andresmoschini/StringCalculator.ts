export class StringCalculator {
  constructor() {}

  add(input: string) {
    if (input === "") {
      return 0;
    }

    if (typeof input === "number") {
      return input;
    }

    if (typeof input !== "string") {
      return NaN;
    }

    const items = input.split(",");

    if (items.length === 1) {
      return parseInt(input);
    }

    return items.reduce((acc, cur) => acc + this.add(cur), 0);
  }
}
