interface Frame {
  attempts: number;
  score: number;
  bonus: "strike" | "spare" | "none";
}

export class BowlingGame {
  private currentFrame: Frame;
  private frames: Frame[] = [];

  constructor() {
    this.currentFrame = { attempts: 0, bonus: "none", score: 0 };
  }

  roll(pin): void {
    this.currentFrame.score += pin;

    if (this.currentFrame.score === 10 && this.currentFrame.attempts === 0) {
      this.currentFrame.bonus = "strike";
      this.endFrame();
      return;
    }

    if (this.currentFrame.score === 10 && this.currentFrame.attempts === 1) {
      this.currentFrame.bonus = "spare";
      this.endFrame();
      return;
    }

    if (this.currentFrame.attempts === 1) {
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
        score += current.score * 2;
        break;
      }

      score += current.score;
    }
    return score;
  }

  private endFrame() {
    this.frames.push(this.currentFrame);
    this.currentFrame = { attempts: 0, bonus: "none", score: 0 };
  }
}
