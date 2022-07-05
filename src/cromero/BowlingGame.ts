export class BowlingGame {
  private rolls = [];

  roll(pin): void {
    if (this.rolls.length === 10) {
      return;
    }
    this.rolls.push(pin);
  }

  getScore(): number {
    let score = 0;
    this.rolls.forEach((pins) => {
      score += pins;
    });
    return score;
  }
}
