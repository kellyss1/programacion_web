// Guarda lo que el usuario escribe
let display = document.getElementById("display");

// Función para agregar números o símbolos al display
function agregar(valor) {
  if (display.innerText === "0") {
    display.innerText = valor; // si está en 0, reemplaza
  } else {
    display.innerText += valor; // si ya hay algo, añade
  }
}

// Función para borrar todo
function borrarTodo() {
  display.innerText = "0";
}

// Función para borrar el último carácter
function borrarUltimo() {
  let texto = display.innerText;
  if (texto.length > 1) {
    display.innerText = texto.slice(0, -1); // quita el último
  } else {
    display.innerText = "0"; // si ya no hay nada, deja en 0
  }
}

// Función para calcular el resultado
function calcular() {
  try {
    let resultado = eval(display.innerText); // eval evalúa la operación como texto
    display.innerText = resultado;
  } catch (error) {
    display.innerText = "Error";
  }
}
