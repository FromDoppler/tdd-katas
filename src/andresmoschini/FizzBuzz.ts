import { range } from "./utils";

export class FizzBuzz {
  private readonly start: number;
  private readonly end: number;

  constructor(options: { start?: number; end?: number } = {}) {
    this.start = options.start || 1;
    this.end = options.end || 100;
  }

  generate(): string[] {
    return range(this.end - this.start + 1, this.start).map((i) =>
      i % 15 == 0
        ? "FizzBuzz"
        : i % 5 == 0
        ? "Buzz"
        : i % 3 == 0
        ? "Fizz"
        : i.toString()
    );
  }
}
