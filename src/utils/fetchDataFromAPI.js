import checkError from './checkError'

export default async function fetchDataFromAPI(params) {
  const response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${params.country}/${params.currency}/${params.locale}/${params.origin}/${params.destination}/${params.date}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "97009c5c83mshd7fff0bb70f167cp1cde7bjsn25fb3318eb04",
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    }
  })
  .then( data => checkError(data))

  if (response.hasOwnProperty('isError') && response.isError) {
    throw new Error(response.message)
  }

  return await response
}