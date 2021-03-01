import React from 'react'
import { connect } from 'react-redux'
import Flight from '../Flight/Flight'
import { fetchFlights } from '../../redux/actionCreators/setFlights'
import styles from './FlightsList.module.scss'

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
    <div className={styles.flightsList}>
      {flights.map( flight => <Flight key={flight.id} flightData={flight} />)}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsList)
