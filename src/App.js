import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Authorisation from './components/Authorisation/Authorisation'
import MainContainer from './components/MainContainer/MainContainer'
import { fetchFlights } from './redux/actionCreators/setFlights'

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
    <>
      {!isUserAuthorised && <Authorisation />}
      {isUserAuthorised && <MainContainer />}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
