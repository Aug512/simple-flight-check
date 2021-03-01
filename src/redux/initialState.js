import getAuthorisation from '../utils/getAuthorisation'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'

const imgArr = [photo1, photo2, photo3]

const initialState = {
  isUserAuthorised: getAuthorisation(),   //проверка sessionStorage на налачие необходимого флага
  isLoading: true,
  flights: [],
  favouritesFlightsCounter: 0,
  favouritesIds: [],
  // favouritesFlightsCounter: 10,      //PERFECTPIXEL
  errorMessage: '',
  initialRequestParams: {
    country: 'RU',
    currency: 'rub',
    locale: 'RU-ru',
    origin: 'SVO-sky',
    destination: 'JFK-sky',
    date: '2021-03'
  },
  carouselImages: imgArr.concat(imgArr, imgArr)   //сконкатил изображения, чтобы было больше элментов, 4е фото из макета достать не удалось
}

export default initialState
