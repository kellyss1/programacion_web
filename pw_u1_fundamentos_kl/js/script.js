function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}

function agregarTexto(id_elementoPadre, html) {
    document.getElementById(id_elementoPadre).innerHTML += html;
}

function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();
}

function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}

function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block';
}

function evaluarOperacion(tipo) {

    let n1 = parseFloat(document.getElementById('id_n1').value);
    let n2 = parseFloat(document.getElementById('id_n2').value);

    let resultado = 0;

    if(tipo === '+')  {
        resultado = sumar(n1, n2);
    } else if (tipo === '-') {
        resultado = restar(n1, n2);
    } else if (tipo === '*') {
        resultado = multiplicar(n1, n2);
    } else if (tipo === '/') {
        resultado = dividir(n1, n2);
    }
    document.getElementById('id_resultado').innerText = 'Resultado: '+ resultado;
}

function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n2 !== 0 ? n1 / n2 : 'Error: Division por cero';
}

function fundamentosJS() {
    // Tipos de Variables
    var nombre = "Ledesma"; // antigua, considerada obsoleta
    let apellido = "Kelly" // variables cambiantes
    let apellido2 = 15;
    apellido2 = "Puetate";
    let arreglo = [1, 2, 3, 4, 5, 6];
    let diasSemana = ['Lunes', 'Martes', '...'];
    const IVA = 12.8;
    console.log('Fundamentos de JS');
    console.log(nombre);
    console.log(apellido2)
    console.log(IVA);
    console.log(arreglo);

    //Arreglos
    const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
    arreglosDiasSemana.push('Jueves'); // Agregar al final
    console.log(arreglosDiasSemana);
    arreglosDiasSemana.unshift('Dias'); // Agregar al inicio
    console.log(arreglosDiasSemana);

    console.log(arreglosDiasSemana[0]);
    console.log('Manejo de nulos, undefined y vacio');
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]); // null
    console.log(arreglosDiasSemana[6]); // vacio
    console.log(arreglosDiasSemana[7]); // undefined

    // Concatenacion de arreglos
    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    // Sentencias de Control
    let edad = 19;
    if(edad >= 18) {
        console.log('Es mayor de Edad');
    }else{
        console.log('En menor de Edad');
    }

    let dia = 'lunes';
    switch(dia){
        case 'lunes':
            console.log('Es lunes');
            break;
        case 'martes':
            console.log('Es martes');
            break;
        default:
            console.log('No es ninguno de esos dias');
    }

    for(let i=0; i<=5; i++){
        console.log(i);
    }

    const frutas = ['manzana', 'sandia', 'papaya', 'naranja'];
    for(let fruta of frutas) {
        console.log(fruta);
    }

    // Manejo de Objetos
    const profesor = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriana: true,
        genero: 'M',
        ciudad: 'Quito'
    };

    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = 'Teran';
    console.log(profesor);

    if(profesor.ciudad === 'Quito') {
        console.log('Es Quiteño');
    }

    if(profesor.edad !== 36) {
        console.log('Es diferente de 36');
    }else{
        console.log('Es 36');
    }

    for(let clave in profesor) {
        console.log(clave);
        console.log(profesor[clave]);
    }
}