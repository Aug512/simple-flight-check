import React from 'react'
import { connect } from 'react-redux'
import styles from './Carousel.module.scss'

const mapStateToProps = state => {
  return {
    carouselImages: state.carouselImages
  }
}

const Carousel = ({ carouselImages }) => {
  return (
    <div className={styles.carousel}>
      {carouselImages.map((image, index) => <img key={index} className={styles.carousel__image} src={image} alt='photo' />)}
    </div>
  )
}

export default connect(mapStateToProps, null)(Carousel)