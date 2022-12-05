export function fitsInOneBox (boxes) {
  return boxes.sort((a, b) => a.l - b.l)
    .every((b, index) => index === boxes.length - 1
      ? true
      : b.l < boxes[index + 1].l && b.w < boxes[index + 1].w && b.h < boxes[index + 1].h)
}
