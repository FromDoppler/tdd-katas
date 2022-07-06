import { createCollection, sum } from "./utils";

const FRAMES_COUNT = 10;

export class Frame {
  rolls: number[] = [];

  getScore() {
    return sum(this.rolls);
  }

  isComplete() {
    return this.rolls.length === 2;
  }

  roll(roll: number) {
    this.rolls.push(roll);
  }
}

export class BowlingGame {
  private currentFrameIndex = 0;
  private frames = createCollection(FRAMES_COUNT, () => new Frame());

  roll(pins: number) {
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
