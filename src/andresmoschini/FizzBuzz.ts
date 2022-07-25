import { range } from "./utils";

const DEFAULT_WORDS_BY_FACTOR = [
  { factor: 77, word: "FooBoo" },
  { factor: 55, word: "BuzzBoo" },
  { factor: 35, word: "BuzzFoo" },
  { factor: 33, word: "FizzBoo" },
  { factor: 21, word: "FizzFoo" },
  { factor: 15, word: "FizzBuzz" },
  { factor: 11, word: "Boo" },
  { factor: 7, word: "Foo" },
  { factor: 5, word: "Buzz" },
  { factor: 3, word: "Fizz" },
] as const;

export class FizzBuzz {
  private readonly start: number;
  private readonly end: number;

  constructor(options: { start?: number; end?: number } = {}) {
    this.start = options.start || 1;
    this.end = options.end || 100;
  }

  generate(): string[] {
    return range(this.end - this.start + 1, this.start).map(
      (i) =>
        DEFAULT_WORDS_BY_FACTOR.find((x) => i % x.factor === 0)?.word ??
        i.toString()
    );
  }
}
