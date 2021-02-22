import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { flightsFetchWatcher } from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(flightsFetchWatcher)

export default store
