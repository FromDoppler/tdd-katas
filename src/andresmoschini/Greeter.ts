interface GreeterDependencies {
  getCurrentDateTime: () => Date;
}

export class Greeter {
  private readonly _getCurrentDateTime: () => Date;

  constructor({ getCurrentDateTime }: GreeterDependencies) {
    this._getCurrentDateTime = getCurrentDateTime;
  }

  greet(name: string) {
    const trimmed = name.trim();
    const first = trimmed.slice(0, 1);
    const rest = trimmed.slice(1);
    const sanitizedName = `${first.toUpperCase()}${rest}`;

    const currentTime = this._getCurrentDateTime();
    const currentHour = currentTime.getUTCHours();
    const greeting =
      currentHour >= 6 && currentHour < 12
        ? "Good morning"
        : currentHour >= 18 && currentHour < 22
        ? "Good evening"
        : currentHour >= 22 || currentHour < 6
        ? "Good night"
        : "Hello";

    return `${greeting} ${sanitizedName}`;
  }
}
