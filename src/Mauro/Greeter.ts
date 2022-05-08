export class Greeter {
  constructor() {}

  greet(name: string) {
    const trimmedName = name.trim();
    return `Hello ${trimmedName}`;
  }
}
