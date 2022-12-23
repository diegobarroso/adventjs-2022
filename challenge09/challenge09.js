
export function countTime (leds) {
  let seconds = 0
  while (leds.length !== leds.filter(led => led === 1).length) {
    leds = leds.map((led, index, array) => led === 1 ? 1 : index === 0 ? array[leds.length - 1] : array[index - 1])
    seconds += 7
  }
  return seconds
}
