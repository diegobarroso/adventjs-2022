
export function selectSleigh (distance, sleighs) {
  return sleighs
    .filter(sleigh => sleigh.consumption * distance <= 20).length === 0
    ? null
    : sleighs
      .filter(sleigh => sleigh.consumption * distance <= 20)
      .map(sleigh => sleigh.name)
      .pop()
}
