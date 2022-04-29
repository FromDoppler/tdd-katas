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

  it.each([
    { name: " juan " },
    { name: "pedro " },
    { name: " Carlos" },
    { name: " 123 " },
  ])(
    "should return a message trimming extra spaces in the name (name: `$name`)",
    ({ name }) => {
      // arrange
      const greeter = new Greeter();

      // act
      const result = greeter.greet(name);

      // assert
      expect(result).toMatch(/^Hello\s\w+$/);
    }
  );

  it.each([{ name: "" }, { name: "   " }])(
    "should return `Hello ` when name is white spaces or empty string (name: `$name`)",
    ({ name }) => {
      // arrange
      const greeter = new Greeter();

      // act
      const result = greeter.greet(name);

      // assert
      expect(result).toMatch(/^Hello\s$/);
    }
  );
});
