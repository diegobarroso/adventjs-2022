export function getMaxGifts (giftsCities, maxGifts, maxCities) {
  const getAllSubsets = giftsCities => giftsCities.reduce(
    (subsets, value) => subsets.concat(
      subsets.map(set => [value, ...set])), [[]])

  return Math.max(...getAllSubsets(giftsCities)
    .filter(subset => subset.length <= maxCities)
    .map(el => el.reduce((previous, value) => previous + value, 0))
    .filter(el => el <= maxGifts))
}
