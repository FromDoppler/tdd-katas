import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  it("should return a message with Hello name", () => {
    // arrange
    const greeter = new Greeter();

    // act
    const result = greeter.greet("Cromeror");

    // assert
    expect(result).toBe("Hello Cromeror");
  });

  it
    .each([
      "Cromeror   ", "   Cromeror", "   Cromeror   "
    ])
    ("should return a trim message with Hello Cromeror", (name) => {
      // arrange
      const greeter = new Greeter();
      const trimRegex = /(^\S+[\S\s]+\S+$)|(^\S$)/;
      // act
      const result = greeter.greet(name);

      // assert
      expect(result).toMatch(trimRegex);
    });

  it
    .each(["cromeror", "cromEror"])
    ("should return a greeting message with capitalize name", (name) => {
      // arrange
      const greeter = new Greeter();
      // act
      const result = greeter.greet(name);
      // assert
      expect(result).toBe("Hello Cromeror");
    });
});
