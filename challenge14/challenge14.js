export function getOptimalPath (path) {
  const helper = (i, j) => i === path.length
    ? 0
    : Math.min(helper(i + 1, j), helper(i + 1, j + 1)) + path[i][j]
  const result = helper(0, 0)
  return result
}
