import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  it("should return a message starting with Hello", () => {
    // arrange
    const greeter = new Greeter();

    // act
    const result = greeter.greet("World");

    // assert
    expect(result).toMatch(/^Hello/);
  });

  it("should return a message including the name", () => {
    // arrange
    const greeter = new Greeter();

    // act
    const result = greeter.greet("World");

    // assert
    expect(result).toMatch(/World/);
  });

  it("should return a message saying `Hello <name>`", () => {
    // arrange
    const greeter = new Greeter();

    // act
    const result = greeter.greet("World");

    // assert
    expect(result).toBe("Hello World");
  });
});
