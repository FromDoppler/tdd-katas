import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  it.each([
    {
      currentTime: "2022-04-27T05:59:59.999Z",
      expectedPrefix: "Hello",
    },
    {
      currentTime: "2022-04-27T06:00:00.000Z",
      expectedPrefix: "Good morning",
    },
    {
      currentTime: "2022-04-27T11:59:59.999Z",
      expectedPrefix: "Good morning",
    },
    {
      currentTime: "2022-04-27T12:00:00.000Z",
      expectedPrefix: "Hello",
    },
    {
      currentTime: "2022-04-27T17:59:59.999Z",
      expectedPrefix: "Hello",
    },
    {
      currentTime: "2022-04-27T18:00:00.000Z",
      expectedPrefix: "Good evening",
    },
    {
      currentTime: "2022-04-27T21:59:59.999Z",
      expectedPrefix: "Good evening",
    },
    {
      currentTime: "2022-04-27T22:00:00.000Z",
      expectedPrefix: "Hello",
    },
  ])(
    "should return a message starting with $expectedPrefix when currentTime is $currentTime",
    ({ currentTime, expectedPrefix }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime });

      // act
      const result = greeter.greet("World");

      // assert
      expect(result).toMatch(new RegExp(`^${expectedPrefix}`));
    }
  );

  it("should return a message including the name", () => {
    // arrange
    const getCurrentDateTime = () => new Date();
    const greeter = new Greeter({ getCurrentDateTime });

    // act
    const result = greeter.greet("World");

    // assert
    expect(result).toMatch(/World/);
  });

  it("should return a message saying `Hello <name>`", () => {
    // arrange
    const getCurrentDateTime = () => new Date("2022-04-27T22:00:00.000Z");
    const greeter = new Greeter({ getCurrentDateTime });

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
      const getCurrentDateTime = () => new Date("2022-04-27T22:00:00.000Z");
      const greeter = new Greeter({ getCurrentDateTime });

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
      const getCurrentDateTime = () => new Date("2022-04-27T22:00:00.000Z");
      const greeter = new Greeter({ getCurrentDateTime });

      // act
      const result = greeter.greet(name);

      // assert
      expect(result).toMatch(/^Hello\s$/);
    }
  );

  it.each([
    { name: " juan ", expectedName: "Juan" },
    { name: "pedRO ", expectedName: "PedRO" },
    { name: " Carlos", expectedName: "Carlos" },
    { name: " 123 ", expectedName: "123" },
    { name: "a", expectedName: "A" },
    { name: "B", expectedName: "B" },
  ])(
    "should return a message capitalizing the first letter of the name (name: `$name`)",
    ({ name, expectedName }) => {
      // arrange
      const getCurrentDateTime = () => new Date("2022-04-27T22:00:00.000Z");
      const greeter = new Greeter({ getCurrentDateTime });

      // act
      const result = greeter.greet(name);

      // assert
      expect(result).toMatch(/^Hello\s[^a-z]\w*$/);
      expect(result).toBe(`Hello ${expectedName}`);
    }
  );
});
