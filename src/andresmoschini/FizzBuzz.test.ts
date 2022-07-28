import { BUZZ_FIZZ_FACTOR_RULES, FizzBuzz } from "./FizzBuzz";

describe("FizzBuzz.generate", () => {
  it("should be defined as function", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Assert
    expect(sut).toHaveProperty("generate");
    expect(sut["generate"]).toBeInstanceOf(Function);
  });

  it("should return an array of strings with length 100", () => {
    // Arrange
    const sut = new FizzBuzz();

    // Act
    const result = sut.generate();

    // Assert
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(100);
    for (const resultItem in result) {
      expect(typeof resultItem).toBe("string");
    }
  });

  it.each([
    {
      start: undefined,
      end: undefined,
      expectedLength: 100,
      expectedFirstItem: "1",
      expectedLastItem: "Buzz",
    },
    {
      start: 1,
      end: 20,
      expectedLength: 20,
      expectedFirstItem: "1",
      expectedLastItem: "Buzz",
    },
    {
      start: 15,
      end: 50,
      expectedLength: 36,
      expectedFirstItem: "FizzBuzz",
      expectedLastItem: "Buzz",
    },
    {
      start: 18,
      end: 47,
      expectedLength: 30,
      expectedFirstItem: "Fizz",
      expectedLastItem: "47",
    },
    {
      start: 19,
      end: 49,
      expectedLength: 31,
      expectedFirstItem: "19",
      expectedLastItem: "Foo",
    },
    {
      start: 19,
      end: 48,
      expectedLength: 30,
      expectedFirstItem: "19",
      expectedLastItem: "Fizz",
    },
    {
      start: 77,
      end: 88,
      expectedLength: 12,
      expectedFirstItem: "FooBoo",
      expectedLastItem: "Boo",
    },
  ])(
    "should return an array with $expectedLength elements depending on the $start and $end values",
    ({ start, end, expectedLength, expectedFirstItem, expectedLastItem }) => {
      // Arrange
      const sut = new FizzBuzz({ start, end });

      // Act
      const result = sut.generate();

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(expectedLength);
      expect(result[0]).toBe(expectedFirstItem);
      for (const resultItem in result) {
        expect(typeof resultItem).toBe("string");
      }
      expect(result.pop()).toBe(expectedLastItem);
    }
  );

  it.each([
    { position: 1, expectedValue: "1" },
    { position: 3, expectedValue: "Fizz" },
    { position: 5, expectedValue: "Buzz" },
    { position: 6, expectedValue: "Fizz" },
    { position: 7, expectedValue: "Foo" },
    { position: 9, expectedValue: "Fizz" },
    { position: 10, expectedValue: "Buzz" },
    { position: 11, expectedValue: "Boo" },
    { position: 12, expectedValue: "Fizz" },
    { position: 14, expectedValue: "Foo" },
    { position: 15, expectedValue: "FizzBuzz" },
    { position: 18, expectedValue: "Fizz" },
    { position: 19, expectedValue: "19" },
    { position: 30, expectedValue: "FizzBuzz" },
    { position: 45, expectedValue: "FizzBuzz" },
    { position: 55, expectedValue: "BuzzBoo" },
    { position: 70, expectedValue: "BuzzFoo" },
    { position: 77, expectedValue: "FooBoo" },
    { position: 84, expectedValue: "FizzFoo" },
    { position: 88, expectedValue: "Boo" },
    { position: 90, expectedValue: "FizzBuzz" },
    { position: 95, expectedValue: "Buzz" },
    { position: 97, expectedValue: "97" },
    { position: 98, expectedValue: "Foo" },
    { position: 99, expectedValue: "FizzBoo" },
    { position: 100, expectedValue: "Buzz" },
  ])(
    "should return $expectedValue in the $position position",
    ({ position, expectedValue }) => {
      // Arrange
      const sut = new FizzBuzz();

      // Act
      const result = sut.generate();

      // Assert
      expect(result[position - 1]).toBe(expectedValue);
    }
  );

  it.each([
    { position: 1, expectedValue: "1" },
    { position: 16, expectedValue: "16" },
    { position: 17, expectedValue: "17" },
    { position: 18, expectedValue: "Buzz" },
    { position: 19, expectedValue: "19" },
    { position: 20, expectedValue: "Fizz" },
    { position: 21, expectedValue: "BuzzFoo" },
    { position: 22, expectedValue: "Boo" },
    { position: 24, expectedValue: "Buzz" },
    { position: 30, expectedValue: "BuzzFizz" },
    { position: 45, expectedValue: "BuzzFizz" },
    { position: 77, expectedValue: "FooBoo" },
    { position: 83, expectedValue: "83" },
    { position: 84, expectedValue: "BuzzFoo" },
    { position: 85, expectedValue: "Fizz" },
    { position: 88, expectedValue: "Boo" },
    { position: 90, expectedValue: "BuzzFizz" },
    { position: 95, expectedValue: "Fizz" },
    { position: 100, expectedValue: "Fizz" },
  ])(
    "should return $expectedValue in the $position position when fizz buzz rules are overridden",
    ({ position, expectedValue }) => {
      // Arrange
      const sut = new FizzBuzz({
        factorRules: BUZZ_FIZZ_FACTOR_RULES,
      });

      // Act
      const result = sut.generate();

      // Assert
      expect(result[position - 1]).toBe(expectedValue);
    }
  );
});
