export function getGiftsToRefill (a1, a2, a3) {
  return [...new Set(a1), ...new Set(a2), ...new Set(a3)]
    .filter((a, _i, array) => array.indexOf(a) === array.lastIndexOf(a))
}
