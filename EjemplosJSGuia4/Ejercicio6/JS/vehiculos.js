// =====================================
// ARREGLO DE VEHÍCULOS
// =====================================

let vehiculos = [];

// =====================================
// MODELOS POR FABRICANTE
// =====================================

const modelos = {
    Toyota: [
        "Corolla",
        "Yaris",
        "Hilux"
    ],
    Nissan: [
        "Sentra",
        "Versa",
        "Frontier"
    ],
    Hyundai: [
        "Elantra",
        "Accent",
        "Tucson"
    ],
    Honda: [
        "Civic",
        "Accord",
        "CR-V"
    ],
    Chevrolet: [
        "Spark",
        "Onix",
        "Tracker"
    ]
};

// =====================================
// EVENTOS
// =====================================

document
    .getElementById("selfab")
    .addEventListener(
        "change",
    actualizarModelos
);

document
    .getElementById("btnRegistrar")
    .addEventListener(
        "click",
    registrarVehiculo
);

// =====================================
// ACTUALIZAR MODELOS
// =====================================

function actualizarModelos() {
    let fabricante =
        document.getElementById("selfab").value;

    let listaModelos =
        document.getElementById("selmod");
    
        listaModelos.innerHTML = "";
    
        modelos[fabricante].forEach(function(modelo){

    let opcion =
        document.createElement("option");
    
    opcion.value = modelo;
    opcion.textContent = modelo;
    
    listaModelos.appendChild(opcion);
    });
}
// =====================================
// REGISTRAR VEHÍCULO
// =====================================

function registrarVehiculo() {
    let fabricante =
        document.getElementById("selfab").value;
    let modelo =
        document.getElementById("selmod").value;
    let anio =
        document.getElementById("txtanio").value;
    let colorSeleccionado =
        document.querySelector(
            "input[name='color']:checked"
        );
    let mensaje =
        document.getElementById("mensaje");
        if(fabricante === ""){
            mensaje.textContent =
                "Seleccione un fabricante.";
            mensaje.style.color = "red";
            return;
        }

        if(!colorSeleccionado){
            mensaje.textContent =
                "Seleccione un color.";
            mensaje.style.color = "red";
            return;
        }

    let vehiculo = {
        fabricante: fabricante,
        modelo: modelo,
        color: colorSeleccionado.value,
        anio: anio
    };


    vehiculos.push(vehiculo);

    mostrarVehiculos();

    mensaje.textContent =

        "Vehículo registrado correctamente.";

    mensaje.style.color = "green";

    document

        .getElementById("frmVehiculo")

        .reset();
}

// =====================================
// MOSTRAR VEHÍCULOS
// =====================================

function mostrarVehiculos() {
    let tabla =
        document.getElementById(
            "tablaVehiculos"
        );

    tabla.innerHTML = "";
    vehiculos.forEach(function(vehiculo){
    let fila =
        document.createElement("tr");
    let celdaFabricante =
        document.createElement("td");
    let celdaModelo =
        document.createElement("td");
    let celdaColor =
        document.createElement("td");
    let celdaAnio =
        document.createElement("td");
    
    celdaFabricante.textContent =
        vehiculo.fabricante;
    celdaModelo.textContent =
        vehiculo.modelo;
    celdaColor.textContent =
        vehiculo.color;
    celdaAnio.textContent =
        vehiculo.anio;

    fila.appendChild(celdaFabricante);
    fila.appendChild(celdaModelo);
    fila.appendChild(celdaColor);
    fila.appendChild(celdaAnio);
    
    tabla.appendChild(fila);
    });
}