import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Authorisation from './components/Authorisation'
import MainContainer from './components/MainContainer'
import { fetchFlights } from './redux/actionCreators/setFlights'
import './App.css';

const mapStateToProps = state => {
  return {
    isUserAuthorised: state.isUserAuthorised,
    initialParams: state.initialRequestParams,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFlights: (params) => dispatch(fetchFlights(params)),
  }
}

function App({ isUserAuthorised, fetchFlights, initialParams }) {

  useEffect( () => {
    fetchFlights(initialParams)
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        {!isUserAuthorised && <Authorisation />}
        {isUserAuthorised && <MainContainer />}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
