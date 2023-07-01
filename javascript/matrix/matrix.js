//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(_matrix) {
    this.rows = _matrix
      .split("\n")
      .map((r) => r.split(" ").map((n) => Number(n)));
    this.columns = this.rows[0].map((_, i) => this.rows.map((r) => r[i]));
  }
}