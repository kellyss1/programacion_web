let display = document.getElementById("display");
let numeroActual = "";   // lo que estás escribiendo
let numeroAnterior = ""; // el número antes del operador
let operacion = null;    // operador actual (+, -, *, /, %)

// Agregar número al display
function agregarNumero(num) {
  // Evita escribir más de un punto
  if (num === "." && numeroActual.includes(".")) return;

  // Si se presiona "." primero, mostrar "0."
  if (num === "." && numeroActual === "") {
    numeroActual = "0.";
  } else {
    numeroActual += num;
  }

  mostrarEnDisplay(numeroActual);
}


function agregarOperacion(op) {
  // Si no hay número actual ni anterior, no hace nada
  if (numeroActual === "" && numeroAnterior === "") return;

  // Si no hay número actual pero ya hay uno anterior,
  // significa que queremos CAMBIAR la operación
  if (numeroActual === "" && numeroAnterior !== "") {
    operacion = op; // solo cambiamos el operador
    return;
  }

  // Si ya había un número anterior y un actual, calculamos primero
  if (numeroAnterior !== "" && numeroActual !== "") {
    calcular();
  }

  // Guardamos la nueva operación
  operacion = op;
  numeroAnterior = numeroActual;
  numeroActual = "";
}


// Mostrar texto en la pantalla
function mostrarEnDisplay(valor) {
  display.innerText = valor;
}

// Calcular el resultado
function calcular() {
  let resultado = 0;
  let n1 = parseFloat(numeroAnterior);
  let n2 = parseFloat(numeroActual);

  if (isNaN(n1) || isNaN(n2)) return;

  switch (operacion) {
    case "+": resultado = n1 + n2; break;
    case "-": resultado = n1 - n2; break;
    case "*": resultado = n1 * n2; break;
    case "/":
      resultado = n2 === 0 ? "Error" : n1 / n2;
      break;
    case "%":
      resultado = (n1 * n2) / 100;
      break;
    default:
      return;
  }

  mostrarEnDisplay(resultado);
  numeroActual = resultado.toString();
  numeroAnterior = "";
  operacion = null;
}

// Borrar todo
function borrarTodo() {
  numeroActual = "";
  numeroAnterior = "";
  operacion = null;
  mostrarEnDisplay("0");
}

function borrarUltimo() {
  // Si no hay número actual, no hacemos nada
  if (numeroActual === "") return;

  // Quitamos el último carácter
  numeroActual = numeroActual.slice(0, -1);

  // Si ya no queda nada, mostramos 0
  if (numeroActual === "") {
    mostrarEnDisplay("0");
  } else {
    mostrarEnDisplay(numeroActual);
  }
}
