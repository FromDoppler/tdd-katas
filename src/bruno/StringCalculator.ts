export class StringCalculator {
  add(input: string) {
    const separatorRegex = /\n|,/;
    if (this.isEmpty(input)) return 0;

    const values: string[] = input.split(separatorRegex);

    return this.parseToInt(values).reduce((sum, number) => sum + number, 0);
  }

  isEmpty(input: string) {
    return input.length === 0;
  }

  parseToInt(inputArray: string[]): number[] {
    return inputArray
      .map((stringValue: string) => parseInt(stringValue))
      .filter(Number);
  }
}
