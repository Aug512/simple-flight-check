import { requestFlights, requestFlightsError, requestFlightsSuccessful } from './actionCreators/setFlights'
import { FETCH_FLIGHTS } from './actions/flights'
import fetchDataFromAPI from '../utils/fetchDataFromAPI'
import { getQuotes } from '../utils/responseFormatting'
import { takeEvery, put, call} from 'redux-saga/effects'

export function* flightsFetchWatcher() {
  yield takeEvery(FETCH_FLIGHTS, fetchFlightsAsync)
}

function* fetchFlightsAsync({params}) {
  try {
    yield put(requestFlights(params))
    const data = yield call(() => {
      return fetchDataFromAPI(params)
    })
    yield put(requestFlightsSuccessful(getQuotes(data.Quotes, data)))
  } catch (error) {
    yield put(requestFlightsError('Проверьте корректность введённых данных и повторите запрос'))
  }
}