import { FizzBuzz } from "./FizzBuzz";

describe("FizzBuzz.generate", () => {
  it("should be defined as function", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Assert
    expect(sut).toHaveProperty("generate");
    expect(sut["generate"]).toBeInstanceOf(Function);
  });
});
