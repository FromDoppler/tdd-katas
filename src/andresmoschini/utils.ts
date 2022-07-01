export function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

export function sum(arr: number[]) {
  return arr.reduce((p, c) => p + c, 0);
}
