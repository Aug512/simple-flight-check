import getAuthorisation from '../utils/getAuthorisation'

const initialState = {
  isUserAuthorised: getAuthorisation(),
  isLoading: true,
  flights: [],
  favouritesFlightsCounter: 0,
  errorMessage: '',
  initialRequestParams: {
    country: 'RU',
    currency: 'rub',
    locale: 'RU-ru',
    origin: 'SVO-sky',
    destination: 'JFK-sky',
    date: '2021-02'
  }
}

export default initialState
