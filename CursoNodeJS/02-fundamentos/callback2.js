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



let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el id: ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}



let getSalario = (empleadoReturn, callback) => {
    let salarioEmpleado = salario.find(salario => salario.id === empleadoReturn.id);

    if (!salarioEmpleado) {
        callback(`No existe un salario para el empleado ${empleadoReturn.nombre}`);
    } else {
        callback(null, {
            nombre: empleadoReturn.nombre,
            salario: salarioEmpleado.salario
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);

    });

});