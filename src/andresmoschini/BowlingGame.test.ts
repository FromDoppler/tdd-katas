import { BowlingGame } from "./BowlingGame";
import { range, repeat } from "./utils";

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

  it.each([
    {
      description: "gutter",
      rolls: [...repeat(20, 0)],
      expectedScore: 0,
    },
    {
      description: "all 1s",
      rolls: [...repeat(20, 1)],
      expectedScore: 20,
    },
    {
      description: "with spare",
      rolls: [5, 5 /* spare */, 3, ...repeat(17, 0)],
      expectedScore: 16,
    },
    {
      description: "with strike",
      rolls: [10 /* strike */, 3, 4, ...repeat(16, 0)],
      expectedScore: 24,
    },
    {
      description: "with spare after 0",
      rolls: [0, 10 /* spare */, 3, 4, ...repeat(16, 0)],
      expectedScore: 20,
    },
  ])(
    "getScore should return $expectedScore for a $description game",
    ({ rolls, expectedScore }) => {
      // Arrange
      const game = new BowlingGame();
      for (const roll of rolls) {
        game.roll(roll);
      }

      // Act
      const result = game.getScore();

      // Assert
      expect(result).toBe(expectedScore);
    }
  );
});
