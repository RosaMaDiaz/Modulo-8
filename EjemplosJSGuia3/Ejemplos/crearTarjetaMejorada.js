function crearTarjeta() {
    let tarjeta = document.createElement("div");

    tarjeta.className = "tarjeta"; // Agregamos una clase para estilos CSS

    // Asignamos el HTML interno correctamente terminando en punto y coma (sin el + al final)
    tarjeta.innerHTML =
        "<h3>Programacion Web</h3>" +
        "<p>Curso orientado al desarrollo de aplicaciones dinamicas.</p>";

    // Insertamos la tarjeta de forma independiente dentro del contenedor
    document.getElementById("contenedor")
    .appendChild(tarjeta);
}