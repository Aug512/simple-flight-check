import initialState from './initialState'
import { AUTHORISE, DEAUTHORISE } from './actions/authorisation'
import { REQUESTED_FLIGHTS, REQUESTED_FLIGHTS_SUCCESS, REQUESTED_FLIGHTS_FALIURE } from './actions/flights'
import { ADD_FLIGHT_TO_FAVOURITES, REMOVE_FLIGHT_FROM_FAVOURITES } from './actions/flights'

export default function reducer(state = initialState, action) {

  const toggleFavouriteState = (boolState) => {
    const flights = [ ...state.flights ]
    flights.find( flight => flight.id === action.id).isInFavourites = boolState
    return flights
  }
  
  switch(action.type) {
    case AUTHORISE:
      return {
        ...state,
        isUserAuthorised: true
      }
  
    case DEAUTHORISE:
      return {
        ...state,
        isUserAuthorised: false
      }

    case REQUESTED_FLIGHTS:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };

    case REQUESTED_FLIGHTS_SUCCESS:
      return {
        ...state,
        flights: action.payload,
        isLoading: false,
      };

    case REQUESTED_FLIGHTS_FALIURE:
      return {
        ...state,
        flights: [],
        isLoading: false,
        errorMessage: action.message,
      };

    case ADD_FLIGHT_TO_FAVOURITES:
      return {
        ...state,
        flights: toggleFavouriteState(true),
        favouritesFlightsCounter: state.favouritesFlightsCounter + 1,
        favouritesIds: [...state.favouritesIds, action.id]
      }
      
    case REMOVE_FLIGHT_FROM_FAVOURITES:
      return {
        ...state,
        flights: toggleFavouriteState(false),
        favouritesFlightsCounter: state.favouritesFlightsCounter - 1,
        favouritesIds: [...state.favouritesIds.filter(id => id !== action.id)]
      }
    
    default:
      return state
  }
}
