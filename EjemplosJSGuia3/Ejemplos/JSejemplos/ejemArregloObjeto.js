
let estudiantes = [
    {
        nombre: "Ana",
        edad: 20
    },

    {
        nombre: "Carlos",
        edad: 22
    },

    {nombre: "Laura",
        edad: 19}
];


estudiantes.forEach(function(estudiante) {

    let tarjeta = document.createElement("div");

    tarjeta.innerHTML =
        "<h3>" + estudiante.nombre + "</h3>" +
        "<p>Edad: " + estudiante.edad + "</p>";

    document.getElementById("contenedor")
        .appendChild(tarjeta);
    
});