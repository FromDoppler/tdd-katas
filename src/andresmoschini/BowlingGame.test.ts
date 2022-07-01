import { BowlingGame } from "./BowlingGame";

describe(BowlingGame.name, () => {
  it.each([{ functionName: "roll" }, { functionName: "getScore" }])(
    "should have $functionName function defined",
    ({ functionName }) => {
      // Arrange
      const sut = new BowlingGame();

      // Assert
      expect(sut).toHaveProperty(functionName);
      expect(sut[functionName]).toBeInstanceOf(Function);
    }
  );

  it("should return 0 for a gutter game", () => {
    // Arrange
    const game = new BowlingGame();
    const rollsQty = 20;
    const gutterPines = 0;
    const expectedScore = 0;

    // Act
    range(rollsQty).forEach((i) => {
      game.roll(gutterPines);
    });

    // Assert
    expect(game.getScore()).toBe(expectedScore);
  });
});


function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}
