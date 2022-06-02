import { generate } from "./PrimeFactors";

describe(generate.name, () => {
  it.each([
    {
      scenario: "supported value",
      n: 1,
      expectedResult: [],
    },
    {
      scenario: "supported value",
      n: 2,
      expectedResult: [2],
    },
    {
      scenario: "supported value",
      n: 3,
      expectedResult: [3],
    },
    {
      scenario: "supported value",
      n: 4,
      expectedResult: [2, 2],
    },
    {
      scenario: "supported value",
      n: 5,
      expectedResult: [5],
    },
    {
      scenario: "supported value",
      n: 6,
      expectedResult: [2, 3],
    },
    {
      scenario: "supported value",
      n: 7,
      expectedResult: [7],
    },
    {
      scenario: "supported value",
      n: 8,
      expectedResult: [2, 2, 2],
    },
    {
      scenario: "unsupported value yet",
      n: 1234568789,
      expectedResult: [1234568789],
    },
    {
      scenario: "unsupported value yet",
      n: 30030,
      expectedResult: [2, 15015],
    },
    {
      scenario: "unsupported type",
      n: -1,
      expectedResult: [],
    },
    {
      scenario: "unsupported type",
      n: -2,
      expectedResult: [],
    },
    {
      scenario: "unsupported type",
      n: null,
      expectedResult: [],
    },
    {
      scenario: "unsupported type",
      n: undefined,
      expectedResult: [],
    },
    {
      scenario: "unsupported type",
      n: NaN,
      expectedResult: [],
    },
    {
      scenario: "unsupported type",
      n: "hola",
      expectedResult: [],
    },
  ])(
    "should return $expectedResult when n is $n ($scenario)",
    ({ n, expectedResult }: any) => {
      // Act
      const result = generate(n);

      // Assert
      expect(result).toEqual(expectedResult);
    }
  );
});
