export const generate = (integer: number, current = []): number[] => {
  if (integer === 1) {
    return current;
  }

  if (isPrime(integer)) {
    return [...current, integer];
  }

  const dividers = getDividers(integer);
  const currentDivider = dividers[1];
  const residue = integer / currentDivider;
  return generate(residue, [...current, currentDivider]);
};

const getDividers = (integer): number[] => {
  const dividers = [];

  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};

const isPrime = (integer: number): boolean => {
  if (integer === 1 || integer === 2) {
    return false;
  }
  const dividers = getDividers(integer);
  return dividers.length === 2;
};
