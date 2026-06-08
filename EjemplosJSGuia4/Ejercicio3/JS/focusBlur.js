// Elemento donde se mostrará la ayuda
const textoAyuda =
    document.getElementById("textoAyuda");

// Función para mostrar ayuda
function mostrarAyuda(mensaje) {
    textoAyuda.innerHTML = mensaje;
}

// Función para limpiar ayuda
function ocultarAyuda() {
    textoAyuda.innerHTML =
    "Seleccione un campo del formulario para visualizar instrucciones.";
}

// Campos del formulario
const txtNombre =
    document.getElementById("txtNombre");
const txtApellido =
    document.getElementById("txtApellido");
const txtCorreo =
    document.getElementById("txtCorreo");
const txtTelefono =
    document.getElementById("txtTelefono");
const txtDescripcion =
    document.getElementById("txtDescripcion");
const selProfesion =
    document.getElementById("selProfesion");
const selPais =
    document.getElementById("selPais");

    // Eventos para Nombre
txtNombre.addEventListener("focus", function () {
    mostrarAyuda(
        "Ingrese su nombre. Utilice únicamente letras y evite abreviaturas."
    );
});

txtNombre.addEventListener("blur", ocultarAyuda);
// Eventos para Apellido
txtApellido.addEventListener("focus", function () {
    mostrarAyuda(
        "Ingrese su apellido tal como aparece en sus documentos."
    );
});

txtApellido.addEventListener("blur", ocultarAyuda);

// Eventos para Correo
txtCorreo.addEventListener("focus", function () {
    mostrarAyuda(
    "Ingrese una dirección de correo válida. Ejemplo: usuario@correo.com"
    );
});
txtCorreo.addEventListener("blur", ocultarAyuda);

// Eventos para Teléfono
txtTelefono.addEventListener("focus", function () {
    mostrarAyuda(
        "Ingrese su número telefónico sin espacios ni caracteres especiales."
    );
});

txtTelefono.addEventListener("blur", ocultarAyuda);

// Eventos para Descripción
txtDescripcion.addEventListener("focus", function () {
    mostrarAyuda(
        "Escriba una breve descripción sobre usted, sus estudios o experiencia."
    );
});

txtDescripcion.addEventListener("blur", ocultarAyuda);

// Eventos para Profesión
selProfesion.addEventListener("focus", function () {
    mostrarAyuda(
        "Seleccione la profesión que mejor represente su perfil actual."
    );
});

selProfesion.addEventListener("blur", ocultarAyuda);

// Eventos para País
selPais.addEventListener("focus", function () {
    mostrarAyuda(
        "Seleccione el país donde reside actualmente."
    );
});

selPais.addEventListener("blur", ocultarAyuda);

// Evento para el formulario
document.getElementById("frmDatos")
        .addEventListener("submit", function (evento) {

            evento.preventDefault();

            textoAyuda.innerHTML =
                "<strong>Formulario enviado correctamente.</strong><br>" +
                "Los datos fueron capturados satisfactoriamente.";
});
