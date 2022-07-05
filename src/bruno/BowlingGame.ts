class BowlingGame {
  rolls: number[] = new Array(21).fill(0);
  currentRoll: number = 0;

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }

  score(): number {
    let frameIndex = 0;
    let total: number = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        total += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        total += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        total += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return total;
  }

  isSpare = (frameIndex: number): boolean => {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  };

  isStrike = (frameIndex: number): boolean => {
    return this.rolls[frameIndex] === 10;
  };

  sumOfBallsInFrame = (frameIndex: number): number => {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  };

  spareBonus = (frameIndex: number): number => {
    return this.rolls[frameIndex + 2];
  };

  strikeBonus = (frameIndex: number): number => {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  };
}

export default BowlingGame;
