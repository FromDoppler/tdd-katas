export const generate = (n: number) => {
  const primeFactors: number[] = [];

  if (n > 1) {
    if (n % 2 === 0) {
      primeFactors.push(2);
      n = n / 2;
    }

    n > 1 && primeFactors.push(n);
  }

  return primeFactors;
};
