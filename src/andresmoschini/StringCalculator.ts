export class StringCalculator {
  constructor() {}

  add(input: any) {
    const { separators = [",", "\n"], data } =
      StringCalculator.splitSeparatorsAndData(`${input}`);

    const items = StringCalculator.split(separators, data);

    const parsedItems = StringCalculator.parse(items);

    const errors = StringCalculator.validate(parsedItems);

    if (errors.length > 0) {
      throw new Error(errors.join("; "));
    }

    const numbers = parsedItems.map((x) => x.value).filter((x) => x <= 1000);

    return StringCalculator.calculateResult(numbers);
  }

  private static validate(parsedItems: { original: any; value: number }[]) {
    const errors = [];

    const nanItems = parsedItems
      .filter((x) => isNaN(x.value))
      .map((x) => x.original);

    if (nanItems.length > 0) {
      errors.push(`not parsable values: ${nanItems.join(",")}`);
    }

    const negativeItems = parsedItems
      .filter((x) => x.value < 0)
      .map((x) => x.value);

    if (negativeItems.length > 0) {
      errors.push(`negatives not allowed: ${negativeItems.join(",")}`);
    }

    return errors;
  }

  private static splitSeparatorsAndData(input: string) {
    const [_, separator, data] = /^(?:\/\/([^\n]+)\n)?(.*)$/s.exec(input);
    return separator ? { separators: [separator], data } : { data };
  }

  private static calculateResult(numbers: number[]) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  private static parse(items: string[]) {
    return items.map((x) => ({
      original: x,
      value: x === "" ? 0 : parseInt(x),
    }));
  }

  private static split(separators: string[], input: string) {
    let aux = [input];
    for (const separator of separators) {
      aux = aux.flatMap((x) => x.split(separator));
    }
    return aux;
  }
}
