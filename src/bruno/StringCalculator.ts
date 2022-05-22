export class StringCalculator {
  add(input: string) {
    if (this.isEmpty(input)) return 0;
    return parseInt(input);
  }

  isEmpty(input: string) {
    return input.length === 0;
  }
}
