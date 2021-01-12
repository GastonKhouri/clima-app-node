const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=be7f13d6b762aec355a95e850e67a57e&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}