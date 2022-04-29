export class Greeter {
  constructor() {}

  greet(name: string) {
    const trimmed = name.trim();
    const first = trimmed.slice(0, 1);
    const rest = trimmed.slice(1);
    return `Hello ${first.toUpperCase()}${rest}`;
  }
}
