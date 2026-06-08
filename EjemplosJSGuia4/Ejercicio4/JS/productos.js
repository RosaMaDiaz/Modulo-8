// 1. Arreglo de objetos con los productos (datos iniciales de la imagen)
const productos = [
    { codigo: "P001", nombre: "Teclado", precio: 1500.00, existencia: 20 },
    { codigo: "P002", nombre: "Mouse", precio: 800.00, existencia: 15 },
    { codigo: "P003", nombre: "Monitor", precio: 8500.00, existencia: 8 },
    { codigo: "P004", nombre: "Impresora", precio: 6500.00, existencia: 5 },
    { codigo: "P005", nombre: "Bocinas", precio: 1200.00, existencia: 12 }
];

// 2. Referencias a los elementos del DOM
const tablaProductos = document.getElementById("tablaProductos");
const btnMostrar = document.getElementById("btnMostrar");
const btnActualizar = document.getElementById("btnActualizar");
const btnLimpiar = document.getElementById("btnLimpiar");

const totalProductosEl = document.getElementById("totalProductos");
const valorInventarioEl = document.getElementById("valorInventario");

// 3. Función para renderizar los productos en la tabla
function cargarTabla() {
    // Limpiamos el contenido actual para evitar duplicados
    tablaProductos.innerHTML = "";
    
    let totalUnidades = 0;
    let valorTotalInventario = 0;

    // Recorrido de datos mediante ciclo forEach
    productos.forEach(producto => {
        // Crear la fila tr
        const fila = document.createElement("tr");

        // Crear y añadir cada celda td
        const celdaCodigo = document.createElement("td");
        celdaCodigo.textContent = producto.codigo;
        fila.appendChild(celdaCodigo);

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;
        fila.appendChild(celdaNombre);

        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = producto.precio.toFixed(2);
        fila.appendChild(celdaPrecio);

        const celdaExistencia = document.createElement("td");
        celdaExistencia.textContent = producto.existencia;
        fila.appendChild(celdaExistencia);

        // Añadir la fila completa al cuerpo de la tabla
        tablaProductos.appendChild(fila);

        // Acumular valores para el resumen académico/financiero
        totalUnidades++;
        valorTotalInventario += (producto.precio * producto.existencia);
    });

    // Actualizar el bloque de Resumen en la interfaz
    totalProductosEl.textContent = totalUnidades;
    valorInventarioEl.textContent = `RD$ ${valorTotalInventario.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
}

// 4. Función para vaciar la tabla y reiniciar contadores
function limpiarTabla() {
    tablaProductos.innerHTML = "";
    totalProductosEl.textContent = "0";
    valorInventarioEl.textContent = "RD$ 0.00";
}

// 5. Asignación de Eventos a los Botones
btnMostrar.addEventListener("click", cargarTabla);

btnActualizar.addEventListener("click", () => {
    // Al simular una actualización real: limpia y regenera a partir del arreglo de datos
    limpiarTabla();
    cargarTabla();
});

btnLimpiar.addEventListener("click", limpiarTabla);