// 1. Creación del objeto utilizando new Object()
let carro = new Object();
carro.marca = "Toyota";
carro.modelo = "Corolla";
carro.npasajeros = 5;
carro.annio = 2024;
carro.placa = "A123456";
carro.nchasis = "CHS2025001";

// 2. Métodos del objeto carro (Definidos antes de ser usados)
carro.encender = function(chasis){
    if(chasis === this.nchasis){
        return "ON";
    }
    return "OFF";
};

carro.apagar = function(){
    return "OFF";
};

carro.mostrarDatos = function(){
    return `
        <tr><td>Marca</td><td>${this.marca}</td></tr>
        <tr><td>Modelo</td><td>${this.modelo}</td></tr>
        <tr><td>Pasajeros</td><td>${this.npasajeros}</td></tr>
        <tr><td>Año</td><td>${this.annio}</td></tr>
        <tr><td>Placa</td><td>${this.placa}</td></tr>
        <tr><td>Número de Chasis</td><td>${this.nchasis}</td></tr>
    `;
};

// 3. Arreglo de otros vehículos disponibles
let vehiculos = [
    {
        marca: "Honda",
        modelo: "Civic",
        npasajeros: 5,
        annio: 2023,
        placa: "H123456",
        nchasis: "CHS2023001"
    },
    {
        marca: "Nissan",
        modelo: "Sentra",
        npasajeros: 5,
        annio: 2024,
        placa: "N123456",
        nchasis: "CHS2024001"
    }
];

// 4. Mostrar información del vehículo inicial en la tabla
document.getElementById("tblVehiculo").innerHTML = carro.mostrarDatos();

// 5. Referencias DOM
const txtChasis = document.getElementById("txtChasis");
const btnEncender = document.getElementById("btnEncender");
const btnApagar = document.getElementById("btnApagar");
const estado = document.getElementById("estado");
const mensaje = document.getElementById("mensaje");

// 6. FUNCIÓN GENERAL: Verificar chasis en 'carro' o en el arreglo 'vehiculos'
function buscarYActualizarVehiculo(chasisIngresado) {
    // Caso 1: Es el chasis del carro principal
    if (chasisIngresado === carro.nchasis) {
        document.getElementById("tblVehiculo").innerHTML = carro.mostrarDatos();
        return carro; // Retornamos el objeto carro
    }

    // Caso 2: Buscar en el arreglo de vehículos
    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].nchasis === chasisIngresado) {
            // Si coincide, le asignamos los métodos dinámicamente para que pueda encender/apagar
            let vehiculoEncontrado = vehiculos[i];
            vehiculoEncontrado.encender = carro.encender;
            vehiculoEncontrado.mostrarDatos = carro.mostrarDatos;

            // Actualizamos la tabla con el nuevo vehículo encontrado
            document.getElementById("tblVehiculo").innerHTML = vehiculoEncontrado.mostrarDatos();
            return vehiculoEncontrado;
        }
    }

    // Caso 3: No se encontró ningún vehículo con ese chasis
    return null;
}

// 7. Evento Encender (Aquí es donde se hace la verificación real al dar click)
btnEncender.addEventListener("click", function(){
    let chasisIngresado = txtChasis.value.trim();

    // Verificamos si el chasis corresponde a algún auto
    let vehiculoActivo = buscarYActualizarVehiculo(chasisIngresado);

    if (vehiculoActivo !== null) {
        // Si existe, usamos su método encender
        let resultado = vehiculoActivo.encender(chasisIngresado);
        estado.textContent = resultado;
        estado.className = "estado encendido";
        mensaje.textContent = `Vehículo ${vehiculoActivo.marca} ${vehiculoActivo.modelo} encendido correctamente.`;
        mensaje.style.color = "green";
    } else {
        // Si no existe, muestra el mensaje de error solicitado
        estado.textContent = "OFF";
        estado.className = "estado apagado";
        mensaje.textContent = "Número de chasis incorrecto. No se puede encender el vehículo.";
        mensaje.style.color = "red";
    }
});

// 8. Evento Apagar
btnApagar.addEventListener("click", function(){
    estado.textContent = "OFF";
    estado.className = "estado apagado";
    mensaje.textContent = "Vehículo apagado.";
    mensaje.style.color = "black";
});