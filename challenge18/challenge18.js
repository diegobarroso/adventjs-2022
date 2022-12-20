export function dryNumber (dry, numbers) {
  return Array.from({ length: numbers }, (_, i) => i + 1)
    .filter(n => String(n).includes(String(dry)))
}
