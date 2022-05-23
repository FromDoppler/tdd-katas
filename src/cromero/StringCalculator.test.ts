import { StringCalculator } from "./StringCalculator";

describe("StringCalculator.add", () => {
  it("should return 0 of empty string", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("");

    // assert
    expect(result).toEqual(0);
  });

  it.each([
    { input: "1", sum: 1 },
    { input: "2", sum: 2 },
    { input: "1,2", sum: 3 },
    { input: "10,20", sum: 30 }
  ])(`should return $input of $sum string`, ({ input, sum }) => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add(input);

    // assert
    expect(result).toEqual(sum);
  });
});
