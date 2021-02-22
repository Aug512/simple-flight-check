export default function datepickerDateFormatter() {
  const today = new Date()

  let [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()]

  month = month < 10 ? '0' + (month + 1) : month + 1
  day = day < 10 ? '0' + day : day

  return `${year}-${month}-${day}`
}
