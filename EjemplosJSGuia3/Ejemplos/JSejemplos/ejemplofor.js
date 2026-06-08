// 1. Nuestro arreglo de datos (origen de la información)
const estudiantes = ["Rosa Díaz", "Carlos Gómez", "Ana Martínez", "Luis Peralta"];

// 2. Seleccionamos el elemento del DOM donde queremos mostrar los datos
const listaContenedor = document.getElementById("lista-estudiantes");

// 3. Limpiamos el contenedor por si acaso tiene contenido previo
listaContenedor.innerHTML = "";

// 4. Recorremos el arreglo usando un ciclo for tradicional
for (let i = 0; i < estudiantes.length; i++) {
    // Creamos un nuevo elemento de lista <li> en memoria
    const nuevoElemento = document.createElement("li");
    
    // Le asignamos el texto del estudiante actual usando el índice [i]
    nuevoElemento.textContent = `${i + 1}. ${estudiantes[i]}`;
    
    // Agregamos el <li> dentro del contenedor <ul> en el DOM
    listaContenedor.appendChild(nuevoElemento);
}