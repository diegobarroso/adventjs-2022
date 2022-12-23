export function checkJump (heights) {
  const indexOfMaxValue = heights.indexOf(Math.max(...heights))
  const leftOfMax = heights.slice(0, indexOfMaxValue)
  const rightOfMax = heights.slice(indexOfMaxValue + 1)

  return leftOfMax
    .every((_value, index, array) => index + 1 === indexOfMaxValue
      ? true
      : array[index] <= array[index + 1]) &&
      leftOfMax
        .some(value => value < heights[indexOfMaxValue]) &&
      rightOfMax
        .every((_value, index, array) => index + 1 === array.length
          ? true
          : array[index] >= array[index + 1]) &&
          rightOfMax
            .some(value => value < heights[indexOfMaxValue])
}
