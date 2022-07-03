import { BowlingGame } from "./BowlingGame";
import { range } from "./utils";

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

  it("should return 20 when all roles downs 1 pine", () => {
    // Arrange
    const game = new BowlingGame();
    const rollsQty = 20;
    const downPines = 1;
    const expectedScore = 20;

    // Act
    range(rollsQty).forEach((i) => {
      game.roll(downPines);
    });

    // Assert
    expect(game.getScore()).toBe(expectedScore);
  });

  it("should support one spare", () => {
    // Arrange
    const game = new BowlingGame();

    // Act
    game.roll(5);
    game.roll(5); // spare
    game.roll(3);

    range(17).forEach(() => {
      game.roll(0);
    });

    // Assert
    expect(game.getScore()).toBe(16);
  });
});
