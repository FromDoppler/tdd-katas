import { range } from "./utils";

type FactorRule = { readonly factor: number; readonly word: string };

export const DEFAULT_FACTOR_RULES: readonly FactorRule[] = [
  { factor: 3, word: "Fizz" },
  { factor: 5, word: "Buzz" },
  { factor: 7, word: "Foo" },
  { factor: 11, word: "Boo" },
] as const;

export const BUZZ_FIZZ_FACTOR_RULES: readonly FactorRule[] =
  generateBuzzFizzRules();

export class FizzBuzz {
  private readonly start: number;
  private readonly end: number;
  private readonly factorRules: readonly FactorRule[];

  constructor({
    start = 1,
    end = 100,
    factorRules = DEFAULT_FACTOR_RULES,
  }: {
    start?: number;
    end?: number;
    factorRules?: readonly FactorRule[];
  } = {}) {
    this.start = start;
    this.end = end;
    this.factorRules = factorRules;
  }

  generate(): string[] {
    return range(this.end - this.start + 1, this.start).map(
      (i) =>
        this.factorRules
          .filter((x) => i % x.factor === 0)
          .map((x) => x.word)
          .join("") || i.toString()
    );
  }
}
function generateBuzzFizzRules() {
  const newRules = [...DEFAULT_FACTOR_RULES];
  const fizzRuleIndex = newRules.findIndex((rule) => rule.word === "Fizz");
  const buzzRuleIndex = newRules.findIndex((rule) => rule.word === "Buzz");
  newRules[fizzRuleIndex] = {
    ...newRules[fizzRuleIndex],
    word: "Buzz",
  };
  newRules[buzzRuleIndex] = {
    ...newRules[buzzRuleIndex],
    word: "Fizz",
  };
  return newRules;
}
