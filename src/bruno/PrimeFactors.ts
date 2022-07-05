export const generate = (n: number) => {
  const primeFactors: number[] = [];

  if (!Number.isInteger(n)) {
    return [];
  }

  let divisor = 2;

  while (n > 1) {
    while (n % divisor === 0) {
      primeFactors.push(divisor);
      n = n / divisor;
    }
    divisor++;
  }

  return primeFactors;
};
