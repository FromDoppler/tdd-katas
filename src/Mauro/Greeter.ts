export class Greeter {
  _getCurrentTime;
  constructor(currentTime: any) {
    this._getCurrentTime = currentTime;
  }

  greet(name: any) {
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
    console.log("greet called");
    return `${response} ${firstCapitalizedLetter}${restTrimmedName}`;
  }
}
