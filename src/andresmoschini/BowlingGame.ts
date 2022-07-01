export class BowlingGame {
  score: number = 0;
  roll(pins: number) {
    this.score += pins;
  }
  getScore(): number {
    return this.score;
  }
}
