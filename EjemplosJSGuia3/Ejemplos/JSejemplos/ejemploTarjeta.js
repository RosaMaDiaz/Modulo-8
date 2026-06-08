
let estudiante = {
    nombre: "Juan Pérez",
    edad: 21,
    curso: "JavaScript"
};

function crearTarjeta() {
    let tarjeta =
        document.createElement("div");
    
        tarjeta.classList.add("tarjeta");
    
        tarjeta.innerHTML =
        "<h3>" + estudiante.nombre + "</h3>" +
        "<p>Edad: " + estudiante.edad + "</p>" +
        "<p>Curso: " + estudiante.curso + "</p>";

    document.getElementById("tarjeta")
        .appendChild(tarjeta);

}