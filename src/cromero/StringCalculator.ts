export class StringCalculator {
  add = (stringWithNumber: string) => {
    const matches = stringWithNumber.match(/(-\d|\d)+/g);
    let sum = 0;
    matches && matches.forEach((n: string) => {
      const nAsNumber = parseInt(n);
      if(nAsNumber > 1000){
        return;
      }
      if (nAsNumber < 0) {
        throw new Error("The string contains negatives numbers");
      }

      sum += nAsNumber;
    });
    return sum;
  };
}
