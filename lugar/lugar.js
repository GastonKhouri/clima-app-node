const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `http://api.weatherapi.com/v1/current.json?q=$${encodedUrl}`,
        headers: { 'key': '5b4ffd1b9cc84b7e83f213632211101' }
    });

    const resp = await instance.get();

    if (resp.data.error) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.location;
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}