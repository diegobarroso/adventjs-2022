export function sortToys (toys, positions) {
  return positions.map((pos, index) => ({ pos, name: toys[index] }))
    .sort((a, b) => a.pos - b.pos)
    .map(toy => toy.name)
}
