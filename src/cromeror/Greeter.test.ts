import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  it("should return a message with Hello name", () => {
    // arrange
    const greeter = new Greeter({ getTime: () => 0 });
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
      const greeter = new Greeter({ getTime: () => 0 });
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
      const greeter = new Greeter({ getTime: () => 0 });
      // act
      const result = greeter.greet(name);
      // assert
      expect(result).toBe("Hello Cromeror");
    });

  it
    .each([6, 8, 12])
    ("should return a message with Good morning Cromeror", (time) => {
      // arrange
      const greeter = new Greeter({ getTime: () => time });
      // act
      const result = greeter.greet("Cromeror");
      // assert
      expect(result).toBe("Good morning Cromeror");
    });

  it
    .each([18, 20, 22])
    ("should return a message with Good evening Cromeror", (time) => {
      // arrange
      const greeter = new Greeter({ getTime: () => time });
      // act
      const result = greeter.greet("Cromeror");
      // assert
      expect(result).toBe("Good evening Cromeror");
    });

  it
    .each([22.01, 0, 5.99])
    ("should return a message with Good night Cromeror", (time) => {
      // arrange
      const greeter = new Greeter({ getTime: () => time });
      // act
      const result = greeter.greet("Cromeror");
      // assert
      expect(result).toBe("Good night Cromeror");
    });
});
