import { requestFlights, requestFlightsError, requestFlightsSuccessful } from './actionCreators/setFlights'
import { FETCH_FLIGHTS } from './actions/flights'
import fetchDataFromAPI from '../utils/fetchDataFromAPI'
import { getQuotes } from '../utils/responseFormatting'
import { select, takeEvery, put, call} from 'redux-saga/effects'
import { monthsRU } from '../utils/monthsLib'

export function* flightsFetchWatcher() {
  yield takeEvery(FETCH_FLIGHTS, fetchFlightsAsync)
}

function* fetchFlightsAsync({params}) {
  try {
    yield put(requestFlights(params))
    const data = yield call(() => {
      return fetchDataFromAPI(params)
    })
    const state = yield select()
    yield put(requestFlightsSuccessful(getQuotes(data.Quotes, data, monthsRU, state)))
  } catch (error) {
    yield put(requestFlightsError(error.message))
  }
}