//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (input) => {
  const len = String(input).length;
  const armstrong = [...String(input)].reduce((sum, value) =>
    sum += Math.pow(value, len)
  , 0);

  return armstrong === input;
};
