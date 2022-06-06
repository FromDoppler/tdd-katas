import { generate } from "./PrimeFactor";

describe("PrimeFactors.generate", () => {
  it
    .each([{ number: 1, expected: [] }])
    ("should return $expected when the number is $number", ({ number, expected }) => {
      const primeFactors = generate(number);
      expect(primeFactors).toEqual(expected);
    });
});
