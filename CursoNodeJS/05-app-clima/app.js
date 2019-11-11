const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {


    try {
        const infoLugar = await lugar.getLugarLatLng(direccion);

        const temp = await clima.getClima(infoLugar.lat, infoLugar.lng);

        return `El clima de ${infoLugar.direccion} es de ${temp}.`

    } catch (error) {
        return `No se puedo determinar el clima de ${direccion}`
    }





    return {
        ciudad,
        clima
    }
}


getInfo(argv.direccion).then(console.log)
    .catch(console.log);