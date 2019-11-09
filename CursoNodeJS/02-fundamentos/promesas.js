let empleados = [{
        id: 1,
        nombre: 'Jasson'
    },
    {
        id: 2,
        nombre: 'Monica'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salario = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el id: ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioBD = salario.find(salario => salario.id === empleado.id);

        if (!salarioBD) {
            reject(`No existe un salario para el empleado: ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioBD.salario });
        }

    });
}
getEmpleado(1).then(empleado => {

        return getSalario(empleado);

    }).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario} $`);
    })
    .catch(err => {
        console.log(err);
    });