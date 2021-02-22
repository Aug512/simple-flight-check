import React from 'react'
import { connect } from 'react-redux'
import Flight from './Flight'
import { fetchFlights } from '../redux/actionCreators/setFlights'

const mapStateToProps = state => {
  return {
    flights: state.flights,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFlights: params => dispatch(fetchFlights(params)),
  }
}

const FlightsList = ({ flights }) => {

  return (
    <div>
      {flights.map( flight => <Flight key={flight.id} totalData={flights} flightData={flight} />)}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsList)
