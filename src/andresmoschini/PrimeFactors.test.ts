import { generate } from "./PrimeFactors";

describe(generate.name, () => {
  it.each([
    {
      n: 1234568789,
    },
    {
      n: null,
    },
    {
      n: undefined,
    },
    {
      n: NaN,
    },
    {
      n: "hola",
    },
  ])(
    "should return an empty array when n is $n (a not a supported value)",
    ({ n }: any) => {
      // Act
      const result = generate(n);

      // Assert
      expect(result).toEqual([]);
    }
  );

  it("should return [] when n is 1", () => {
    // Arrange
    const n = 1;

    // Act
    const result = generate(n);

    // Assert
    expect(result).toEqual([]);
  });
});
