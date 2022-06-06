export const generate = (n: number) => {
  const primeFactors: number[] = [];

  n > 1 && primeFactors.push(n);

  return primeFactors;
};
