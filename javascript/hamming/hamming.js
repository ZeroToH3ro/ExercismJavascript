//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (firstStr, secondStr) => {
    if(firstStr.length !== secondStr.length){
        throw new Error('strands must be of equal length');
    }

    let countDiff = 0;

    for(let i=0; i<firstStr.length; i++){
        if(firstStr[i] !== secondStr[i]){
            countDiff += 1;
        }
    }

    return countDiff;
};
