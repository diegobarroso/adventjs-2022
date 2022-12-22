export function printTable (gifts) {
  const giftTitle = 'Gift'
  const quantityTitle = 'Quantity'
  const maxLengthName = Math.max(
    giftTitle.length,
    ...gifts.map(gift => gift.name.length))
  const maxLengthQuantity = Math.max(
    quantityTitle.length,
    ...gifts.map(gift => String(gift.quantity).length))

  let giftString = ''
  gifts.forEach(gift => {
    giftString += '| ' + gift.name +
      ' '.repeat(maxLengthName - gift.name.length) +
      ' | ' +
      gift.quantity +
      ' '.repeat(maxLengthQuantity - String(gift.quantity).length) +
      ' |\n'
  })

  const titleString = '| ' + giftTitle +
    ' '.repeat(maxLengthName - giftTitle.length) +
    ' | ' + quantityTitle +
    ' '.repeat(maxLengthQuantity - quantityTitle.length) +
    ' |\n'

  return '+'.repeat(maxLengthName + maxLengthQuantity + 7) + '\n' +
    titleString +
    `| ${'-'.repeat(maxLengthName)} | ${'-'.repeat(maxLengthQuantity)} |\n` +
    giftString +
    '*'.repeat(maxLengthName + maxLengthQuantity + 7)
}
