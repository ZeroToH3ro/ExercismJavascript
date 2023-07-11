//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if(input.length === 0) return [];

  let maxLength = 0;
  const array = input
      .reverse()
      .map((s) => {
        maxLength = Math.max(s.length, maxLength);
        return s + " ".repeat(maxLength - s.length);
      })
      .reverse()
      .map((s) => [...s])

  return array[0].map((_, i) => array.map((r) => r[i])).map(r => r.join(''));
};
