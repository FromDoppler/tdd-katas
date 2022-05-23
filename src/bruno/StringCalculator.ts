export class StringCalculator {
  add(input: string) {
    const separatorRegex = /\n|,/;
    if (this.isEmpty(input)) return 0;
    const values: string[] = input.split(separatorRegex);
    const parsedInput = this.parseToInt(values);
    this.findNegativeValues(parsedInput);

    return this.parseToInt(values).reduce((sum, number) => sum + number, 0);
  }

  isEmpty(input: string) {
    return input.length === 0;
  }

  parseToInt(input: string[]): number[] {
    return input
      .map((stringValue: string) => parseInt(stringValue))
      .filter(Number);
  }

  findNegativeValues(input: number[]) {
    const negatives = input.filter((value) => value < 0);

    if (negatives.length > 0)
      throw new Error(`'${input}' => 'negatives not allowed: ${negatives}'`);
  }
}
