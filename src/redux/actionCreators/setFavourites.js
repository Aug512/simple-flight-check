import { ADD_FLIGHT_TO_FAVOURITES, REMOVE_FLIGHT_FROM_FAVOURITES } from '../actions/flights'

export default function setFavourites (id, boolState) {
  if (boolState) {
    return { type: ADD_FLIGHT_TO_FAVOURITES, id }
  } else {
    return { type: REMOVE_FLIGHT_FROM_FAVOURITES, id }
  }
}
