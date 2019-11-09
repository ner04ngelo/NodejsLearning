/**
 * Asyn Await
 */

// let getNombre = async() => {
//     return 'Jasson';
// }

// console.log(getNombre());

let getNombre = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Jasson')
        }, 3000);
    });


}

let saludo = async() => {
    let nombre = await getNombre();


    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});