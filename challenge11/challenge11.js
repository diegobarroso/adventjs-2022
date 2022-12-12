export function getCompleted (part, total) {
  const greatestCommonDivisor = (a, b) => {
    while (b !== 0) [a, b] = [b, a % b]
    return a
  }
  const partToSeconds = Number(part.slice(0, 2)) * 3600 +
    Number(part.slice(3, 5)) * 60 +
    Number(part.slice(6))
  const totalToSeconds = Number(total.slice(0, 2)) * 3600 +
    Number(total.slice(3, 5)) * 60 +
    Number(total.slice(6))
  const gcd = greatestCommonDivisor(partToSeconds, totalToSeconds)
  return `${partToSeconds / gcd}/${totalToSeconds / gcd}`
}
