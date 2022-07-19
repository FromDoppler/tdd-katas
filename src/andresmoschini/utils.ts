export function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

export function repeat<T>(size: number, value: T) {
  return new Array(size).fill(value);
}

export function createCollection<T>(
  size: number,
  createValue: (index: number) => T
) {
  return range(size).map(createValue);
}

export function sum(arr: number[]) {
  return arr.reduce((p, c) => p + c, 0);
}
