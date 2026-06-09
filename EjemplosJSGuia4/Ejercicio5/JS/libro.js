// Arreglo que almacenará los libros
let libros = [];

// Evento principal
document
    .getElementById("btnRegistrar")
    .addEventListener("click", registrarLibro);

// ==========================================
// REGISTRAR LIBRO
// ==========================================

function registrarLibro() {
    let autor =
        document.getElementById("txtAutor").value.trim();

    let titulo =
        document.getElementById("txtTitulo").value.trim();

    let editorial =
        document.getElementById("selEditorial").value;

    let edicion =

        document.getElementById("selEdicion").value;

    let pais =
        document.getElementById("txtPais").value.trim();

    let mensaje =
        document.getElementById("mensaje");

// Validaciones
if (
    autor === "" ||
    titulo === "" ||
    pais === ""
) {

    mensaje.textContent =
        "Debe completar todos los campos obligatorios.";
    mensaje.style.color = "red";
    return;
}

// Crear objeto
let libro = {
    autor: autor,
    titulo: titulo,
    editorial: editorial,
    edicion: edicion,
    pais: pais
};

// Guardar en arreglo
libros.push(libro);

// Actualizar tabla
mostrarLibros();

// Mensaje
mensaje.textContent =
    "Libro registrado correctamente.";
mensaje.style.color = "green";

// Limpiar formulario
document.getElementById("frmLibro").reset();
}

// ==========================================
// MOSTRAR LIBROS
// ==========================================

function mostrarLibros() {
    let tabla =
        document.getElementById("tablaLibros");

    tabla.innerHTML = "";
    libros.forEach(function(libro) {
        let fila =
            document.createElement("tr");
        let celdaAutor =
            document.createElement("td");
        let celdaTitulo =
            document.createElement("td");
        let celdaEditorial =
            document.createElement("td");
        let celdaEdicion =
            document.createElement("td");
        let celdaPais =
            document.createElement("td");
        celdaAutor.textContent =
            libro.autor;
        celdaTitulo.textContent =
            libro.titulo;
        celdaEditorial.textContent =
            libro.editorial;
        celdaEdicion.textContent =
            libro.edicion;
        celdaPais.textContent =
            libro.pais;
        fila.appendChild(celdaAutor);
        fila.appendChild(celdaTitulo);
        fila.appendChild(celdaEditorial);
        fila.appendChild(celdaEdicion);
        fila.appendChild(celdaPais);
        tabla.appendChild(fila);
    });
}