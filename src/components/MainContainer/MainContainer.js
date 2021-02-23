import React from 'react'
import { connect } from 'react-redux'
import Carousel from '../Carousel/Carousel'
import CardHeader from '../CardHeader/CardHeader'
import FlightsList from '../FlightsList/FlightsList'
import { deauthorise } from '../../redux/actionCreators/setAuthorisaton'
import styles from './MainContainer.module.scss'

const mapStateToProps = state => {
  return {
    errorMessage: state.errorMessage,
    favouritesCounter: state.favouritesFlightsCounter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deauthorise: () => dispatch(deauthorise()),
  }
}

function App({ deauthorise, isLoading, favouritesCounter, errorMessage }) {
  
  const logOut = () => {
    window.sessionStorage.removeItem('isAuthorised')
    deauthorise()
  }

  return (
    <div className={styles.MainContainer}>
      <button onClick={() => logOut()} className={styles.logOutButton}>Выйти</button>

      <div className={styles.card}>
        <CardHeader />
        <Carousel />

        <p className={styles.favourites}>
          Добавлено в Избранное: <b style={{color: 'blue'}} className={styles.favouritesCounter}>{favouritesCounter}</b> рейсов
        </p>
        
        {isLoading && <div className={styles.loaderContainer}>
          <div class={styles.ldsRipple}><div></div><div></div></div>      {/* loading.io */}
        </div>}
        {!isLoading && <FlightsList />}

        {!isLoading && errorMessage && <div className={styles.errorBox}>
          {errorMessage.split('.').map(str => <h3 key={str} className={styles.errorString}>{str}.</h3>)}
        </div>}

      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
