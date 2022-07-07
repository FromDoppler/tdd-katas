import { BowlingGame, StandardFrame } from "./BowlingGame";

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
    {
      description: "game with a spare",
      rolls: [4, 6, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //      ^^^^ spare
      expectedScore: 13,
    },
    {
      description: "game with a strike",
      rolls: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //      ^^ strike
      expectedScore: 10,
    },
    {
      description: "game with spaced strikes",
      rolls: [10, 0, 0, 10, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //      ^^        ^^        ^^ strikes
      expectedScore: 30,
    },
    {
      description: "game with strike and rolls",
      rolls: [10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //      ^^  strikes
      expectedScore: 14,
    },
    {
      description: "game with successive strikes",
      rolls: [10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      //      ^^  ^^  ^^ strikes
      expectedScore: 60,
    },
    {
      description: "last frame spare",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 1],
      //                                                            ^^^^ spare
      //                                                            ^^^^^^^ last frame
      expectedScore: 11,
    },
    {
      description: "last frame strike",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 1],
      //                                                            ^^ strike
      //                                                            ^^^^^^^^ last frame
      expectedScore: 12,
    },
    {
      description: "last frame double strike",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 1],
      //                                                            ^^  ^^ strikes
      //                                                            ^^^^^^^^^ last frame
      expectedScore: 21,
    },
    {
      description: "last frame triple strike",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
      //                                                            ^^  ^^  ^^ strikes
      //                                                            ^^^^^^^^^^ last frame
      expectedScore: 30,
    },
    {
      description: "frame 9 strike",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 1],
      expectedScore: 14,
    },
    {
      description: "frame 9 strike + frame 10 strike",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 1, 1],
      expectedScore: 33,
    },
    {
      description: "frame 9 strike + frame 10 triple strike",
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10],
      expectedScore: 60,
    },
    {
      description: "perfect game",
      rolls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      expectedScore: 300,
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
      // expect(game).toBe({});
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

describe(StandardFrame.name, () => {
  it.each([{ functionName: "roll" }, { functionName: "getScore" }])(
    "should have $functionName function defined",
    ({ functionName }) => {
      // Arrange
      const sut = new StandardFrame();

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
      const frame = new StandardFrame();
      for (const roll of rolls) {
        frame.roll(roll);
      }

      // Act
      const score = frame.getScore({
        nextFrame: new StandardFrame(),
        nextNextFrame: undefined,
      });

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
      const frame = new StandardFrame();
      for (const roll of rolls) {
        frame.roll(roll);
      }

      // Act
      const act = () =>
        frame.getScore({
          nextFrame: new StandardFrame(),
          nextNextFrame: undefined,
        });

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
    const frame = new StandardFrame();
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
