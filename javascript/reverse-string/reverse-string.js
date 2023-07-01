//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
    if (str.length === 0){
        return "";
    }
    let result = "";
    for(let i=str.length ; i>0; i--){
        result += str[i-1];
    }
    return result;
};
