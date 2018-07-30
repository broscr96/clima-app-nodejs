const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

var colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para consultar la dirección ingresada'
    }
}).argv;

//console.log(argv.direccion);

//lugar.getLugarLatLng(argv.direccion)
//    .then(resp => {
//        console.log(resp);
//    })
//    .catch(e => console.log(e));


//clima.getClima(23.6342457, -103.6391657)
//    .then(resp => {
//        console.log(resp);
//    })
//    .catch(e => console.log(e));



let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima en ` + `${ coordenadas.direccion}`.white + ` es de: ` + `${temp}`.white

    } catch {
        return `No se pudo determinar el clima en `.red + `${direccion}`.white;
    }
}


getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => console.log(e));