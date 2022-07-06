interface Frame {
  attempts: number;
  bonus: "strike" | "spare" | "none";
  totalScore: number;
  score1: number;
  score2?: number;
}

export class BowlingGame {
  private currentFrame: Frame;
  private frames: Frame[] = [];

  constructor() {
    this.currentFrame = {
      attempts: 1,
      bonus: "none",
      score1: 0,
      totalScore: 0,
    };
  }

  roll(pin): void {
    this.currentFrame.totalScore += pin;
    this.currentFrame["score" + this.currentFrame.attempts] = pin;

    if (
      this.currentFrame.totalScore === 10 &&
      this.currentFrame.attempts === 1
    ) {
      this.currentFrame.bonus = "strike";
      this.endFrame();
      return;
    }

    if (
      this.currentFrame.totalScore === 10 &&
      this.currentFrame.attempts === 2
    ) {
      this.currentFrame.bonus = "spare";
      this.endFrame();
      return;
    }

    if (this.currentFrame.attempts === 2) {
      this.endFrame();
      return;
    }

    this.currentFrame.attempts++;
  }

  getScore(): number {
    let score = 0;
    for (let i = 0; i < this.frames.length; i++) {
      const current = this.frames[i];
      const hasStrikeBonus =
        i > 0 ? this.frames[i - 1].bonus === "strike" : false;
      if (hasStrikeBonus) {
        score += current.totalScore * 2;
        break;
      }

      const hasSpareBonus =
        i > 0 ? this.frames[i - 1].bonus === "spare" : false;
      if (hasSpareBonus) {
        score += current.score1 + current.totalScore;
        break;
      }

      score += current.totalScore;
    }
    return score;
  }

  private endFrame() {
    this.frames.push(this.currentFrame);
    this.currentFrame = {
      attempts: 1,
      bonus: "none",
      score1: 0,
      totalScore: 0,
    };
  }
}
