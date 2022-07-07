import { createCollection, sum } from "./utils";

const PINES_COUNT = 10;
const FRAMES_COUNT = 10;

export class Frame {
  rolls: number[] = [];

  getScore() {
    if (!this.isComplete()) {
      throw new Error("frame is not complete");
    }
    return sum(this.rolls);
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
    return sum(this.frames.map((frame) => frame.getScore()));
  }
}
