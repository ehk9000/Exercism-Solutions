export const convert = (num) => {
  let rainSounds = '';

  if (num % 3 == 0) {
    rainSounds += 'Pling';
  }
  if (num % 5 == 0) {
    rainSounds += 'Plang';
  }
  if (num % 7 == 0) {
    rainSounds += 'Plong';
  }

  if (num % 3 && num % 5 && num % 7) {
    rainSounds =+ num
  }

  return rainSounds.toString()
};
