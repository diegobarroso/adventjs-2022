export function fitsInOneBox (boxes) {
  return boxes.sort((a, b) => a.l - b.l)
    .every((b, index) => index === boxes.length - 1
      ? true
      : b.l < boxes[index + 1].l && b.w < boxes[index + 1].w && b.h < boxes[index + 1].h)
}

/* Solution without sorting array
 * while (boxes.length > 1) {
    const lastBox = boxes.pop()
    if (!boxes.every(box =>
        (lastBox.l < box.l && lastBox.w < box.w && lastBox.h < box.h) ||
        (lastBox.l > box.l && lastBox.w > box.w && lastBox.h > box.h)
        ))
    return false
  }
  return true

  Solution without sorting array and without using while cycle
  return boxes.every((box, index, array) => {
    array.splice(index, 1)
    return array.every(b => (b.l < box.l && b.w < box.w && b.h < box.h) ||
        (b.l > box.l && b.w > box.w && b.h > box.h))
  })
 */
