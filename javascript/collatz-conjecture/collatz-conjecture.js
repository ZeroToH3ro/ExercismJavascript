//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  let step = 0;

  if(number <= 0){
    throw new Error('Only positive numbers are allowed');
  }

  while(number !== 1){
    if(number % 2 === 0){
      number /= 2;
    } else {
      number = 3*number + 1;
    }
    step += 1;
  }

  return step;
};
