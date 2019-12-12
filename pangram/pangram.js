//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  let sentence = str.split('');

  return alphabet.every(letter => sentence.includes(letter))
};
