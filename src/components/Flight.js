import React from 'react'
import { connect } from 'react-redux'
import setFavourites from '../redux/actionCreators/setFavourites'

const mapStateToProps = (state, ownProps) => {
  return {
    flightData: ownProps.flightData,
    totalData: state.flights,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFavourites: (id, boolState) => dispatch(setFavourites(id, boolState))
  }
}

const Flight = ({ flightData, setFavourites}) => {

  return (
    <div style={{border: '1px solid black', marginBottom: '1rem'}}>
      <p>
        <span id='from'>{flightData.origin.city + ' (' + flightData.origin.airportCode})</span>
          ---{'>'}
        <span id='to'>{flightData.destination.city + ' (' + flightData.destination.airportCode + ')'}</span>
      </p>
      <p>{flightData.departureTime.toString()}</p>
      <p>{flightData.carriers.map(carrier => <span key={carrier.CarrierId}>{carrier.Name}</span>)}</p>
      <strong>{flightData.minPrice}</strong>
      <input type='checkbox'
        checked={flightData.isInFavourites} 
        onChange={() => setFavourites(flightData.id, !flightData.isInFavourites)}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight)