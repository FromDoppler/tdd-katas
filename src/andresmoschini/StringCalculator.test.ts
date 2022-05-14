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
    { input: "   " },
    { input: "abc" },
    { input: ",5,6,7" },
    { input: "x5x6x7x" },
    { input: 0 },
    { input: 567 },
    { input: "567" },
    { input: "5,6,7" },
    { input: "5x6x7x" },
    { input: "5\n6\n7\n" },
    { input: " 567 " },
    { input: "\n5\n6\n7\n" },
  ])(
    "should return NaN when the input is not an expected value ($input)",
    ({ input }) => {
      // arrange
      const expectedResult = NaN;
      const stringCalculator = new StringCalculator();

      // act
      const result = stringCalculator.add(input as string);

      // assert
      expect(result).toEqual(expectedResult);
    }
  );
});
