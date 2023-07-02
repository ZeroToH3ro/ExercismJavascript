//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const parse = (words) => {
    let tempArray = words.split(" ");
    let result = "";
    for (let i = 0; i < tempArray.length; i++) {
        let removeDash = "";
        if(tempArray[i].includes('-')){
            removeDash = tempArray[i].replace('-', ' ');
            let splitWord = removeDash.split(" ");
            for(let i=0; i<splitWord.length; i++){
                let removeCharacter = removeSpecialCharacters(splitWord[i]);
                if (removeCharacter.length === 0) {
                    continue;
                }
                result += removeCharacter.charAt(0).toUpperCase();
            }
        } else {
            let removeCharacter = removeSpecialCharacters(tempArray[i]);
            if (removeCharacter.length === 0) {
                continue;
            }
            result += removeCharacter.charAt(0).toUpperCase();
        }
    }
    return result;
}

function removeSpecialCharacters(word) {
    const regex = /[-!@#$%^&*(),.?":{}|<>_]/g;
    return word.replace(regex, " ");
}


const test = parse('Complementary metal-oxide semiconductor');

console.log(test);
