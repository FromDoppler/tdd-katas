class BowlingGame {
  total: number = 0;

  roll(pins: number): void {
    this.total += pins;
  }

  score(): number {
    return this.total;
  }
}

export default BowlingGame;
