//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.number = number;
  }

  get sumOfSquares() {
      return this.number * (this.number + 1) * (2 * this.number + 1) / 6;
  }

  get squareOfSum() {
      let totalNumber = (this.number - 1) + 1;
      let sumOfTotalNumber = (this.number + 1) * totalNumber / 2;
      return Math.pow(sumOfTotalNumber, 2);
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
