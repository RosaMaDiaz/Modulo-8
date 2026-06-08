let estudiante = {
    nombre: "Laura",
    edad: 19,
    carrera: "Desarrollo de Software",

};
    
    function mostrarDatos() { 
        document.getElementById("resultado")
            .innerHTML =
            "<h3>" + estudiante.nombre + "</h3>" +
            "<p>Edad: " + estudiante.edad + "</p>" +
            "<p>Carrera: " + estudiante.carrera + "</p>";   

    }
