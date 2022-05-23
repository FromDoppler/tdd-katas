import { StringCalculator } from "./StringCalculator";

describe("StringCalculator.add", () => {
  it("should return 0 of empty string", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("");

    // assert
    expect(result).toEqual(0)
  });
});
