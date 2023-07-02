//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  // Remove all non-digit characters
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  // Remove the country code (1) if present
  return cleanedNumber.startsWith('1') ? cleanedNumber.slice(1) : cleanedNumber;
};
