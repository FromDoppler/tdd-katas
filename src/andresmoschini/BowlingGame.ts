import { range, sum } from "./utils";

const TOTAL_PINS = 10;
const FRAMES_IN_A_GAME = 10;
const MAX_ROLLS_IN_A_GAME = FRAMES_IN_A_GAME * 2 + 1;

export class BowlingGame {
  private currentRoll: number = 0;
  private rolls: number[] = range(MAX_ROLLS_IN_A_GAME).map(() => 0);

  roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
  }

  getFrameScore(frameIndex: number) {
    const roll1Index = frameIndex * 2;
    const roll2Index = roll1Index + 1;
    const nextFrameRoll1Index = roll2Index + 1;
    const isSpare =
      this.rolls[roll1Index] + this.rolls[roll2Index] === TOTAL_PINS;
    return isSpare
      ? this.rolls[roll1Index] +
          this.rolls[roll2Index] +
          this.rolls[nextFrameRoll1Index]
      : this.rolls[roll1Index] + this.rolls[roll2Index];
  }

  getScore(): number {
    return sum(
      range(FRAMES_IN_A_GAME).map((frameIndex) =>
        this.getFrameScore(frameIndex)
      )
    );
  }
}
