import BowlingGame from "./BowlingGame";

const rollMany = (n: number, pins: number) => {
  for (let index = 0; index < n; index++) {
    bowlingGame.roll(pins);
  }
};

let bowlingGame: BowlingGame;
beforeEach(() => {
  bowlingGame = new BowlingGame();
});

describe("BowlingGame", () => {
  it("should test a gutter game", () => {
    // Act
    rollMany(20, 0);
    // Assert
    expect(bowlingGame.score()).toEqual(0);
  });

  it("should test a all ones", () => {
    // Act
    rollMany(20, 1);

    // Assert
    expect(bowlingGame.score()).toEqual(20);
  });
});
