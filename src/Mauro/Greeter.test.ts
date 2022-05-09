import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  it("should receive a name return a message Hello 'name'", () => {
    // arrange
    const greeter = new Greeter();

    // act
    const result = greeter.greet("Mauro");

    // assert
    expect(result).toBe("Hello Mauro");
  });

  it("should trim received name", () => {
    // arrange
    const greeter = new Greeter();

    // act
    const result = greeter.greet("  Mauro  ");

    // assert
    expect(result).toBe("Hello Mauro");

    // act
    const result2 = greeter.greet("Mauro  ");

    // assert
    expect(result2).toBe("Hello Mauro");
  });

  it("should capitalize the first letter of received name", () => {
    // arrange
    const greeter = new Greeter();

    // act
    const result = greeter.greet("mauro");

    // assert
    expect(result).toBe("Hello Mauro");
  });
});
