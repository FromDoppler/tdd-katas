export function generate(n: number) {
  const factors = [];

  while (n > 1) {
    const factor = n % 2 == 0 ? 2 : n % 3 == 0 ? 3 : n;
    factors.push(factor);
    n = n / factor;
  }

  return factors;
}
