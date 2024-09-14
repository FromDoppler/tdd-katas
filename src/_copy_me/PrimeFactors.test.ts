import { PrimeFactors } from "./PrimeFactors";

describe(PrimeFactors, () => {
  it("should return [] when number is 1", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(1);

    // assert
    expect(result).toEqual([]);
  });
});
