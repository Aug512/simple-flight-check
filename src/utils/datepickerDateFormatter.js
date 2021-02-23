export function datepickerDateFormatter() {
  const today = new Date()

  let [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()]

  month = month < 10 ? '0' + (month + 1) : month + 1
  

  return `${year}-${month}-${day}`    // форматирование даты для записи в input[type="date"].value
}

export function dateToStringFormatter(date, lib) {

  const today = new Date(date)

  let [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()]

  day = day < 10 ? '0' + day : day

  return `${day} ${lib[month]} ${year}`   // форматирование даты для отображения, согласно макету
}
