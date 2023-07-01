//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  if(str.length == 0){
    return false;
  }

  const alphabet = /[a-z]/gi;
  const uniqueLetters = new Set(str.toLowerCase().match(alphabet));
  const isPangram = uniqueLetters.size === 26 && [...uniqueLetters].every((char) => char >= 'a' && char <= 'z');
  return isPangram;
};
