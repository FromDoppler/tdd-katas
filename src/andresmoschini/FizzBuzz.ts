import { range } from "./utils";

type Rule = {
  readonly predicate: (value: number) => boolean;
  readonly word: string;
};

export const DEFAULT_FACTOR_RULES: readonly Rule[] = [
  { predicate: (value) => value % 77 === 0, word: "FooBoo" },
  { predicate: (value) => value % 55 === 0, word: "BuzzBoo" },
  { predicate: (value) => value % 35 === 0, word: "BuzzFoo" },
  { predicate: (value) => value % 33 === 0, word: "FizzBoo" },
  { predicate: (value) => value % 21 === 0, word: "FizzFoo" },
  { predicate: (value) => value % 15 === 0, word: "FizzBuzz" },
  { predicate: (value) => value % 11 === 0, word: "Boo" },
  { predicate: (value) => value % 7 === 0, word: "Foo" },
  { predicate: (value) => value % 5 === 0, word: "Buzz" },
  { predicate: (value) => value % 3 === 0, word: "Fizz" },
] as const;

export const BUZZ_FIZZ_FACTOR_RULES: readonly Rule[] = [
  { predicate: (value) => value % 77 === 0, word: "FooBoo" },
  { predicate: (value) => value % 55 === 0, word: "FizzBoo" },
  { predicate: (value) => value % 35 === 0, word: "FizzFoo" },
  { predicate: (value) => value % 33 === 0, word: "BuzzBoo" },
  { predicate: (value) => value % 21 === 0, word: "BuzzFoo" },
  { predicate: (value) => value % 15 === 0, word: "BuzzFizz" },
  { predicate: (value) => value % 11 === 0, word: "Boo" },
  { predicate: (value) => value % 7 === 0, word: "Foo" },
  { predicate: (value) => value % 5 === 0, word: "Fizz" },
  { predicate: (value) => value % 3 === 0, word: "Buzz" },
] as const;

export const NEW_SMALL_BIG_RULES: readonly Rule[] = [
  { predicate: (value) => value < 16, word: "small" },
  { predicate: (value) => value > 95, word: "big" },
];

export const FTW_GG_RULES: readonly Rule[] = [
  { predicate: (value) => value % 5 === 0 && value % 3 === 0, word: "FTW" },
  { predicate: (value) => value % 5 === 0 || value % 3 === 0, word: "GG" },
];

export class FizzBuzz {
  private readonly start: number;
  private readonly end: number;
  private readonly rules: readonly Rule[];

  constructor({
    start = 1,
    end = 100,
    rules = DEFAULT_FACTOR_RULES,
  }: {
    start?: number;
    end?: number;
    rules?: readonly Rule[];
  } = {}) {
    this.start = start;
    this.end = end;
    this.rules = rules;
  }

  generate(): string[] {
    return range(this.end - this.start + 1, this.start).map(
      (i) => this.rules.find((rule) => rule.predicate(i))?.word || i.toString()
    );
  }
}
