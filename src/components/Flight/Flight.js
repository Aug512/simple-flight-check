import React from 'react'
import { connect } from 'react-redux'
import setFavourites from '../../redux/actionCreators/setFavourites'
import styles from './Flight.module.scss'

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

      <div className={styles.flightCard}>
        <div className={styles.airplaneImage} />
        <div className={styles.mainData}>
          <p className={styles.dataPlaces}>
            <span className={styles.from}>{`${flightData.origin.city} (${flightData.origin.airportCode})`}</span>
            <span className={styles.to}>{`${flightData.destination.city} (${flightData.destination.airportCode})`}</span>
          </p>
          <p className={styles.dataDate}>
            <span className={styles.date}>{flightData.departureTime[0]}</span>
            <span className={styles.time}>{flightData.departureTime[1]}</span>
          </p>
          <p className={styles.dataCarrier}>
            {flightData.carriers.length > 1 ? flightData.carriers.map(carrier => carrier.name) : flightData.carriers[0].name}
          </p>
        </div>
        <div className={styles.additionalData}>
          <div className={styles.favourites}>
            {flightData.isInFavourites && <i className={styles.favouritesTrue}
                onClick={() => setFavourites(flightData.id, !flightData.isInFavourites)}
            />}
            {!flightData.isInFavourites && <i className={styles.favouritesFalse} 
                onClick={() => setFavourites(flightData.id, !flightData.isInFavourites)}
            />}
          </div>
          <p className={styles.price}>
            <small className={styles.priceLabel}>Цена:</small>
            <strong className={styles.priceValue}>{`${flightData.minPrice} ${flightData.currency.currencySymbol}`}</strong>
          </p>
        </div>
      </div>

    // <div className={styles.flightCard}>                  { /* PERFECTPIXEL */}
    //   <div className={styles.airplaneImage} />
    //   <div className={styles.mainData}>
    //     <p className={styles.dataPlaces}>
    //       <span className={styles.from}>Moscow (SVO)</span>
    //       <span className={styles.to}>New York City (JFK)</span>
    //     </p>
    //     <p className={styles.dataDate}>
    //       <span className={styles.date}>28 June, 2020</span>
    //       <span className={styles.time}>14:50</span>
    //     </p>
    //     <p className={styles.dataCarrier}>Aeroflot</p>
    //   </div>
    //   <div className={styles.additionalData}>
    //     <div className={styles.favourites}>
    //       {/* {isFavourite && <i className={styles.favouritesTrue} />}
    //       {!isFavourite && <i className={styles.favouritesFalse} />} */}
    //       <i className={styles.favouritesTrue} />
    //     </div>
    //     <p className={styles.price}>
    //       <small className={styles.priceLabel}>Price:</small>
    //       <strong className={styles.priceValue}>23 924 Р</strong>
    //     </p>
    //   </div>
    // </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight)