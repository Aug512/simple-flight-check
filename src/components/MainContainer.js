import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FlightsList from './FlightsList'
import { deauthorise } from '../redux/actionCreators/setAuthorisaton'
import { fetchFlights } from '../redux/actionCreators/setFlights'
import datepickerDateFormatter from '../utils/datepickerDateFormatter'

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    initialParams: state.initialRequestParams,
    favouritesCounter: state.favouritesFlightsCounter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deauthorise: () => dispatch(deauthorise()),
    fetchFlights: (params) => dispatch(fetchFlights(params)),
  }
}

function App({ deauthorise, isLoading, errorMessage, fetchFlights, initialParams, favouritesCounter}) {
  
  const logOut = () => {
    window.sessionStorage.removeItem('isAuthorised')
    deauthorise()
  }

  const fetchFlightsOnDate = newDate => {
    const newParams = {...initialParams}
    newParams.date = newDate
    fetchFlights(newParams)
  }

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={() => logOut()}>Quit</button>
        <input type='date' defaultValue={datepickerDateFormatter()} onChange={(e) => fetchFlightsOnDate(e.target.value)}/>
        {isLoading && <p>Loading...</p>}
        {/* {!isLoading && favouritesCounter !== 0 && <p>Added to favourites: <b>{favouritesCounter}</b> flights</p>}
        {!isLoading && !errorMessage && <FlightsList />}
        {!isLoading && errorMessage && <h3>{errorMessage}</h3>} */}
        {!isLoading && <>
          {favouritesCounter !== 0 && <p>Added to favourites: <b style={{color: 'blue'}}>{favouritesCounter}</b> flights</p>}
          {!errorMessage && <FlightsList />}
          {errorMessage && <h3>{errorMessage}</h3>}
        </>}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
