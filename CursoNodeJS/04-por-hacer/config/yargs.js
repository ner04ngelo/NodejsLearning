const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
};

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer',
        descripcion, completado)
    .command('borrar', 'Borra una tarea por hacer', descripcion)
    .help()
    .argv;


module.exports = {
    argv
}