let usuarios = [
    {
        nombre: "Ana",
        edad: 20
    },

    {
       nombre: "Carlos",
        edad: 24 
    }
];

usuarios.forEach(function(usuario) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML =
        "<h3>" + usuario.nombre + "</h3>" +
        "<p>Edad: " + usuario.edad + "</p>";

    document.getElementById("contenedor")
        .appendChild(tarjeta);
        
    
}); 