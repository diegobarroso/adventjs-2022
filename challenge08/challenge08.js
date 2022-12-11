export function checkPart (part) {
  let partCopy = part.split('')
  for (let i = 0; i < part.length; i++) {
    if (partCopy.join('') === partCopy.reverse().join('')) return true
    partCopy = part.split('')
    partCopy.splice(i, 1)
  }
  return false
}
