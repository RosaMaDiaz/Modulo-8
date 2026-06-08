// Variables globales
let totalVisitas = 0;
let ultimoSitio = "";

// Elementos de la página

const mensaje =
    document.getElementById("mensaje");

const enlaces =
    document.querySelectorAll("nav a");

// Asociar eventos a todos los enlaces
    enlaces.forEach(function(enlace){

// Cuando el cursor entra

    enlace.addEventListener(
        "mouseover",

        function(){
            mensaje.innerHTML =
            "<strong>Sitio seleccionado:</strong> "
            + this.textContent;
        }
    );

    // Cuando el cursor sale

    enlace.addEventListener(
        "mouseout",

        function(){
            mensaje.innerHTML =
            "Seleccione un recurso para continuar.";
        }
    );

    // Antes de abrir el enlace

    enlace.addEventListener(
        "click",

        function(evento){
            let nombreSitio =
            this.textContent;
            let confirmar =
            confirm(
            "¿Desea visitar " +
                nombreSitio +
            "?"
            );

            if(!confirmar){
                evento.preventDefault();
                mensaje.innerHTML =
                    "<strong>Navegación cancelada.</strong>";
                return;
            }
        
            totalVisitas++;
            ultimoSitio = nombreSitio;

            mensaje.innerHTML =
                "<strong>Acceso confirmado:</strong> "
                + nombreSitio +
                "<br>Total de visitas: "
                + totalVisitas;
        }
    );
});


// Botón Mostrar Resumen
document
    .getElementById("btnResumen")
    .addEventListener(
        "click",
        mostrarResumen
);


function mostrarResumen(){
    mensaje.innerHTML =
        "<h3>Resumen de Actividad</h3>" +
        "<p><strong>Enlaces visitados:</strong> "
        + totalVisitas +
        "</p>" +

        "<p><strong>Último sitio seleccionado:</strong> "
        + (ultimoSitio || "Ninguno")
        + "</p>";
}