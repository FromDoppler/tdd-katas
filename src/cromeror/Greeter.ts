interface Time {
  getTime: () => number;
}

export class Greeter {
  private time: Time;

  constructor(time: Time) {
    this.time = time;
  }

  greet(name: string) {
    name = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
    return `Hello ${name.trim()}`;
  }
}
