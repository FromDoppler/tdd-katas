import { BowlingGame, Frame } from "./BowlingGame";

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

describe(Frame.name, () => {
  it.each([{ functionName: "roll" }, { functionName: "getScore" }])(
    "should have $functionName function defined",
    ({ functionName }) => {
      // Arrange
      const sut = new Frame();

      // Assert
      expect(sut).toHaveProperty(functionName);
      expect(sut[functionName]).toBeInstanceOf(Function);
    }
  );

  test.each([
    {
      description: "gutter frame",
      rolls: [0, 0],
      expectedScore: 0,
    },
    {
      description: "all ones frame",
      rolls: [1, 1],
      expectedScore: 2,
    },
  ])(
    "getScore() should calculate the right score for a valid frame ($description)",
    ({ rolls, expectedScore }) => {
      // Arrange
      const frame = new Frame();
      for (const roll of rolls) {
        frame.roll(roll);
      }

      // Act
      const score = frame.getScore();

      // Assert
      expect(score).toBe(expectedScore);
    }
  );

  test.each([
    {
      description: "empty frame",
      rolls: [],
    },
    {
      description: "1 roll frame",
      rolls: [1],
    },
  ])(
    "getScore() should require a complete frame ($description)",
    ({ rolls }) => {
      // Arrange
      const frame = new Frame();
      for (const roll of rolls) {
        frame.roll(roll);
      }

      // Act
      const act = () => frame.getScore();

      // Assert
      expect(act).toThrowError(/frame is not complete/i);
    }
  );

  test.each([
    {
      description: "long gutter frame",
      rolls: [0, 0, 0],
    },
  ])("roll() should fail in a complete frame ($description)", ({ rolls }) => {
    // Arrange
    const frame = new Frame();
    const lastRoll = rolls.pop()!;

    for (const roll of rolls) {
      frame.roll(roll);
    }

    // Act
    const act = () => frame.roll(lastRoll);

    // Assert
    expect(act).toThrowError(/frame is complete/i);
  });
});
