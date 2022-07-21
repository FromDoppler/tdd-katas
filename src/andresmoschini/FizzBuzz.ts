import { range } from "./utils";

export class FizzBuzz {
  generate(): string[] {
    return range(100, 1).map((i) =>
      i % 15 == 0
        ? "FizzBuzz"
        : i % 5 == 0
        ? "Buzz"
        : i % 3 == 0
        ? "Fizz"
        : i.toString()
    );
  }
}
