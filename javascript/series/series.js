export class Series {
  constructor(series) {
    if (series === "") throw new Error("series cannot be empty");

    this.series = series;
  }

  get digits() {
    //convert string number into integer number
    return [...this.series].map(Number);
  }

  slices(sliceLength) {
    if (sliceLength < 0) throw new Error("slice length cannot be negative");

    if (sliceLength === 0) throw new Error("slice length cannot be zero");

    if (sliceLength > this.digits.length)
      throw new Error("slice length cannot be greater than series length");

    return this.digits
        //map: current value, current index, array
      .map((digit, index, digits) => digits.slice(index, index + sliceLength))

      .filter((s) => s.length === sliceLength);
  }
}
