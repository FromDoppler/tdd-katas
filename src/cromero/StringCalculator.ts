export class StringCalculator {
  add = (stringWithNumber: string) => {
    const matches = stringWithNumber.match(/(\d+)/g);
    let sum = 0;
    matches && matches.forEach((n: string) => {
      sum += parseInt(n);
    });
    return sum;
  };
}
