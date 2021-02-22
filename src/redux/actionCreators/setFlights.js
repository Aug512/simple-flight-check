import { FETCH_FLIGHTS, REQUESTED_FLIGHTS, REQUESTED_FLIGHTS_SUCCESS, REQUESTED_FLIGHTS_FALIURE } from '../actions/flights'

export const fetchFlights = (params) => {
  return { type: FETCH_FLIGHTS, params}
}

export const requestFlights = (params) => {
  return { type: REQUESTED_FLIGHTS, params}
}

export const requestFlightsSuccessful = ( payload ) => {
  return { type: REQUESTED_FLIGHTS_SUCCESS, payload}
}

export const requestFlightsError = (message) => {
  return { type: REQUESTED_FLIGHTS_FALIURE, message}
}
