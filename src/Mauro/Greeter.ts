export class Greeter {
  private _getCurrentTime: Date;
  constructor(currentTime: Date) {
    this._getCurrentTime = currentTime;
  }

  greet(name: string) {
    const trimmedName = name.trim();
    const firstCapitalizedLetter = trimmedName.charAt(0).toUpperCase();
    const restTrimmedName = trimmedName.slice(1);
    const getHour = this._getCurrentTime.getHours();
    const response =
      getHour >= 6 && getHour <= 12
        ? "Good morning"
        : getHour >= 18 && getHour < 22
        ? "Good evening"
        : getHour >= 22 || getHour < 6
        ? "Good night"
        : "Hello";
    return `${response} ${firstCapitalizedLetter}${restTrimmedName}`;
  }
}
