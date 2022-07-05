import { generate } from "./PrimeFactor";

describe("PrimeFactors.generate", () => {
  it.each([
    { number: 1, expected: [] },
    { number: 2, expected: [2] },
    { number: 3, expected: [3] },
    { number: 4, expected: [2, 2] },
    { number: 5, expected: [5] },
    { number: 6, expected: [2, 3] },
    { number: 7, expected: [7] },
    { number: 8, expected: [2, 2, 2] },
    { number: 9, expected: [3, 3] },
    { number: 4620, expected: [2, 2, 3, 5, 7, 11] },
  ])(
    "should return $expected when the number is $number",
    ({ number, expected }) => {
      const primeFactors = generate(number);
      expect(primeFactors).toEqual(expected);
    }
  );
});
