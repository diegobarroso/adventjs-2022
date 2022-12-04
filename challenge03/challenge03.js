export function distributeGifts (packOfGifts, reindeers) {
  return Math.floor((
    reindeers.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0) * 2) /
    packOfGifts.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0))
}
