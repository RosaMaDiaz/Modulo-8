// Evento focus
document.getElementById("txtNombre")
        .addEventListener("focus", function () {

    document.getElementById("resultado").innerHTML =
        "<p><strong>Evento detectado:</strong> focus</p>" +
        "<p>El usuario ingresó al campo Nombre.</p>";

});

// Evento input
document.getElementById("txtNombre")
        .addEventListener("input", function () {
    document.getElementById("resultado").innerHTML =
        "<p><strong>Evento detectado:</strong> input</p>" +
        "<p>Nombre capturado: " +
        this.value +
        "</p>";
});

// Evento input para correo
document.getElementById("txtCorreo")
        .addEventListener("input", function () {
    document.getElementById("resultado").innerHTML =
    "<p><strong>Evento detectado:</strong> input</p>" +
    "<p>Correo capturado: " +
    this.value +
    "</p>";
});

// Evento change para lista desplegable
document.getElementById("selCurso")
        .addEventListener("change", function () {
    document.getElementById("resultado").innerHTML =
        "<p><strong>Evento detectado:</strong> change</p>" +
        "<p>Curso seleccionado: " +
        this.value +
        "</p>";
});

// Evento click para modalidad presencial
document.getElementById("presencial")
        .addEventListener("click", function () {
    document.getElementById("resultado").innerHTML =
        "<p><strong>Evento detectado:</strong> click</p>" +
        "<p>Modalidad seleccionada: Presencial</p>";
});

// Evento click para modalidad virtual
document.getElementById("virtual")
        .addEventListener("click", function () {
    document.getElementById("resultado").innerHTML =
        "<p><strong>Evento detectado:</strong> click</p>" +
        "<p>Modalidad seleccionada: Virtual</p>";
});

// Eventos para casillas de verificación
document.getElementById("chkProgramacion")
        .addEventListener("click", mostrarCasillas);
document.getElementById("chkWeb")
        .addEventListener("click", mostrarCasillas);
document.getElementById("chkBD")
        .addEventListener("click", mostrarCasillas);

function mostrarCasillas() {
    let seleccionadas = [];
    if (document.getElementById("chkProgramacion").checked) {
        seleccionadas.push("Programación");
    }
    if (document.getElementById("chkWeb").checked) {
        seleccionadas.push("Desarrollo Web");
    }
    if (document.getElementById("chkBD").checked) {
        seleccionadas.push("Bases de Datos");
    }

    document.getElementById("resultado").innerHTML =
        "<p><strong>Evento detectado:</strong> click</p>" +
        "<p>Intereses seleccionados: " +
        (seleccionadas.length > 0
            ? seleccionadas.join(", ")
            : "Ninguno") +
        "</p>";
}

// Botón Mostrar Información
document.getElementById("btnMostrar")
        .addEventListener("click", mostrarResumen);

function mostrarResumen() {
    let nombre =
        document.getElementById("txtNombre").value;
    let correo =
        document.getElementById("txtCorreo").value;
    let curso =
        document.getElementById("selCurso").value;
    let modalidad = "";
    if (document.getElementById("presencial").checked) {
        modalidad = "Presencial";
    }
    if (document.getElementById("virtual").checked) {
        modalidad = "Virtual";
    }

    let intereses = [];
    if (document.getElementById("chkProgramacion").checked) {
        intereses.push("Programación");
    }
    if (document.getElementById("chkWeb").checked) {
        intereses.push("Desarrollo Web");
    }
    if (document.getElementById("chkBD").checked) {
        intereses.push("Bases de Datos");
    }


    document.getElementById("resultado").innerHTML =
        "<h3>Resumen de Información</h3>" +
        "<p><strong>Nombre:</strong> " +
        nombre +
        "</p>" +
        "<p><strong>Correo:</strong> " +
        correo +
        "</p>" +
        "<p><strong>Curso:</strong> " +
        curso +
        "</p>" +
        "<p><strong>Modalidad:</strong> " +
        modalidad +
        "</p>" +
        "<p><strong>Intereses:</strong> " +
        (intereses.length > 0
        ? intereses.join(", ")
        : "Ninguno") +
        "</p>";
}