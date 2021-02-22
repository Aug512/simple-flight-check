export default function checkError (response) {
  
  if (response.ok) return response.json()
  else {
    if (response.status === 400) {
      return {
        isError: true,
        errorCode: response.status,
        message: 'Выбрана некорректная дата.\nВыберите дату вылета, не ранее текущей'
      }
    } else if (response.status === 429) {
      return {
        isError: true,
        errorCode: response.status,
        message: 'Слишком большое количество запросов за последнюю минуту.\nПопробуйте позже.'
      }
    } else if (response.status === 500) {
      return {
        isError: true,
        errorCode: response.status,
        message: 'Внутренняя ошибка сервера.\nПопробуйте позже.'
      }
    }
  }
}