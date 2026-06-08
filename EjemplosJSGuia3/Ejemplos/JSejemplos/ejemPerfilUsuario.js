let usuario = {
    nombre: "Juan Pérez",
    edad: 22,
    curso: "JavaScript"
};

let tarjeta = document.createElement("div"); 
tarjeta.classList.add("tarjeta"); 

tarjeta.innerHTML =
    "<h3>" + usuario.nombre + "</h3>" +
    "<p>Edad: " + usuario.edad + "</p>" +
    "<p>Curso: " + usuario.curso + "</p>";

document.getElementById("contenedor")
    .appendChild(tarjeta);