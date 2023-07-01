//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (legacyData) => {
    const transformedData = {};

    for(const score in legacyData){
        const letters = legacyData[score];

        letters.forEach(letter => {
            transformedData[letter.toLowerCase()] = parseInt(score);
        })
    }

    return transformedData;
};
