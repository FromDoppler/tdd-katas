import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  it("should return a message with Hello name", () => {
    // arrange
    const greeter = new Greeter();

    // act
    const result = greeter.greet("Mauro");

    // assert
    expect(result).toBe("Hello Mauro");
  });
});
