export function generate(n: number) {
  const factors = [];

  while (n > 1) {
    const factor = searchOneFactor(n);
    factors.push(factor);
    n = n / factor;
  }

  return factors;
}

function searchOneFactor(n: number) {
  let candidate = 2;
  while (n % candidate !== 0) {
    candidate++;
  }
  return candidate;
}

