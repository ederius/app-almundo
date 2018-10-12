import CONSTANTS from './CONSTANTS';

export const actionGetlistHotels = () => ({
  type: CONSTANTS.REQUEST_LISTHOTELS,
});

export const actionReceivelistHotels = (hotels) => ({
  type: CONSTANTS.RECEIVE_LISTHOTELS,
  hotels
});

export const actionGetHotelDetails = (id) => ({
  type: CONSTANTS.REQUEST_HOTELDETAILS,
  id
});

export const actionReceiveHotelDetails = (hotel) => ({
  type: CONSTANTS.RECEIVE_HOTELDETAILS,
  hotel
});

