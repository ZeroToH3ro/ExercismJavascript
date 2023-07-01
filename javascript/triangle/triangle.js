export class Triangle {
  constructor(...sides) {
    const [a, b, c] = sides.sort();
    const inequality = a + b < c;

    this.isEquilateral = a !== 0 && a === b && b === c
    this.isIsosceles = !inequality && (a === b || b === c)
    this.isScalene = !inequality && a !== b && b !== c
  }
}
