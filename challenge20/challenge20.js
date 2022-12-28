export function howManyReindeers (reindeerTypes, gifts) {
  const output = []
  gifts.forEach(gift => {
    let weight = gift.weight
    const country = {
      country: gift.country,
      reindeers: reindeerTypes
        .sort((a, b) => b.weightCapacity - a.weightCapacity)
        .map(reinder => ({ type: reinder.type, num: 0 }))
    }

    while (weight > 0) {
      for (let i = reindeerTypes.length - 1; i >= 0; i--) {
        if (weight >= reindeerTypes[i].weightCapacity) {
          country.reindeers[i].num++
          weight -= reindeerTypes[i].weightCapacity
        }
      }
    }
    country.reindeers = country.reindeers.filter(reindeer => reindeer.num > 0)
    output.push(country)
  })
  return output
}
