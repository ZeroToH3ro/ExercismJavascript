//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (targetWord, wordLists) => {
    targetWord = targetWord.toLowerCase().replace(/\s/g, "").trim();
    const sortedTarget = targetWord.split("").sort().join("");

    const anagrams = [];
    for (let i = 0; i < wordLists.length; i++) {
        let word = wordLists[i].toLowerCase().replace(/\s/g, "").trim();
        const sortedWord = word.split("").sort().join("");

        if(targetWord.toLowerCase() === wordLists[i].toLowerCase()){
            continue;
        }

        if (sortedWord === sortedTarget) {
            anagrams.push(wordLists[i]);
        }
    }

    return anagrams;
};
