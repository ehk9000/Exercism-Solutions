//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  // Earth: orbital period 365.25 Earth days, or 31557600 seconds
  // if planet, seconds divided by oribal period 

  const earthYears = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  let yearsOld;
  const earthSeconds = 31557600
  if (planet === 'earth') {
    yearsOld = seconds / earthSeconds
  }
  if (planet === 'mercury') {
    yearsOld = seconds / earthSeconds
    yearsOld = yearsOld / earthYears[planet]
  }
  if (planet === 'venus') {
    yearsOld = seconds / earthSeconds
    yearsOld = yearsOld / earthYears[planet]
  }




  return Math.round(yearsOld * 100) / 100;
};
