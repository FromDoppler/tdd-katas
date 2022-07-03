import { range, sum } from "./utils";

const TOTAL_PINS = 10;
const FRAMES_IN_A_GAME = 10;
const MAX_ROLLS_IN_A_GAME = FRAMES_IN_A_GAME * 2 + 1;

function calculateFrameScore({ roll1, roll2, nextFrameRoll1 }) {
  const isSpare = roll1 + roll2 === TOTAL_PINS;
  return isSpare ? roll1 + roll2 + nextFrameRoll1 : roll1 + roll2;
}

export class BowlingGame {
  private currentRoll: number = 0;
  private rolls: number[] = range(MAX_ROLLS_IN_A_GAME).map(() => 0);

  roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
  }

  getFrameRelatedValues(frameIndex: number) {
    const roll1Index = frameIndex * 2;
    const roll2Index = roll1Index + 1;
    const nextFrameRoll1Index = roll2Index + 1;
    return {
      roll1: this.rolls[roll1Index],
      roll2: this.rolls[roll2Index],
      nextFrameRoll1: this.rolls[nextFrameRoll1Index],
    };
  }

  getScore(): number {
    return sum(
      range(FRAMES_IN_A_GAME)
        .map((frameIndex) => this.getFrameRelatedValues(frameIndex))
        .map(calculateFrameScore)
    );
  }
}
