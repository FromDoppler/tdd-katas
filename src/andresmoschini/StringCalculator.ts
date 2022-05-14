export class StringCalculator {
  constructor() {}

  add(input: string) {
    const items =
      typeof input === "string"
        ? StringCalculator.split(input)
        : // Not supported by the signature, but it is to make the function robust
          [input];

    const numbers = items.map(StringCalculator.parseItem);

    return StringCalculator.calculateResult(numbers);
  }

  private static calculateResult(numbers: number[]) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  private static parseItem(item: any) {
    return item === ""
      ? 0
      : typeof item === "number"
      ? item
      : typeof item === "string"
      ? parseInt(item)
      : NaN;
  }

  private static split(input: string) {
    return input.split(",").flatMap((x) => x.split("\n"));
  }
}
