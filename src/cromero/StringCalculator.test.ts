import { StringCalculator } from "./StringCalculator";

describe("StringCalculator.add", () => {
  it("should return a sum of numbers", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("1");

    // assert
    expect(result).toEqual(1)
  });
});
