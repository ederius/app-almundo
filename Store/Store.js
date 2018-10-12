import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';
import CONSTANTS from './services/CONSTANTS';


const sagaMiddleware = createSagaMiddleware();

const reducesHotels = (state = { hotels:[] }, action) => {
  switch (action.type) {
    case CONSTANTS.REQUEST_LISTHOTELS:
      return { ...state };
    case CONSTANTS.RECEIVE_LISTHOTELS:
      return { ...state, hotels:action.hotels };
    case CONSTANTS.REQUEST_HOTELDETAILS:
      return { ...state };
    case CONSTANTS.RECEIVE_HOTELDETAILS:
      return { ...state, hotel:action.hotel };
    default:
      return state;
  }
};

const reducers = combineReducers({
  reducesHotels,
});

const Store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default Store;
