function crearTarjeta() {
    let tarjeta = document.createElement("div");
        
    // Asignamos el HTML interno correctamente terminando en punto y coma (sin el + al final)
    tarjeta.innerHTML =
        "<h3>Curso de JavaScript</h3>" +
        "<p>Aprendiendo creacion dinamica de elementos.</p>";
        
    // Insertamos la tarjeta de forma independiente dentro del contenedor
    document.getElementById("contenedor").appendChild(tarjeta);
}