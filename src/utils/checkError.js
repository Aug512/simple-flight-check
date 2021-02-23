export default function checkError (response) {
  
  if (response.ok) return response.json()
  else {
    if (response.status === 400) {         // коды ошибок взяты с доки API (https://skyscanner.github.io/slate/#response-codes)
      return {
        isError: true,
        errorCode: response.status,
        message: 'Выбрана некорректная дата. Выберите дату вылета, не ранее текущей'
      }
    } else if (response.status === 429) {
      return {
        isError: true,
        errorCode: response.status,
        message: 'Слишком большое количество запросов за последнюю минуту. Попробуйте позже.'
      }
    } else if (response.status === 500) {
      return {
        isError: true,
        errorCode: response.status,
        message: 'Внутренняя ошибка сервера. Попробуйте позже.'
      }
    }
  }
}