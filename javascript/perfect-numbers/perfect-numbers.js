//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
    if(number <= 0){
        throw new Error('Classification is only possible for natural numbers.');
    }

    if(isPrime(number) || number === 1){
        return "deficient";
    }

    let sumDigit = sumDigitNumbers(number);
    console.log(sumDigit);
    let result;

    if(number === sumDigit){
        result = "perfect";
    } else if (number < sumDigit){
        result = "abundant";
    } else if(number > sumDigit) {
        result = "deficient";
    }

    return result;
};

function isPrime(number) {
    if (number <= 1) return false;
    for(let i=2; i<=Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
function sumDigitNumbers(number){
    let result = [];
    let i = 1;
    while(i <= number){
        if(number % i === 0){
            result.push(i);
            i += 1;
        } else {
            i += 1;
        }
    }
    let sum = 0;

    for(let i=0; i<result.length; i++){
        if(number === result[i]){
            break;
        }
        sum += result[i];
    }
    return sum;
}
