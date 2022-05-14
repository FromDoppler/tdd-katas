export class StringCalculator {
  constructor() {}

  add(input: string) {
    const separators = [",", "\n"];

    const items =
      typeof input === "string"
        ? StringCalculator.split(separators, input)
        : // Not supported by the signature, but it is to make the function robust
          [input];

    const parsedItems = items.map(StringCalculator.parseItem);

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

  private static calculateResult(numbers: number[]) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  private static parseItem(item: any) {
    return {
      original: item,
      value:
        item === ""
          ? 0
          : typeof item === "number"
          ? item
          : typeof item === "string"
          ? parseInt(item)
          : NaN,
    };
  }

  private static split(separators: string[], input: string) {
    let aux = [input];
    for (const separator of separators) {
      aux = aux.flatMap((x) => x.split(separator));
    }
    return aux;
  }
}
