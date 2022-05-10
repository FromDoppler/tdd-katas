interface Time {
  getTime: () => number;
}

export class Greeter {
  private time: Time;
  private readonly log: (str: string) => void | any;

  constructor(time: Time, log:(str: string) =>
    void) {
    this.time = time;
    this.log = log;
  }

  greet(name: string) {
    name = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
    let greeting = "Hello";
    if (this.time.getTime() >= 6 && this.time.getTime() <= 12) {
      greeting = "Good morning";
    } else if (this.time.getTime() >= 18 && this.time.getTime() <= 22) {
      greeting = "Good evening";
    } else if (
      this.time.getTime() >= 22.01 && this.time.getTime() <= 24
      || this.time.getTime() >= 0 && this.time.getTime() <= 5.99
    ) {
      greeting = "Good night";
    }
    return `${greeting} ${name.trim()}`;
  }
}
