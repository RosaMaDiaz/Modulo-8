// Seleccionamos los elementos del DOM
const input = document.getElementById("tareaInput");
const btnProcesar = document.getElementById("btnProcesar");
const salida = document.getElementById("salida");

// Evento para el botón
btnProcesar.addEventListener("click", procesarFormulario);

function procesarFormulario() {
    // Convertimos el valor de entrada a un número entero
    let numero = parseInt(input.value.trim());

    // Validaciones: que no esté vacío, que sea un número y que sea positivo
    if (isNaN(numero) || numero < 0) {
        salida.innerHTML = `<span class="error">Por favor, ingrese un número entero positivo.</span>`;
        return;
    }

    // Si es válido, calculamos el factorial
    let resultado = calcularFactorial(numero);

    // Mostramos el resultado destacado
    salida.innerHTML = `<span class="ok">${resultado}</span>`;
}

// Función solicitada por el profesor
function calcularFactorial(n) {
    if (n === 0 || n === 1) return 1;
    
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}