//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  const stack = [];
  const openingSymbols = ['[', '{', '('];
  const closingSymbols = [']', '}', ')'];
  const matchingPairs = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingSymbols.includes(char)) {
      stack.push(char);
    } else if (closingSymbols.includes(char)) {
      const top = stack.pop();
      if (matchingPairs[char] !== top) {
        return false; // Mismatched closing symbol
      }
    }
  }

  return stack.length === 0;
};
