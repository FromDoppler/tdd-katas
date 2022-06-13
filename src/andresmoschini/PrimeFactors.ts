export function generate(n: number) {
  const factors = [];

  while (n > 1) {
    let nextCandidate = 2;
    const factor = searchOneFactor({ n, startFrom: nextCandidate });
    factors.push(factor);
    n = n / factor;
    nextCandidate = factor;
  }

  return factors;
}

function searchOneFactor({ n, startFrom }: { n: number; startFrom: number }) {
  let candidate = startFrom;
  while (n % candidate !== 0) {
    candidate++;
  }
  return candidate;
}
