const axios = require('axios');

const getClima = async(lat, lng) => {
    //axios...
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=659ce944b5c8886a264dc752b409825c`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}