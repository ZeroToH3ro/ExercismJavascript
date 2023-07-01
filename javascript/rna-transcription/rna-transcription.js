//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (x) => {
  let rna = x.split('');
  for(let i=0; i < rna.length; i++){
    switch(rna[i]){
      case "G":
       rna[i] = "C";
       break;
      case "C":
        rna[i] = "G";
        break;
      case "T":
        rna[i] = "A";
        break;
      case "A":
        rna[i] = "U";
        break;
      default:
        rna[i] = "";
      }
  }
  return rna.join("");
};
