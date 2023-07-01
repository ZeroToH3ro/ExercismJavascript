function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const age = (planet, seconds) => {
  const earthAgeSeconds = 31557600;
  let ageSeconds = 0;
  const planetUppercase = capitalizeFirstLetter(planet);
  switch (planetUppercase) {
    case "Mercury":
      ageSeconds = seconds / (0.2408467 * earthAgeSeconds);
      break;
    case "Venus":
      ageSeconds = seconds / (0.61519726 * earthAgeSeconds);
      break;
    case "Mars":
      ageSeconds = seconds / (1.8808158 * earthAgeSeconds);
      break;
    case "Jupiter":
      ageSeconds = seconds / (11.862615 * earthAgeSeconds);
      break;
    case "Saturn":
      ageSeconds = seconds / (29.447498 * earthAgeSeconds);
      break;
    case "Uranus":
      ageSeconds = seconds / (84.016846 * earthAgeSeconds);
      break;
    case "Neptune":
      ageSeconds = seconds / (164.79132 * earthAgeSeconds);
      break;
    case "Earth":
      ageSeconds = seconds / earthAgeSeconds;
      break;
  }
  return parseFloat(ageSeconds.toFixed(2));
};

// const RATIO = {
//     mercury: 0.2408467,

//     venus: 0.61519726,

//     earth: 1,

//     mars: 1.8808158,

//     jupiter: 11.862615,

//     saturn: 29.447498,

//     uranus: 84.016846,

//     neptune: 164.79132,
//   },
//   EARTH_YEAR = 31557600;

// export function age(planet, seconds) {
//   return Number((seconds / EARTH_YEAR / RATIO[planet]).toFixed(2));
// }
