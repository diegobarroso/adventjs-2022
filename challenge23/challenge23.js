export function executeCommands (commands) {
  const output = new Array(8).fill(0)
  for (let i = 0; i < commands.length; i++) {
    const [instruction, data] = commands[i].split(' ')
    const [value, destination] = data.split(',')
    switch (instruction) {
      case 'MOV':
        output[destination.charAt(2)] = value.includes('V')
          ? output[value.charAt(2)]
          : +value
        break
      case 'DEC':
        output[data.charAt(2)] = (output[data.charAt(2)] + 255) % 256
        break
      case 'INC':
        output[data.charAt(2)] = (output[data.charAt(2)] + 1) % 256
        break
      case 'ADD':
        output[value.charAt(2)] = (output[value.charAt(2)] +
          output[destination.charAt(2)]) % 256
        break
      case 'JMP':
        if (output[0] > 0) i = data - 1
        break
      default:
        break
    }
  }
  return output
}
