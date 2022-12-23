export function decorateTree (base) {
  const topChar = (leftChar, rightChar) => {
    if (leftChar === rightChar) return leftChar
    if (!(leftChar + rightChar).includes('B')) return 'B'
    if (!(leftChar + rightChar).includes('P')) return 'P'
    return 'R'
  }
  const output = [base]
  for (let i = 0; i < base.split(' ').length - 1; i++) {
    const downDecoration = output[0].split(' ')
    let newLine = ''
    for (let j = 0; j < downDecoration.length - 1; j++) {
      newLine += topChar(downDecoration[j], downDecoration[j + 1])
      newLine += j < downDecoration.length - 2 ? ' ' : ''
    }
    output.unshift(newLine)
  }
  return output
}
