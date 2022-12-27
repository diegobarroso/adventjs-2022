export function carryGifts (gifts, maxWeight) {
  gifts = gifts.filter(gift => gift.length <= maxWeight)
  if (gifts.length === 0) return []
  const output = []
  let aux = ''
  gifts.forEach((gift) => {
    if (aux.replace(/\s+/g, '').length +
        gift.length <= maxWeight) aux += ` ${gift}`
    else {
      output.push(aux.trim())
      aux = gift
    }
  })
  output.push(aux.trim())
  return output
}
