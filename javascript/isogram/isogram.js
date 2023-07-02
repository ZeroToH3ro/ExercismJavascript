//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  const character = new Set();

  for(let i=0; i<word.length; i++){
    const char = word[i].toLowerCase();

    if(character.has(char) && (char !== " " && char !== "-")){
      return false;
    }

    character.add(char);
  }

  return true;
};
