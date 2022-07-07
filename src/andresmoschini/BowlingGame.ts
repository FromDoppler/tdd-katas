import { createCollection, sum } from "./utils";

const PINES_COUNT = 10;
const FRAMES_COUNT = 10;

abstract class Frame {
  protected rolls: number[] = [];

  abstract getScore({
    nextFrame,
    nextNextFrame,
  }: {
    nextFrame: Frame | undefined;
    nextNextFrame: Frame | undefined;
  }): number;

  abstract getTwoRollsBonus({
    nextFrame,
  }: {
    nextFrame: Frame | undefined;
  }): number;

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
  constructor() {
    super();
  }

  getScore({
    nextFrame,
    nextNextFrame,
  }: {
    nextFrame: Frame;
    nextNextFrame: Frame | undefined;
  }) {
    if (!this.isComplete()) {
      throw new Error("frame is not complete");
    }
    const sumOfRolls = sum(this.rolls);

    const bonus = this.isStrike()
      ? nextFrame.getTwoRollsBonus({ nextFrame: nextNextFrame })
      : this.isSpare()
      ? nextFrame.getOneRollBonus()
      : 0;

    return sumOfRolls + bonus;
  }

  getTwoRollsBonus({ nextFrame }: { nextFrame: Frame | undefined }) {
    return this.isStrike()
      ? PINES_COUNT + nextFrame!.getOneRollBonus()
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
  private frames = [
    ...createCollection(FRAMES_COUNT - 1, () => new StandardFrame()),
    new LastFrame(),
  ];

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

    let score = 0;
    for (let i = 0; i < FRAMES_COUNT; i++) {
      const frame = this.frames[i];
      const nextFrame = this.frames[i + 1];
      const nextNextFrame = this.frames[i + 2];
      score += frame.getScore({ nextFrame, nextNextFrame });
    }

    return score;
  }
}
