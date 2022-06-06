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

  it("should return [2] when input value is 2", () => {
    // Arrange
    const input = 2;
    // Act
    const result = generate(input);
    // Assert
    expect(result).toEqual([2]);
  });
});
