export function getFilesToBackup (lastBackup, changes) {
  return changes
    .filter(change => change[1] > lastBackup)
    .map(change => change[0])
    .filter((id, index, array) => array.indexOf(id) === index)
    .sort((a, b) => a - b)
}
