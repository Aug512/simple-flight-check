export default function fetchDataFromAPI(params) {
  return fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${params.country}/${params.currency}/${params.locale}/${params.origin}/${params.destination}/${params.date}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "97009c5c83mshd7fff0bb70f167cp1cde7bjsn25fb3318eb04",
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    }
  })
  .then( data => data.json())
}