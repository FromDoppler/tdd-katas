import { BowlingGame } from "./BowlingGame";

describe(BowlingGame.name, () => {
  it.each([{ functionName: "roll" }, { functionName: "getScore" }])(
    "should have $functionName function defined",
    ({ functionName }) => {
      // Arrange
      const sut = new BowlingGame();

      // Assert
      expect(sut).toHaveProperty(functionName);
      expect(sut[functionName]).toBeInstanceOf(Function);
    }
  );
});
