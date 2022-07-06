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
      rolls: [...repeat(21, 0)],
    },
    // {
    //   description: "perfect",
    //   rolls: [...repeat(13, 10)]
    // },
  ])(
    "getScore should throw error when there are too much rolls in a $description game",
    ({ rolls }) => {
      // Arrange
      const game = new BowlingGame();

      const act = () => {
        for (const roll of rolls) {
          game.roll(roll);
        }
      };

      expect(act).toThrowError("Cannot roll when the game is over");
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
    {
      description: "perfect",
      rolls: [...repeat(9, 10)],
      expectedScore: 300,
    },
    // {
    //   description: "gutter with a last spare",
    //   rolls: [...repeat(18, 0), 0, 10, 10],
    //   expectedScore: 20,
    // },
    // {
    //   description: "gutter with a last strike",
    //   rolls: [...repeat(18, 0), 10, 10, 0],
    //   expectedScore: 10,
    // },
    // {
    //   description: "x",
    //   rolls: [1, 1],
    //   expectedScore: 10,
    // },
  ])(
    "getScore should return $expectedScore for a $description game",
    ({ rolls, expectedScore }) => {
      // Arrange
      const game = new BowlingGame();
      for (const roll of rolls) {
        //console.debug((game as any).firstFrame);
        game.roll(roll);
      }

      // Act
      const result = game.getScore();

      // Assert

      //expect((game as any).rolls).toBe([]);
      expect(result).toBe(expectedScore);
    }
  );

});
