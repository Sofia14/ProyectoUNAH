var cambiarTextoLogin = function(tipo) {
    var cuenta = '';
    var cuentaTooltip = '';

    switch(tipo) {
        case 1:
        case 6:
        case 12:
            cuenta = 'No. Cuenta';
            cuentaTooltip = 'Ingrese el N° de Cuenta';
            break;
        case 3:
            cuenta = 'Codigo de la Asigntura';
            cuentaTooltip = 'Ingrese el Codigo de la Asigntura';
            break;
        default:
            cuenta = 'No. Empleado';
            cuentaTooltip = 'Ingrese el N° de Empleado';
    }

    document.getElementById('cuentaLabel').textContent = cuenta;
    document.getElementById('cuenta').placeholder = cuentaTooltip;
};

var cambioTipoLogin = function (tipo) {
    var tipos = {
        'Estudiante': 1,
        'Profesor': 2,
        'Instuctor de Laboratorio': 3,
        'Jefe de Departamento': 4,
        'Coordinador de Carrera': 5,
        'Estudiante (Programa Especial)': 6,
        'Coordinador (Programa Especial)': 7,
        'Coordinador Asignatura (Programa Especial)': 8,
        'Profesor (Programa Especial)': 9,
        'Jefe de Departamento (Suficiencia)': 10,
        'Ingreso de Calificaciones (Suficiencia)': 11,
        'Inscripciones (Suficiencia)': 12,
        'Coordinador de Asignatura': 13,
    };
    var tipo = document.getElementById('tipo');
    cambiarTextoLogin(tipos[tipo.value]);
};