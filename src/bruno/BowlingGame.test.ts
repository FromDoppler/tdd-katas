import BowlingGame from "./BowlingGame";

const rollMany = (n: number, pins: number) => {
  for (let index = 0; index < n; index++) {
    bowlingGame.roll(pins);
  }
};

const rollSpare = () => {
  bowlingGame.roll(5);
  bowlingGame.roll(5);
};

const rollStrike = () => {
  bowlingGame.roll(10);
};

let bowlingGame: BowlingGame;
beforeEach(() => {
  // Arrange
  bowlingGame = new BowlingGame();
});

describe("BowlingGame", () => {
  it("should test a gutter game", () => {
    // Act
    rollMany(20, 0);
    // Assert
    expect(bowlingGame.score()).toEqual(0);
  });

  it("should test an all ones game", () => {
    // Act
    rollMany(20, 1);

    // Assert
    expect(bowlingGame.score()).toEqual(20);
  });

  it("should test one spare game", () => {
    // Act
    rollSpare();
    bowlingGame.roll(3);
    rollMany(17, 0);

    // Assert
    expect(bowlingGame.score()).toEqual(16);
  });

  it("should test one strike game", () => {
    // Act
    rollStrike();
    bowlingGame.roll(3);
    bowlingGame.roll(4);
    rollMany(16, 0);

    // Assert
    expect(bowlingGame.score()).toEqual(24);
  });

  it("should test perfect game", () => {
    // Act
    rollMany(12, 10);

    // Assert
    expect(bowlingGame.score()).toEqual(300);
  });
});
