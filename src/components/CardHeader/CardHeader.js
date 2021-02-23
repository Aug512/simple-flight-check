import React from 'react'
import { connect } from 'react-redux'
import { datepickerDateFormatter , dateToStringFormatter } from '../../utils/datepickerDateFormatter'
import { fetchFlights } from '../../redux/actionCreators/setFlights'
import { monthsRU } from '../../utils/monthsLib'
import styles from './CardHeader.module.scss'

const mapStateToProps = state => {
  return {
    initialParams: state.initialRequestParams,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFlights: (params) => dispatch(fetchFlights(params)),
  }
}

const CardHeader = ({ initialParams, fetchFlights }) => {

  const fetchFlightsOnDate = newDate => {
    const newParams = {...initialParams}
    newParams.date = newDate
    fetchFlights(newParams)
  }

  return (
    <header className={styles.cardHeader}>
      <div className={styles.breadcrumbs}>
        <a className={styles.breadcrumbs__back} href='#'>Вылеты</a>
        <span className={styles.breadcrumbs__current}>SVO - JFK</span>
      </div>
      <label htmlFor='datepicker' className={styles.datepicker}>
        <span className={styles.datepicker__date}>
          {dateToStringFormatter(Date.now(), monthsRU)}   { /* получаем текущую дату и форматируем к заданному виду  */}
          {/* 07 июля 2020 */}                                                    { /* PERFECTPIXEL */}
        </span>
        <i className={styles.datepicker__icon}></i>
        <input
          type='date'
          id='datepicker'
          className={styles.datepicker__input}
          defaultValue={datepickerDateFormatter()}
          onChange={(e) => {
            e.target.labels[0].childNodes[0].data = dateToStringFormatter(e.target.valueAsNumber, monthsRU)   //для лучшей поддержки браузерами сам инпут скрыт, дата выводится в <label>, по клику на неё открывается пикер от этого инпута
            fetchFlightsOnDate(e.target.value)
          }}
        /> 
      </label> 
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHeader)
