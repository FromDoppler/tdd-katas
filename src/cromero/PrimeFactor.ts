export const generate = (input: number) => {
  if (input === 1) {
    return [];
  }
  if (input === 2) {
    return [2];
  }
  if (isPrime(input)) {
    return [input];
  }
};

const isPrime = (integer: number): boolean => {
  const multiples = [];
  if (integer === 1 || integer === 2) {
    return false;
  }

  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0) {
      multiples.push(i);
    }
  }
  return multiples.length === 2;
};
