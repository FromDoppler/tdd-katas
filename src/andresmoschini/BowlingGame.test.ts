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

  test.each([
    {
      description: "gutter game",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      expectedScore: 0,
    },
    {
      description: "all ones game",
      rolls: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      expectedScore: 20,
    },
  ])(
    "getScore() should calculate the right score for a valid game ($description)",
    ({ rolls, expectedScore }) => {
      // Arrange
      const game = new BowlingGame();
      for (const roll of rolls) {
        game.roll(roll);
      }

      // Act
      const score = game.getScore();

      // Assert
      expect(score).toBe(expectedScore);
    }
  );

  test.each([
    {
      description: "empty game",
      rolls: [],
    },
    {
      description: "19 rolls",
      rolls: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
  ])(
    "getScore() should require a complete game ($description)",
    ({ rolls }) => {
      // Arrange
      const game = new BowlingGame();
      for (const roll of rolls) {
        game.roll(roll);
      }

      // Act
      const act = () => game.getScore();

      // Assert
      expect(act).toThrowError(/game is not complete/i);
    }
  );

  test.each([
    {
      description: "long gutter game",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ])("roll() should fail in a complete game ($description)", ({ rolls }) => {
    // Arrange
    const game = new BowlingGame();
    const lastRoll = rolls.pop()!;

    for (const roll of rolls) {
      game.roll(roll);
    }

    // Act
    const act = () => game.roll(lastRoll);

    // Assert
    expect(act).toThrowError(/game is complete/i);
  });
});
