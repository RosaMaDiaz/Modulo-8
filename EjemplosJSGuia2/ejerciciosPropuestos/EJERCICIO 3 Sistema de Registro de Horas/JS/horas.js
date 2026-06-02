// Constante para la tarifa de pago por hora (puedes cambiar el 15 por el valor que use tu profesor)
const TARIFA_POR_HORA = 15;

// Función principal que se activa al pulsar el botón
function calcular() {
    // 1. Obtener los valores de los 6 inputs
    let horasDias = [];
    for (let i = 1; i <= 6; i++) {
        let valorInput = document.getElementById(`d${i}`).value.trim();
        let horas = parseFloat(valorInput);
        
        // Si el campo está vacío, lo interpretamos como 0 horas
        if (valorInput === "") {
            horas = 0;
        }
        
        horasDias.push(horas);
    }

    // 2. Validación de rangos (Condición técnica obligatoria: 0 a 24 horas)
    if (!validarHoras(horasDias)) {
        mostrarMensaje("⚠️ Error: Las horas diarias deben ser números válidos entre 0 y 24.", "red");
        return;
    }

    // Si pasa la validación, limpiamos cualquier mensaje de error previo
    mostrarMensaje("", "");

    // 3. Procesamiento y Cálculos usando funciones separadas
    let totalHoras = calcularTotalHoras(horasDias);
    let sueldoSemanal = totalHoras * TARIFA_POR_HORA;

    // 4. Mostrar los resultados en el DOM
    actualizarPantalla(totalHoras, sueldoSemanal);
}

// Función encargada únicamente de validar los rangos (0 - 24)
function validarHoras(arregloHoras) {
    for (let i = 0; i < arregloHoras.length; i++) {
        let h = arregloHoras[i];
        // Valida que sea un número real, que no sea negativo y que no supere las 24 horas diarias
        if (isNaN(h) || h < 0 || h > 24) {
            return false;
        }
    }
    return true;
}

// Función encargada de sumar todas las horas del arreglo
function calcularTotalHoras(arregloHoras) {
    let suma = 0;
    for (let i = 0; i < arregloHoras.length; i++) {
        suma += arregloHoras[i];
    }
    return suma;
}

// Función encargada de enviar las respuestas visuales al HTML
function actualizarPantalla(horas, sueldo) {
    document.getElementById("totalHoras").innerText = horas;
    // .toFixed(2) le da formato de dos decimales para que luzca profesional
    document.getElementById("sueldo").innerText = sueldo.toFixed(2);
}

// Función auxiliar para gestionar la etiqueta de mensajes/errores
function mostrarMensaje(texto, color) {
    const elementoMensaje = document.getElementById("mensaje");
    elementoMensaje.innerText = texto;
    elementoMensaje.style.color = color;
}