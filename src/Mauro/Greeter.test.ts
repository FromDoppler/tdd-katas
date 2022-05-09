import { Greeter } from "./Greeter";

describe("Greeter.greet", () => {
  it("should return 'Good morning <name>' when the time is 06:00-12:00", () => {
    // arrange
    const currentTime = new Date("2022-05-08T06:00:00");
    const greeter = new Greeter(currentTime);

    // act
    const result = greeter.greet("mauro");

    // assert
    expect(result).toBe("Good morning Mauro");
  });

  it("should return 'Good evening <name>' when the time is 18:00-22:00", () => {
    // arrange
    const currentTime = new Date("2022-05-08T18:00:00");
    const greeter = new Greeter(currentTime);

    // act
    const result = greeter.greet("mauro");

    // assert
    expect(result).toBe("Good evening Mauro");
  });

  it("should return 'Good night <name>' when the time is 22:00-06:00", () => {
    // arrange
    const currentTime = new Date("2022-05-08T05:59:00");
    const greeter = new Greeter(currentTime);

    // act
    const result = greeter.greet("mauro");

    // assert
    expect(result).toBe("Good night Mauro");
  });

  it("should log into console when function its called", () => {
    // arrange
    const currentTime = new Date("2022-05-08T05:59:00");
    const greeter = new Greeter(currentTime);
    console.log = jest.fn();

    // act
    const result = greeter.greet("mauro");

    // assert
    expect(console.log).toHaveBeenCalledWith("greet called");
  });
});
