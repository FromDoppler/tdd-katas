import { generate } from "./PrimeFactors";

describe("PrimeFactors", () => {
  it("should return [] when input value is 1", () => {
    // Arrange
    const input = 1;
    // Act
    const result = generate(input);
    // Assert
    expect(result).toEqual([]);
  });

  it.each([{ input: 2 }, { input: 3 }])(
    "should return [$input] when input value is $input",
    ({ input }) => {
      // Act
      const result = generate(input);
      // Assert
      expect(result).toEqual([input]);
    }
  );
});
