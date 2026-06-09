// VARIABLES GLOBALES
let contadorAnuncios = 1;

// INICIALIZACIÓN
window.addEventListener("load", iniciar);
function iniciar() {
    document
    .getElementById("frmAnuncios")
    .addEventListener("submit", procesarFormulario);
}

// EVENTO PRINCIPAL
function procesarFormulario(evento) {
    evento.preventDefault();
    let accion =
    document.querySelector(
        'input[name="accion"]:checked'
    );

    if (!accion) {
        alert("Seleccione una acción.");

        return;
    }

    switch (accion.value) {

        case "agregar":
            agregarAnuncio();
            break;
        case "insertar":
            insertarAnuncio();
            break;
        case "reemplazar":
            reemplazarAnuncio();
            break;
        case "eliminar":
            eliminarAnuncio();
            break;
    }
}
// AGREGAR

function agregarAnuncio() {
let mensaje = validarMensaje();

if (!mensaje) return;
    let anuncio = crearAnuncio(mensaje);
    document
        .getElementById("contenedorAnuncios")
        .appendChild(anuncio);
        actualizarLista();
        limpiarFormulario();
}

// INSERTAR
function insertarAnuncio() {
    let mensaje = validarMensaje();

    if (!mensaje) return;
        let select =
        document.getElementById("cmbAnuncios");

        if (select.value === "") {
            alert("Seleccione un anuncio.");
            return;
        }

        let referencia =
        document.getElementById(select.value);

        let nuevo =
            crearAnuncio(mensaje);
            referencia.parentNode.insertBefore(
            nuevo,
            referencia
        );

            actualizarLista();

            limpiarFormulario();

}

        // REEMPLAZAR
function reemplazarAnuncio() {
let mensaje = validarMensaje();

    if (!mensaje) return;
        let select =
        document.getElementById("cmbAnuncios");

        if (select.value === "") {
            alert("Seleccione un anuncio.");
            return;
        }

        let actual =
            document.getElementById(select.value);


            let nuevo =
                crearAnuncio(mensaje);
                actual.parentNode.replaceChild(

                    nuevo,


                    actual

                );

                actualizarLista();

                limpiarFormulario();

}
// ELIMINAR
function eliminarAnuncio() {
let select =
    document.getElementById("cmbAnuncios");
    if (select.value === "") {
        alert("Seleccione un anuncio.");
        return;
    }

    let confirmar =
    confirm(
        "¿Desea eliminar el anuncio seleccionado?"
    );

    if (!confirmar) return;
        let anuncio =
        document.getElementById(select.value);
            anuncio.remove();
            actualizarLista();
            limpiarFormulario();
}

// CREAR ANUNCIO
function crearAnuncio(texto) {
let div =
document.createElement("div");

    div.className = "anuncio";
        div.id =
            "anuncio" + contadorAnuncios;
            div.textContent =
                texto;
                contadorAnuncios++;
                return div;
}

// ACTUALIZAR LISTA
function actualizarLista() {
let select =
document.getElementById("cmbAnuncios");

    select.innerHTML =
        '<option value="">Seleccione...</option>';

        let anuncios =

        document.querySelectorAll(".anuncio");


        anuncios.forEach(function(anuncio){

            let opcion =

            document.createElement("option");

            opcion.value =

            anuncio.id;

            opcion.textContent =

            anuncio.id;

            select.appendChild(opcion);

        });

    }

    // VALIDAR MENSAJE

    
    function validarMensaje() {

        let mensaje =

        document

        .getElementById("txtMensaje")

        .value

        .trim();

        if (mensaje === "") {

            alert(

                "Debe escribir un mensaje."

            );

            return null;

        }

        return mensaje;
}

// LIMPIAR FORMULARIO

function limpiarFormulario() {
   
    document

    .getElementById("txtMensaje")

    .value = "";

    document

    .getElementById("txtMensaje")

    .focus();
}