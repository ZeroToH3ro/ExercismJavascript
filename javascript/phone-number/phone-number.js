const US_PHONE_NUMBER_LENGTH = 10;
const US_COUNTRY_CODE = "1";
const US_INTERNATIONAL_PHONE_NUMBER_LENGTH =
    US_PHONE_NUMBER_LENGTH + US_COUNTRY_CODE.length;

export function clean(dirty) {
    if (/[a-z]/i.test(dirty)) {
        throw new Error("Letters not permitted");
    }
    if (/[@:!]/.test(dirty)) {
        throw new Error("Punctuations not permitted");
    }
    let clean = dirty.replace(/[^\d]+/g, "");
    if (clean.length > US_INTERNATIONAL_PHONE_NUMBER_LENGTH) {
        throw new Error(`More than ${US_INTERNATIONAL_PHONE_NUMBER_LENGTH} digits`);
    }

    if (clean.length === US_INTERNATIONAL_PHONE_NUMBER_LENGTH) {
        if (clean[0] !== US_COUNTRY_CODE) {
            throw new Error(
                `${US_INTERNATIONAL_PHONE_NUMBER_LENGTH} digits must start with ${US_COUNTRY_CODE}`
            );
        }
        clean = clean.slice(US_COUNTRY_CODE.length);
    }
    if (clean.length !== US_PHONE_NUMBER_LENGTH) {
        throw new Error("Incorrect number of digits");
    }
    if (clean[0] === "0") {
        throw new Error("Area code cannot start with zero");
    }
    if (clean[0] === "1") {
        throw new Error("Area code cannot start with one");
    }
    if (clean[3] === "0") {
        throw new Error("Exchange code cannot start with zero");
    }
    if (clean[3] === "1") {
        throw new Error("Exchange code cannot start with one");
    }
    return clean;
}
