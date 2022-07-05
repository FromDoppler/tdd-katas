export class BowlingGame {
  private rolls = [];
  private isStrikeBonus = false;

  roll(pin): void {
    if (this.rolls.length === 10) {
      return;
    }
    if (this.isStrikeBonus) {
      this.rolls.push(pin * 2);
      this.isStrikeBonus = false;
      return;
    }
    this.isStrikeBonus = pin === 10;
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
