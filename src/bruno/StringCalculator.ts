// const delimiterRegex = /\n|,/;

export class StringCalculator {
  add(input: string) {
    if (this.isEmpty(input)) return 0;

    let delimiterRegex = new RegExp(`\\n|,`);
    const delimiter = this.findDelimiter(input);

    if (delimiter) {
      delimiterRegex = new RegExp(`\\n|,|${delimiter}`);
    }

    const values: string[] = input.split(delimiterRegex);

    const parsedInput = this.parseToInt(values);
    this.findNegativeValues(parsedInput);

    return this.ignoreGreaterThan(1000, parsedInput).reduce(
      (sum, number) => sum + number,
      0
    );
  }

  isEmpty(input: string) {
    return input.length === 0;
  }

  parseToInt(input: string[]): number[] {
    return input
      .map((stringValue: string) => parseInt(stringValue))
      .filter(Number);
  }

  findDelimiter(input: string): string {
    const firstLine = input.substring(0, input.indexOf("\n"));

    if (firstLine.substring(0, 2) === "//") return firstLine.substring(2);

    return "";
  }

  ignoreGreaterThan(param: number, input: number[]): number[] {
    return input.filter((value) => value <= param);
  }

  findNegativeValues(input: number[]) {
    const negatives = input.filter((value) => value < 0);

    if (negatives.length > 0)
      throw new Error(`'${input}' => 'negatives not allowed: ${negatives}'`);
  }
}
