import { BowlingGame } from "./BowlingGame";

describe(BowlingGame.name, function () {
  it("should register pins by roll", function () {
    const game = new BowlingGame();
    game.roll(1);
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toEqual(4);
  });

  it("should calculate score with strikes bonus", function () {
    const game = new BowlingGame();
    game.roll(10);
    game.roll(5);
    game.roll(3);
    const score = game.getScore();
    expect(score).toEqual(26);
  });

  it("should calculate score with spare bonus", function () {
    const game = new BowlingGame();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(4);
    const score = game.getScore();
    expect(score).toEqual(20);
  });

  it("should get a extra rol in the 10th frame", function () {
    const game = new BowlingGame();
    game.roll(10);
    for (let i = 0; i < 19; i++) {
      game.roll(1);
    }
    const score = game.getScore();
    expect(score).toEqual(31);
  });

  it("should not has more than 3 roll in the 10th frame", function () {
    const game = new BowlingGame();
    game.roll(10);
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    const score = game.getScore();
    expect(score).toEqual(31);
  });
});
