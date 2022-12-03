export function countHours (year, holidays) {
  return holidays.filter(day => new Date(`${year}/${day}`).getDay() > 0 && new Date(`${year}/${day}`).getDay() < 6).length * 2
}
/* const year = 2022
const holidays = ['01/06', '04/01', '12/25']
console.log(countHours(year, holidays))
*/
