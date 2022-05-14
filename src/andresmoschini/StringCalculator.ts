export class StringCalculator {
  constructor() {}

  add(input: string) {
    if (input === "") {
      return 0;
    }

    return parseInt(input);
  }
}
