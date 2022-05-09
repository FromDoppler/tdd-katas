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
    let greeting = "Hello";
    if (this.time.getTime() >= 6 && this.time.getTime() <= 12) {
      greeting = "Good morning";
    } else if (this.time.getTime() >= 18 && this.time.getTime() <= 22) {
      greeting = "Good evening";
    }
    return `${greeting} ${name.trim()}`;
  }
}
