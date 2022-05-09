export class Greeter {
  constructor() {}

  greet(name: string) {
    const trimmedName = name.trim();
    const firstCapitalizedLetter = trimmedName.charAt(0).toUpperCase();
    const restTrimmedName = trimmedName.slice(1);
    return `Hello ${firstCapitalizedLetter}${restTrimmedName}`;
  }
}
