import { generate } from "./PrimeFactors";

describe("PrimeFactors", () => {
  it("should return [] when value is 1", () => {
    // Arrange
    const input = 1;
    // Act
    const result = generate(input);
    // Assert
    expect(result).toEqual([]);
  });
});
