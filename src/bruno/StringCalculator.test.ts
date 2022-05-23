import { StringCalculator } from "./StringCalculator";

describe("StringCalculator", () => {
  it("should return 0 when string is empty", () => {
    // arrange
    const input = "";
    const expected = 0;
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add(input);

    // assert
    expect(result).toEqual(expected);
  });

  it.each([
    { input: "3", expected: 3 },
    { input: "0009", expected: 9 },
    { input: "87776531123", expected: 87776531123 },
  ])(
    "should return same value when input string is a single number: $input",
    ({ input, expected }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input);

      // assert
      expect(result).toEqual(expected);
    }
  );

  it.each([
    { input: "1,2", expected: 3 },
    { input: "0,5", expected: 5 },
  ])(
    "should return the sum of two numbers comma delimited",
    ({ input, expected }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input);

      // assert
      expect(result).toEqual(expected);
    }
  );

  it.each([
    { input: "1\n2", expected: 3 },
    { input: "0\n5", expected: 5 },
  ])(
    "should return the sum of two numbers new line delimited",
    ({ input, expected }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input);

      // assert
      expect(result).toEqual(expected);
    }
  );

  it.each([
    { input: "1\n2,3\n4", expected: 10 },
    { input: "0\n5,3\n4", expected: 12 },
    { input: ",1,2\n3\n\n", expected: 6 },
  ])(
    "should return the sum of numbers delimited by comma or new line $input",
    ({ input, expected }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input);

      // assert
      expect(result).toEqual(expected);
    }
  );
});
