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


let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id: ${id}`);
    } else {
        return empleadoDB;
    }


}

let getSalario = async(empleado) => {

    let salarioBD = salario.find(salario => salario.id === empleado.id);

    if (!salarioBD) {
        throw new Error(`No existe un salario para el empleado: ${empleado.nombre}`);
    } else {
        return { nombre: empleado.nombre, salario: salarioBD.salario };
    }


}


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);

    let resp = await getSalario(empleado);

    return `El salario de ${resp.nombre} es de ${resp.salario} $`;

}


getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));