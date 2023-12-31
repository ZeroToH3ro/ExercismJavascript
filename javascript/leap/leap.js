//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let result = false;

  if(year % 4 === 0){
    if(year % 100 === 0){
      result = year % 400 === 0;
    } else {
      result = true; //Divice by 4 but not divide 100
    }
  } else {
    result = false;
  }

  // return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return result;
}
