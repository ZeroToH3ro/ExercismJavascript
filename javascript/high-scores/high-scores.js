//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(listScore) {
    this.listScore = listScore;
  }

  get scores() {
    return this.listScore;
  }

  get latest() {
    return this.listScore[this.listScore.length - 1];
  }

  get personalBest() {
    return Math.max(...this.listScore);
  }

  get personalTopThree() {
    let scoreArrange = this.listScore.sort(function (a,b){
      return b-a;
    });
    return [scoreArrange[0], scoreArrange[1], scoreArrange[2]];
  }
}
