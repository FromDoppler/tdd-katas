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
    "should return same value when input string is a single number",
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
