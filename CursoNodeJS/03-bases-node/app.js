const argv = require('./config/yargs').argv;
const colors = require('colors');
const color = require('colors/safe');

const { crearArchivo, listar } = require('./multipicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}