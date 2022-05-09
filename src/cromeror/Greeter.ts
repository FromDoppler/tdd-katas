export class Greeter {
  constructor() {}

  greet(name: string) {
    name = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
    return `Hello ${name.trim()}`;
  }
}
