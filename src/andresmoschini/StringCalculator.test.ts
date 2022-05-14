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
    { input: "1", expectedResult: 1 },
    { input: "2", expectedResult: 2 },
    { input: "9337623236", expectedResult: 9337623236 },
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
    { input: 0, expectedResult: 0 },
    { input: 567, expectedResult: 567 },
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
});
