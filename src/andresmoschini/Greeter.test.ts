import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  const arbitraryName = "World";
  const arbitraryDateForSayHello = new Date("2022-04-27T13:00:00.000Z");
  const noopLog = (_: string) => {};

  it.each([
    {
      currentTime: "2022-04-27T05:59:59.999Z",
    },
    {
      currentTime: "2022-04-27T22:00:00.000Z",
    },
  ])(
    "should return `Good night <name>` when currentTime is $currentTime",
    ({ currentTime }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime, log: noopLog });

      // act
      const result = greeter.greet(arbitraryName);

      // assert
      expect(result).toBe(`Good night ${arbitraryName}`);
    }
  );

  it.each([
    {
      currentTime: "2022-04-27T06:00:00.000Z",
    },
    {
      currentTime: "2022-04-27T11:59:59.999Z",
    },
  ])(
    "should return `Good morning <name>` when currentTime is $currentTime",
    ({ currentTime }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime, log: noopLog });

      // act
      const result = greeter.greet(arbitraryName);

      // assert
      expect(result).toBe(`Good morning ${arbitraryName}`);
    }
  );

  it.each([
    {
      currentTime: "2022-04-27T12:00:00.000Z",
    },
    {
      currentTime: "2022-04-27T17:59:59.999Z",
    },
  ])(
    "should return `Hello <name>` when currentTime is $currentTime",
    ({ currentTime }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime, log: noopLog });

      // act
      const result = greeter.greet(arbitraryName);

      // assert
      expect(result).toBe(`Hello ${arbitraryName}`);
    }
  );

  it.each([
    {
      currentTime: "2022-04-27T18:00:00.000Z",
    },
    {
      currentTime: "2022-04-27T21:59:59.999Z",
    },
  ])(
    "should return `Good evening <name>` when currentTime is $currentTime",
    ({ currentTime }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime, log: noopLog });

      // act
      const result = greeter.greet(arbitraryName);

      // assert
      expect(result).toBe(`Good evening ${arbitraryName}`);
    }
  );

  it.each([
    { name: " juan " },
    { name: "pedro " },
    { name: " Carlos" },
    { name: " 123 " },
  ])("should trim extra spaces in the name (name: `$name`)", ({ name }) => {
    // arrange
    const getCurrentDateTime = () => arbitraryDateForSayHello;
    const greeter = new Greeter({ getCurrentDateTime, log: noopLog });

    // act
    const result = greeter.greet(name);

    // assert
    expect(result).toMatch(/^Hello\s\w+$/);
  });

  it.each([{ name: "" }, { name: "   " }])(
    "should return `Hello ` when name is empty (name: `$name`)",
    ({ name }) => {
      // arrange
      const getCurrentDateTime = () => arbitraryDateForSayHello;
      const greeter = new Greeter({ getCurrentDateTime, log: noopLog });

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
    "should capitalize the first letter of the name (name: `$name`)",
    ({ name, expectedName }) => {
      // arrange
      const getCurrentDateTime = () => arbitraryDateForSayHello;
      const greeter = new Greeter({ getCurrentDateTime, log: noopLog });

      // act
      const result = greeter.greet(name);

      // assert
      expect(result).toMatch(/^Hello\s[^a-z]\w*$/);
      expect(result).toBe(`Hello ${expectedName}`);
    }
  );
});
