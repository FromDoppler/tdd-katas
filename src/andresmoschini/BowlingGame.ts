import { range, repeat, sum } from "./utils";

const TOTAL_PINS = 10;
const FRAMES_IN_A_GAME = 10;
//const MAX_ROLLS_IN_A_GAME = FRAMES_IN_A_GAME * 2 + 1;

class Frame {
  readonly rolls: number[] = [];
  nextFrame: Frame | null = null;

  constructor(public readonly frameNumber: number) {}

  roll(roll: number): Frame {
    if (this.isComplete() && this.isLastFrame()) {
      throw new Error("Cannot roll when the game is over");
    } else if (this.isComplete()) {
      return (this.nextFrame = new Frame(this.frameNumber + 1).roll(roll));
    } else {
      this.rolls.push(roll);
      return this;
    }
  }

  isComplete(): boolean {
    return this.isStrike() || this.rolls.length === 2; // TODO: last frame?
  }

  getScore(): number {
    const sumOfRolls = sum(this.rolls);
    return this.isStrike()
      ? TOTAL_PINS + this.getStrikeBonus()
      : this.isSpare()
      ? TOTAL_PINS + this.getSpareBonus()
      : sumOfRolls;
  }

  getSpareBonus(): number {
    return this.nextFrame?.getOneRollScore() ?? 0;
  }

  getStrikeBonus(): number {
    return this.nextFrame?.getTwoRollScore() ?? 0;
  }

  getOneRollScore(): number {
    return this.rolls[0];
  }

  getTwoRollScore(): number {
    return (
      this.getOneRollScore() +
      (this.isStrike() ? this.getSpareBonus() : this.rolls[1])
    );
  }

  isStrike(): boolean {
    return this.rolls[0] === TOTAL_PINS;
  }

  isSpare(): boolean {
    return this.rolls[0] + this.rolls[1] === TOTAL_PINS;
  }

  isLastFrame(): boolean {
    return this.frameNumber === FRAMES_IN_A_GAME;
  }

  getGameScore(): number {
    return (
      this.getScore() + (this.nextFrame ? this.nextFrame.getGameScore() : 0)
    );
  }
}

export class BowlingGame {
  private firstFrame: Frame = new Frame(1);
  private lastFrame: Frame = this.firstFrame;

  roll(pins: number) {
    this.lastFrame = this.lastFrame.roll(pins);
  }

  getScore(): number {
    return this.firstFrame.getGameScore();
  }
}
