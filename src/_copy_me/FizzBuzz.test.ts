import { FizzBuzz } from "./FizzBuzz";

describe(FizzBuzz, () => {
  it("should return an array with length 100", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(100);
  });
});
