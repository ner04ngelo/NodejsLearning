// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);


let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Jasson',
        id
    }

    if (id === 10) {
        callback(`El usuario con id ${id}, no existe en la BD`)
    } else {
        callback(null, usuario);
    }
}


getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de dato', usuario);
});