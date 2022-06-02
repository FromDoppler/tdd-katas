import { generate } from "./PrimeFactors";

describe(generate.name, () => {
  it.each([
    {
      n: -1,
    },
    {
      n: -2,
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
    "should return an empty array when n is $n (a not a supported type)",
    ({ n }: any) => {
      // Act
      const result = generate(n);

      // Assert
      expect(result).toEqual([]);
    }
  );

  it.each([
    {
      n: 1234568789,
    },
  ])(
    "should return an array with one n element when n is $n (a not a supported value yet)",
    ({ n }: any) => {
      // Act
      const result = generate(n);

      // Assert
      expect(result).toEqual([n]);
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

  it("should return [2] when n is 2", () => {
    // Arrange
    const n = 2;

    // Act
    const result = generate(n);

    // Assert
    expect(result).toEqual([2]);
  });

  it("should return [3] when n is 3", () => {
    // Arrange
    const n = 3;

    // Act
    const result = generate(n);

    // Assert
    expect(result).toEqual([3]);
  });

  it("should return [2,2] when n is 4", () => {
    // Arrange
    const n = 4;

    // Act
    const result = generate(n);

    // Assert
    expect(result).toEqual([2, 2]);
  });
});
