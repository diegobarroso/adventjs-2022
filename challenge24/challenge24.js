export function canExit (maze) {
  const R = maze.length
  const C = maze[0].length
  const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const visited = new Set()

  const inRange = (i, j) =>
    (i >= 0 && i < R && j >= 0 && j < C && maze[i][j] !== 'W')

  let start = [0, 0]
  let end = [0, 0]
  let found = 0

  maze.find((row, indexRow) => {
    // eslint-disable-next-line array-callback-return
    return row.find((el, indexCol) => {
      if (el === 'S') {
        start = [indexRow, indexCol]
        found++
      }

      if (el === 'E') {
        end = [indexRow, indexCol]
        found++
      }

      if (found === 2) return true
    })
  })

  const queue = [start]

  while (queue.length) {
    const [x, y] = queue.shift()
    if (x === end[0] && y === end[1]) return true

    for (const [dx, dy] of DIRS) {
      if (inRange(x + dx, y + dy)) {
        const nextPosition = [x + dx, y + dy]
        const key = nextPosition.join()
        if (!visited.has(key)) {
          visited.add(key)
          queue.push(nextPosition)
        }
      }
    }
  }
  return false
}
