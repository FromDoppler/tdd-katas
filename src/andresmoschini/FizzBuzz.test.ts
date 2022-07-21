import { FizzBuzz } from "./FizzBuzz";

describe("FizzBuzz.generate", () => {
  it("should be defined as function", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Assert
    expect(sut).toHaveProperty("generate");
    expect(sut["generate"]).toBeInstanceOf(Function);
  });

  it("should return an array of strings with length 100", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(100);
    for (const resultItem in result) {
      expect(typeof resultItem).toBe("string");
    }
  });

  it.each([
    { position: 1, expectedValue: "1" },
    { position: 3, expectedValue: "Fizz" },
    { position: 5, expectedValue: "Buzz" },
    { position: 6, expectedValue: "Fizz" },
    { position: 9, expectedValue: "Fizz" },
    { position: 10, expectedValue: "Buzz" },
    { position: 12, expectedValue: "Fizz" },
    { position: 15, expectedValue: "FizzBuzz" },
    { position: 18, expectedValue: "Fizz" },
    { position: 19, expectedValue: "19" },
    { position: 30, expectedValue: "FizzBuzz" },
    { position: 45, expectedValue: "FizzBuzz" },
    { position: 90, expectedValue: "FizzBuzz" },
    { position: 95, expectedValue: "Buzz" },
    { position: 98, expectedValue: "98" },
    { position: 99, expectedValue: "Fizz" },
    { position: 100, expectedValue: "Buzz" },
  ])(
    "should return $expectedValue in the $position position",
    ({ position, expectedValue }) => {
      // Arrange
      const sut = new FizzBuzz();

      // Act
      const result = sut.generate();

      // Assert
      expect(result[position - 1]).toBe(expectedValue);
    }
  );
});
