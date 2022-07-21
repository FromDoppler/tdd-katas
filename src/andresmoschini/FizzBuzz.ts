import { range } from "./utils";

export class FizzBuzz {
  generate(): string[] {
    return range(100, 1).map((i) => (i % 3 == 0 ? "Fizz" : i.toString()));
  }
}
