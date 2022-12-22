export function createCube (size) {
  let cube = ''
  for (let i = 0, j = size * 2; i < size * 2; i++, j--) {
    cube += i < j
      ? ' '.repeat(size - i - 1) + '/' +
        '\\/'.repeat(i) + '\\_'.repeat(size) +
        '\\' +
        '\n'
      : ' '.repeat(size - j) +
        '\\' + '/\\'.repeat(j - 1) +
        '/_'.repeat(size) +
        '/' + (j === 1 ? '' : '\n')
  }
  return cube
}
