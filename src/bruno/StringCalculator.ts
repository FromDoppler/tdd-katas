export class StringCalculator {
  add(input: string) {
    if (this.isEmpty(input)) return 0;

    if (this.isCommaDelimited(input)) {
      const values = this.splitWithSeparator(input, ",");
      const numbers = this.parseToInt(values);
      return numbers[0] + numbers[1];
    }

    if (this.isNewLineDelimited(input)) {
      const values = this.splitWithSeparator(input, "\n");
      const numbers = this.parseToInt(values);
      return numbers[0] + numbers[1];
    }

    return parseInt(input);
  }

  isEmpty(input: string) {
    return input.length === 0;
  }

  isCommaDelimited(input: string): boolean {
    const separator = ",";
    const values = this.splitWithSeparator(input, separator);
    return values.length > 1 ? true : false;
  }

  isNewLineDelimited(input: string): boolean {
    const separator = "\n";
    const values = this.splitWithSeparator(input, separator);
    return values.length > 1 ? true : false;
  }

  parseToInt(inputArray: string[]): number[] {
    return inputArray.map((stringValue: string) => parseInt(stringValue));
  }

  splitWithSeparator(input: string, separator: string): string[] {
    return input.split(separator);
  }
}
