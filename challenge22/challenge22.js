export function checkStepNumbers (systemNames, stepNumbers) {
  return systemNames.every((name, index) => {
    const first = stepNumbers[index]
    const next = stepNumbers[systemNames.indexOf(name, index + 1)]
    return next ? first <= next : true
  })
}
