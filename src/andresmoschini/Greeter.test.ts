import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  const arbitraryName = "World";
  const arbitraryDateForSayHello = new Date("2022-04-27T13:00:00.000Z");

  it.each([
    {
      currentTime: "2022-04-27T05:59:59.999Z",
    },
    {
      currentTime: "2022-04-27T22:00:00.000Z",
    },
  ])(
    "should return a message starting with good night when currentTime is $currentTime",
    ({ currentTime }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime });

      // act
      const result = greeter.greet(arbitraryName);

      // assert
      expect(result).toMatch(/^Good\snight/);
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
    "should return a message starting with Good morning when currentTime is $currentTime",
    ({ currentTime }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime });

      // act
      const result = greeter.greet(arbitraryName);

      // assert
      expect(result).toMatch(/^Good\smorning/);
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
    "should return a message starting with Hello when currentTime is $currentTime",
    ({ currentTime }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime });

      // act
      const result = greeter.greet(arbitraryName);

      // assert
      expect(result).toMatch(/^Hello/);
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
    "should return a message starting with Good evening when currentTime is $currentTime",
    ({ currentTime }) => {
      // arrange
      const getCurrentDateTime = () => new Date(currentTime);
      const greeter = new Greeter({ getCurrentDateTime });

      // act
      const result = greeter.greet(arbitraryName);

      // assert
      expect(result).toMatch(/^Good\sevening/);
    }
  );

  it("should return a message including the name", () => {
    // arrange
    const getCurrentDateTime = () => arbitraryDateForSayHello;
    const greeter = new Greeter({ getCurrentDateTime });

    // act
    const result = greeter.greet(arbitraryName);

    // assert
    expect(result).toContain(arbitraryName);
  });

  it("should return a message saying `Hello <name>`", () => {
    // arrange
    const getCurrentDateTime = () => arbitraryDateForSayHello;
    const greeter = new Greeter({ getCurrentDateTime });

    // act
    const result = greeter.greet(arbitraryName);

    // assert
    expect(result).toBe(`Hello ${arbitraryName}`);
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
      const getCurrentDateTime = () => arbitraryDateForSayHello;
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
      const getCurrentDateTime = () => arbitraryDateForSayHello;
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
      const getCurrentDateTime = () => arbitraryDateForSayHello;
      const greeter = new Greeter({ getCurrentDateTime });

      // act
      const result = greeter.greet(name);

      // assert
      expect(result).toMatch(/^Hello\s[^a-z]\w*$/);
      expect(result).toBe(`Hello ${expectedName}`);
    }
  );
});
