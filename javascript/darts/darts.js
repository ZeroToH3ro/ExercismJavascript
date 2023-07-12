//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const distance = Math.sqrt(x * x + y * y);
  return distance <= 1 ? 10 : distance <= 5 ? 5 : distance <= 10 ? 1 : 0;
};
