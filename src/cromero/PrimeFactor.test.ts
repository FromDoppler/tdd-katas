import { generate } from "./PrimeFactor";

describe("PrimeFactors.generate", () => {
  it
    .each([
      { number: 1, expected: [] },
      { number: 2, expected: [2] },
      { number: 3, expected: [3] }
    ])
    ("should return $expected when the number is $number", ({ number, expected }) => {
      const primeFactors = generate(number);
      expect(primeFactors).toEqual(expected);
    });
});
