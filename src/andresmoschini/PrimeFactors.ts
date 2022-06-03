export function generate(n: number) {
  const factors = [];

  while (n > 1) {
    let factor = 2;
    while (factor <= n && n % factor !== 0) {
      factor++;
    }
    factors.push(factor);
    n = n / factor;
  }

  return factors;
}
