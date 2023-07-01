class Squares {
    constructor(number) {
        this.number = number;
    }

    get sumOfSquares() {
        return Math.pow((this.number * (this.number + 1) / 2), 2);
    }

    get squareOfSum() {
        return this.number * (this.number + 1) * (2 * this.number + 1) / 6;
    }

    get difference() {
        return Math.abs(this.squareOfSum - this.sumOfSquares);
    }
}

let test = new Squares(5);
console.log(test.squareOfSum);
