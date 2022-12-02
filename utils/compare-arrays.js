export const compareArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false

  let index = array1.length
  while (index--) {
    if (array1[index] !== array2[index]) return false
  }
  return true
}
