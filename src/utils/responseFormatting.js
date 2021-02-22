import months from '../utils/monthsLib'

const getCarriersById = (idsArr, carriersArr) => {
  return idsArr.map( id => {
    return carriersArr.find( carrier => carrier.CarrierId === id)
  })
}

const getPlaceById = (id, placesArr) => {
  const selectedPlace = placesArr.find( place => place.PlaceId === id)
  return (
    {
      city: selectedPlace.CityName,
      airportCode: selectedPlace.SkyscannerCode
    }
  )
}

function formatPriceValue( number, decimals = 2, decPoint = ',', thousandsSep = ' ' ) {  // Format a number with grouped thousands

  const i = parseInt(number = (+number || 0).toFixed(decimals)) + ''

  let sections
  ( sections = i.length ) > 3 ? ( sections = sections % 3 ) : sections = 0

  const thousands = (sections ? i.substr(0, sections) + thousandsSep : '')
  const ones = i.substr(sections).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep);
  const rest = decimals && ( i % 100 === 0 ) ? ( decPoint + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) ): ''

  return thousands + ones + rest;
}

const getCurrency = (responseCurrency) => {
  return(
    {
      decimalDigits: responseCurrency.DecimalDigits,
      decimalSeparator: responseCurrency.DecimalSeparator,
      currencySymbol: responseCurrency.Symbol,
      thousandsSeparator: responseCurrency.ThousandsSeparator
    }
  )
}

const concatDates = (departureDate, quoteCachedTime) => {
  const date = new Date(departureDate)
  const time = new Date(quoteCachedTime)

  const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()]
  const [hours, minutes] = [time.getHours(), time.getMinutes()]

  return [date, `${day} ${months[month]}, ${year} -- ${hours}:${minutes < 10 ? '0' + minutes : minutes}`]
}

export const getQuotes = (responseQuotes, rawResponse) => {
  return responseQuotes.map( quote => {
    return {
      id: quote.QuoteId,
      minPrice: formatPriceValue(quote.MinPrice, rawResponse.Currencies[0].DecimalDigits, rawResponse.Currencies[0].DecimalSeparator,rawResponse.Currencies[0].ThousandsSeparator),
      carriers: getCarriersById(quote.OutboundLeg.CarrierIds, rawResponse.Carriers),
      origin: getPlaceById(quote.OutboundLeg.OriginId, rawResponse.Places),
      destination: getPlaceById(quote.OutboundLeg.DestinationId, rawResponse.Places),
      currency: getCurrency(rawResponse.Currencies[0]),
      departureTime: concatDates(quote.OutboundLeg.DepartureDate, quote.QuoteDateTime), //Хардкод
      isInFavourites: false,
    }
  })
}
