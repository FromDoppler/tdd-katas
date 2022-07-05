class BowlingGame {
  rolls: number[] = new Array(21);
  currentRoll: number = 0;

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }

  score(): number {
    let frameIndex = 0;
    let total: number = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        total += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        total += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 1;
      }
    }
    return total;
  }

  isSpare = (frameIndex: number): boolean => {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  };
}

export default BowlingGame;
