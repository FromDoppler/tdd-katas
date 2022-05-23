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

  it.each([
    {
      input: "-1,2,-3",
      expected: "'-1,2,-3' => 'negatives not allowed: -1,-3'",
    },
    {
      input: "0\n5,3\n-4",
      expected: "'5,3,-4' => 'negatives not allowed: -4'",
    },
    {
      input: ",-1,-2\n3\n\n-1000",
      expected: "'-1,-2,3,-1000' => 'negatives not allowed: -1,-2,-1000'",
    },
  ])(
    "should throw an exception message when values are negative numbers: $input",
    ({ input, expected }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // assert
      expect(() => stringCalculator.add(input)).toThrowError(expected);
    }
  );

  it.each([
    { input: "1000\n2000,3000\n4", expected: 1004 },
    { input: "0\n5000,3\n4", expected: 7 },
    { input: ",999,1001\n1\n\n,,", expected: 1000 },
    { input: "87776531123", expected: 0 },
  ])(
    "should ignore values greater than 1000: $input",
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
