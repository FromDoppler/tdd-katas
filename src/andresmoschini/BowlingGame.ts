import { createCollection, sum } from "./utils";

const PINES_COUNT = 10;
const FRAMES_COUNT = 10;

abstract class Frame {
  protected rolls: number[] = [];

  abstract getScore(): number;

  abstract getTwoRollsBonus(): number;

  getOneRollBonus() {
    return this.rolls[0];
  }

  abstract isComplete(): boolean;

  isSpare() {
    return (
      this.rolls.length >= 2 && this.rolls[0] + this.rolls[1] === PINES_COUNT
    );
  }

  isStrike() {
    return this.rolls.length >= 1 && this.rolls[0] === PINES_COUNT;
  }

  roll(roll: number) {
    if (this.isComplete()) {
      throw new Error("frame is complete");
    }
    this.rolls.push(roll);
  }
}

export class StandardFrame extends Frame {
  constructor(private nextFrame: Frame) {
    super();
  }

  getScore() {
    if (!this.isComplete()) {
      throw new Error("frame is not complete");
    }
    const sumOfRolls = sum(this.rolls);

    const bonus = this.isStrike()
      ? this.nextFrame.getTwoRollsBonus()
      : this.isSpare()
      ? this.nextFrame.getOneRollBonus()
      : 0;

    return sumOfRolls + bonus;
  }

  getTwoRollsBonus() {
    return this.isStrike()
      ? PINES_COUNT + this.nextFrame.getOneRollBonus()
      : this.rolls[0] + this.rolls[1];
  }

  isComplete() {
    return this.isStrike() || this.rolls.length === 2;
  }
}

export class LastFrame extends Frame {
  isComplete(): boolean {
    return (
      this.rolls.length === 3 ||
      (!this.isSpare() && !this.isStrike() && this.rolls.length === 2)
    );
  }

  getScore() {
    if (!this.isComplete()) {
      throw new Error("frame is not complete");
    }
    const sumOfRolls = sum(this.rolls);

    return sumOfRolls;
  }

  getTwoRollsBonus() {
    return this.rolls[0] + this.rolls[1];
  }
}

export class BowlingGame {
  private currentFrameIndex = 0;
  private frames: Frame[] = [];

  constructor() {
    let nextFrame = new LastFrame();
    this.frames.unshift(nextFrame);
    for (let i = 0; i < FRAMES_COUNT - 1; i++) {
      nextFrame = new StandardFrame(nextFrame);
      this.frames.unshift(nextFrame);
    }
  }

  roll(pins: number) {
    if (this.currentFrameIndex >= FRAMES_COUNT) {
      throw new Error("game is complete");
    }

    const currentFrame = this.frames[this.currentFrameIndex];

    currentFrame.roll(pins);

    if (currentFrame.isComplete()) {
      this.currentFrameIndex++;
    }
  }
  getScore(): number {
    if (this.currentFrameIndex < FRAMES_COUNT) {
      throw new Error("game is not complete");
    }

    return sum(this.frames.map((frame) => frame.getScore()));
  }
}
