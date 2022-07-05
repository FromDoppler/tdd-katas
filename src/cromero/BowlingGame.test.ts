import { BowlingGame } from "./BowlingGame";

describe(BowlingGame.name, function () {
  it("should register pins by roll", function () {
    const game = new BowlingGame();
    for (let i = 1; i <= 10; i++) {
      game.roll(1);
    }
    const score = game.getScore();
    expect(score).toEqual(10);
  });
});
