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

  it("should return [2,2] when input value is 4", () => {
    // Arrange
    const input = 4;

    // Act
    const result = generate(input);

    // Assert
    expect(result).toEqual([2, 2]);
  });

  it("should return [5] when input value is 5", () => {
    // Arrange
    const input = 5;

    // Act
    const result = generate(input);

    // Assert
    expect(result).toEqual([5]);
  });

  it("should return [2,3] when input value is 6", () => {
    // Arrange
    const input = 6;

    // Act
    const result = generate(input);

    // Assert
    expect(result).toEqual([2, 3]);
  });

  it("should return [7] when input value is 7", () => {
    // Arrange
    const input = 7;

    // Act
    const result = generate(input);

    // Assert
    expect(result).toEqual([7]);
  });

  it("should return [2,2,2] when input value is 8", () => {
    // Arrange
    const input = 8;

    // Act
    const result = generate(input);

    // Assert
    expect(result).toEqual([2, 2, 2]);
  });

  it("should return [3,3] when input value is 9", () => {
    // Arrange
    const input = 9;

    // Act
    const result = generate(input);

    // Assert
    expect(result).toEqual([3, 3]);
  });
});
