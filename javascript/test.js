const compute = (firstStr, secondStr) => {
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

const result = compute('GGACGGATTCTG', 'AGGACGGATTCT');
console.log(result);
