function wrapping(gifts) {
  /* return gifts.map(gift => 
    '*'.repeat(gift.length + 2) +
    `\n*${gift}*\n` +
    '*'.repeat(gift.length + 2)) */
  const output = []
  gifts.forEach(gift => {
    output.push('*'.repeat(gift.length + 2) +
    `\n*${gift}*\n` +
    '*'.repeat(gift.length + 2))
  });
    
  return output
  }



const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)