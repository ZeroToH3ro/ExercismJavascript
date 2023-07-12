//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  if(input.length === 0) return '';

  let result = "";
  let count = 1;

  for(let i=0; i<input.length-1; i++){
    if(input[i] === input[i+1]){
      count += 1;
    } else if(count === 1){
      result += String(input[i]);
    } else {
      result += String(count+input[i]);
      count = 1;
    }
  }

  if(count === 1){
    result += String(input[input.length -1]);
  } else {
    result += String(count+input[input.length -1]);
  }


  return result;
};

export const decode = (encoded) => {
  return encoded.replace(/([0-9]+)(.)/g, (_, y, z) => z.repeat(y));
};
