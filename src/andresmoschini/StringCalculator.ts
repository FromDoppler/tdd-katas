export class StringCalculator {
  constructor() {}

  add(input: any) {
    const { separators = [",", "\n"], data } =
      StringCalculator.splitSeparatorsAndData(String(input));

    const items = StringCalculator.split(separators, data);

    const parsedItems = StringCalculator.parse(items);

    const { isValid, errors } = StringCalculator.validate(parsedItems);

    if (!isValid) {
      throw new Error(errors.join("; "));
    }

    const filteredParsedItems = parsedItems.filter((x) => x.value <= 1000);

    return StringCalculator.sum(filteredParsedItems);
  }

  private static validate(parsedItems: { original: string; value: number }[]) {
    const errors: string[] = [];

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

    return { isValid: !errors.length, errors };
  }

  private static splitSeparatorsAndData(input: string) {
    const [_, separator, data] = /^(?:\/\/([^\n]+)\n)?(.*)$/s.exec(input);
    return separator ? { separators: [separator], data } : { data };
  }

  private static sum(numbers: { original: string; value: number }[]) {
    return numbers.reduce((acc, cur) => acc + cur.value, 0);
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
