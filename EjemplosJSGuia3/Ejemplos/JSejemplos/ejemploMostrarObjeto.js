let persona = {
    nombre: "Pedro",
    edad: 30,
};

function mostrarPersona() {
    let tarjeta =
        document.createElement("div");
    
    tarjeta.innerHTML =
        "<h3>" + persona.nombre + "</h3>" +
        "<p>Edad: " + persona.edad + "</p>";

    document.getElementById("contenedor")
        .appendChild(tarjeta);

}