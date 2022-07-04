import { range, repeat, sum } from "./utils";

const TOTAL_PINS = 10;
const FRAMES_IN_A_GAME = 10;
const MAX_ROLLS_IN_A_GAME = FRAMES_IN_A_GAME * 2 + 1;

function calculateFrameScore({ roll1, roll2, nextFrameRoll1, nextFrameRoll2 }) {
  const sumInFrame = roll1 + roll2;
  const isStrike = roll1 === TOTAL_PINS;
  const isSpare = !isStrike && sumInFrame === TOTAL_PINS;
  return isStrike
    ? sumInFrame + nextFrameRoll1 + nextFrameRoll2
    : isSpare
    ? sumInFrame + nextFrameRoll1
    : sumInFrame;
}

export class BowlingGame {
  private currentRoll: number = 0;
  private rolls: number[] = repeat(MAX_ROLLS_IN_A_GAME, 0);

  roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
    // if we rolls all pins at the first shot, we should move to the next frame
    if (pins === TOTAL_PINS && this.currentRoll % 2 === 1) {
      this.currentRoll++;
    }
  }

  getFrameRelatedValues(frameIndex: number) {
    const roll1Index = frameIndex * 2;
    const roll2Index = roll1Index + 1;
    const nextFrameRoll1Index = roll2Index + 1;
    const nextFrameRoll2Index = nextFrameRoll1Index + 1;
    return {
      roll1: this.rolls[roll1Index],
      roll2: this.rolls[roll2Index],
      nextFrameRoll1: this.rolls[nextFrameRoll1Index],
      nextFrameRoll2: this.rolls[nextFrameRoll2Index],
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
