import { createCollection, sum } from "./utils";

const PINES_COUNT = 10;
const FRAMES_COUNT = 10;

export class Frame {
  rolls: number[] = [];

  getScore({
    nextFrame,
    nextNextFrame,
  }: {
    nextFrame: Frame | undefined;
    nextNextFrame: Frame | undefined;
  }) {
    if (!this.isComplete()) {
      throw new Error("frame is not complete");
    }
    const sumOfRolls = sum(this.rolls);

    // TODO: encapsulate nextFrame and nextNextFrame rolls
    const bonus =
      this.isStrike() && nextFrame!.isStrike()
        ? PINES_COUNT + nextNextFrame!.rolls[0]
        : this.isStrike()
        ? sum(nextFrame!.rolls)
        : this.isSpare()
        ? nextFrame!.rolls[0]
        : 0;

    return sumOfRolls + bonus;
  }

  isSpare() {
    return this.rolls.length === 2 && sum(this.rolls) === PINES_COUNT;
  }

  isStrike() {
    return this.rolls.length === 1 && this.rolls[0] === PINES_COUNT;
  }

  isComplete() {
    return this.isStrike() || this.rolls.length === 2;
  }

  roll(roll: number) {
    if (this.isComplete()) {
      throw new Error("frame is complete");
    }
    this.rolls.push(roll);
  }
}

export class BowlingGame {
  private currentFrameIndex = 0;
  private frames = createCollection(FRAMES_COUNT, () => new Frame());

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
