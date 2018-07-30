const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDbcCdgJPN36E16G7Zir0_7Rfv-5sa3rQM`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }
    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;


    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}



module.exports = {
    getLugarLatLng
}