import ENV from './ENV'
const api = ENV.development;

exports.getListHotels = () => {
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${api}/api/v1/hotels`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(response => {resolve(response);})
            .catch(error => reject(error));
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

exports.getHotelDetails = (values) => {
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${api}/api/v1/hotel/${values.id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(error => reject(error));
        } catch (error) {
            console.log(error);
            reject(error)
        }
    });
}