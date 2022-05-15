import { StringCalculator } from "./StringCalculator";

describe("StringCalculator.add", () => {
  it("should return 0 when the input is an empty string", () => {
    // arrange
    const input = "";
    const expectedResult = 0;
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add(input);

    // assert
    expect(result).toEqual(expectedResult);
  });

  it.each([
    { input: "   ", message: "not parsable values:    " },
    { input: "abc", message: "not parsable values: abc" },
    { input: "x5x6x7x", message: "not parsable values: x5x6x7x" },
    { input: "-x5", message: "not parsable values: -x5" },
    { input: "-5", message: "negatives not allowed: -5" },
    { input: "-5x", message: "negatives not allowed: -5" },
    { input: -5, message: "negatives not allowed: -5" },
  ])(
    "should throw error when the input is not an expected value ($input)",
    ({ input, message }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      expect(
        () =>
          // act
          stringCalculator.add(input as string)
        // assert
      ).toThrowError(message);
    }
  );

  it.each([
    { input: {}, message: "not parsable values: [object Object]" },
    { input: () => {}, message: "not parsable values: () => {}" },
    { input: true, message: "not parsable values: true" },
    { input: null, message: "not parsable values: " },
    { input: undefined, message: "not parsable values: " },
    {
      input: Symbol("test"),
      message: "Cannot convert a Symbol value to a string",
    },
  ])(
    "should throw error when the input is not an expected type ($input)",
    ({ input, message }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      expect(
        () =>
          // act
          stringCalculator.add(input as string)
        // assert
      ).toThrowError(message);
    }
  );

  it.each([
    { input: 0, expectedResult: 0 },
    { input: 567, expectedResult: 567 },
    { input: [], expectedResult: 0 },
    { input: [1, 2, 3], expectedResult: 6 },
    { input: BigInt(7), expectedResult: 7 },
  ])(
    "should support some edge cases when the input is not a string ($input)",
    ({ input, expectedResult }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input);

      // assert
      expect(result).toEqual(expectedResult);
    }
  );

  it.each([
    { input: "1", expectedResult: 1 },
    { input: "2", expectedResult: 2 },
    { input: "933", expectedResult: 933 },
  ])(
    "should return the value when the input is a single number ($input)",
    ({ input, expectedResult }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input);

      // assert
      expect(result).toEqual(expectedResult);
    }
  );

  it.each([
    { input: "567", expectedResult: 567 },
    { input: "5x6x7x", expectedResult: 5 },
    { input: " 567 ", expectedResult: 567 },
  ])(
    "should return the value when the input is parsable as number ($input)",
    ({ input, expectedResult }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input as string);

      // assert
      expect(result).toEqual(expectedResult);
    }
  );

  it.each([
    { input: "1,2", expectedResult: 3 },
    { input: "1\n2", expectedResult: 3 },
    { input: "10,20", expectedResult: 30 },
    { input: "1\n2,3\n4", expectedResult: 10 },
    { input: "5,6,7", expectedResult: 18 },
    { input: "5,6\n7", expectedResult: 18 },
    { input: "5\n6\n7", expectedResult: 18 },
    { input: "\n5\n6\n7\n", expectedResult: 18 },
    { input: ",5,6,7", expectedResult: 18 },
    { input: ",,\n", expectedResult: 0 },
  ])(
    "should return the sum for delimited values ($input)",
    ({ input, expectedResult }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input as string);

      // assert
      expect(result).toEqual(expectedResult);
    }
  );

  it.each([
    { input: "1,a", message: "not parsable values: a" },
    { input: "1\nx", message: "not parsable values: x" },
    { input: "10,  ", message: "not parsable values:   " },
    { input: "1\n  ,3\n4", message: "not parsable values:   " },
    { input: "5,  ,7", message: "not parsable values:   " },
    { input: "5,6\n  ", message: "not parsable values:   " },
    { input: " \n6\n7", message: "not parsable values:  " },
    { input: "\nx\ny\nz\n", message: "not parsable values: x,y,z" },
    { input: " ,5,6,7", message: "not parsable values:  " },
    { input: ",,\n ", message: "not parsable values:  " },
    { input: "-1,-2", message: "negatives not allowed: -1,-2" },
    { input: "-1\n-2", message: "negatives not allowed: -1,-2" },
    { input: "-10,-20", message: "negatives not allowed: -10,-20" },
    { input: "-1\n2,3\n-4", message: "negatives not allowed: -1,-4" },
    { input: "5,6,-7", message: "negatives not allowed: -7" },
    { input: "-5,6\n7", message: "negatives not allowed: -5" },
    { input: "-5\n6\n-7", message: "negatives not allowed: -5,-7" },
    { input: "\n-5\n6\n7\n", message: "negatives not allowed: -5" },
    { input: ",-5,-6,-7", message: "negatives not allowed: -5,-6,-7" },
    { input: ",-5,-6xxx,-7", message: "negatives not allowed: -5,-6,-7" },
    {
      input: ",-5,-6xxx,b,5,-7,8,c",
      message: "not parsable values: b,c; negatives not allowed: -5,-6,-7",
    },
    { input: [1, 2, -3], message: "negatives not allowed: -3" },
    { input: BigInt(-7), message: "negatives not allowed: -7" },
  ])(
    "should return an exception when some values are not parsable ($input)",
    ({ input, message }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      expect(
        () =>
          // act
          stringCalculator.add(input as string)
        // assert
      ).toThrowError(message);
    }
  );

  it.each([
    { input: "1000", expectedResult: 1000 },
    { input: "1001", expectedResult: 0 },
    { input: "1000,1000,5000,1010,500", expectedResult: 2500 },
  ])(
    "should ignore values greater than 1000 ($input)",
    ({ input, expectedResult }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input as string);

      // assert
      expect(result).toEqual(expectedResult);
    }
  );

  it.each([
    { input: "//#\n1", expectedResult: 1 },
    { input: "//#\n1#2#3#4#5", expectedResult: 15 },
    { input: "//###\n1", expectedResult: 1 },
    { input: "//xxxx\n1xxxx2xxxx3x4xxxx5", expectedResult: 11 },
    { input: "//abc12\nabc121abc122abc123abc124abc125", expectedResult: 15 },
  ])(
    "should accept a custom separator ($input)",
    ({ input, expectedResult }) => {
      // arrange
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input as string);

      // assert
      expect(result).toEqual(expectedResult);
    }
  );
});
