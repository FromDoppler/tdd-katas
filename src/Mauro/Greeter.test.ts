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
});
