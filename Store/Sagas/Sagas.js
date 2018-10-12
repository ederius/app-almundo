import { takeEvery, call, put } from 'redux-saga/effects';
import CONSTANTS from '../services/CONSTANTS';
import { getHotelDetails, getListHotels } from "../services/API";


function* listHotelsGenerator() {
    try {
        const result = yield call(getListHotels);
        yield put({ type:CONSTANTS.RECEIVE_LISTHOTELS, hotels:result.data});
    } catch (error) {
        console.log(error);
        return error
    }
}

function* hotelDetailsGenerator(values) {
    try {
        const result = yield call(getHotelDetails, values);
        yield put({ type:CONSTANTS.RECEIVE_HOTELDETAILS, hotel:result.data});
    } catch (error) {
        console.log(error);
        return error
    }
}
  
export default function* funcionPrimaria() {
    yield takeEvery(CONSTANTS.REQUEST_LISTHOTELS, listHotelsGenerator);
    yield takeEvery(CONSTANTS.REQUEST_HOTELDETAILS, hotelDetailsGenerator);
}
