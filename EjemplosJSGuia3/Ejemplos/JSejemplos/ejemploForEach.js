// 1. Nuestro arreglo de datos
const estudiantes = ["Rosa Díaz", "Carlos Gómez", "Ana Martínez", "Luis Peralta"];

// 2. Seleccionamos el elemento del DOM
const listaContenedor = document.getElementById("lista-estudiantes");

// 3. Limpiamos el contenedor
listaContenedor.innerHTML = "";

// 4. Recorremos el arreglo usando forEach
// Nota: 'estudiante' representa el valor del elemento actual, e 'indice' es su posición (opcional)
estudiantes.forEach((estudiante, indice) => {
    // Creamos el elemento <li>
    const nuevoElemento = document.createElement("li");
    
    // Le asignamos el texto de forma más limpia
    nuevoElemento.textContent = `${indice + 1}. ${estudiante}`;
    
    // Lo inyectamos en el DOM
    listaContenedor.appendChild(nuevoElemento);
});