import { range } from "./utils";

type FactorWordPair = { readonly factor: number; readonly word: string };

const DEFAULT_WORDS_BY_FACTOR: readonly FactorWordPair[] = [
  { factor: 3, word: "Fizz" },
  { factor: 5, word: "Buzz" },
  { factor: 7, word: "Foo" },
  { factor: 11, word: "Boo" },
] as const;

export class FizzBuzz {
  private readonly start: number;
  private readonly end: number;

  constructor(options: { start?: number; end?: number } = {}) {
    this.start = options.start || 1;
    this.end = options.end || 100;
  }

  generate(): string[] {
    return range(this.end - this.start + 1, this.start).map((i) => {
      const word = DEFAULT_WORDS_BY_FACTOR.filter((x) => i % x.factor === 0)
        .map((x) => x.word)
        .join("");
      return word ? word : i.toString();
    });
  }
}
