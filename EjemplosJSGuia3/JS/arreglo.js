let datos = [];
function agregar(){
    let n = parseInt(document.getElementById("numero").value);
    if(isNaN(n)){
        return alert("Ingrese un número válido");
    }

    if(datos.length >= 12){
        return alert("Solo se permiten 12 valores");
    }

    datos.push(n);
    mostrar();
}

function mostrar(){
    let contenedor = document.getElementById("gridDatos");
    contenedor.innerHTML = "";
    datos.forEach(d => {

        let div = document.createElement("div");
        div.textContent = d;
            contenedor.appendChild(div);
    });
}

function procesar(){
    if(datos.length < 12){
        return alert("Debe ingresar los 12 valores");
    }

    let mayor = Math.max(...datos);
    let suma = 0;

    for(let n of datos){
        suma += n;

    }

    let promedio = suma / datos.length;
    let mayores = datos.filter(n => n > promedio);
    document.getElementById("mayor").textContent = mayor;
    document.getElementById("promedio").textContent = promedio.toFixed(2);
    document.getElementById("mayores").textContent = mayores.join(", ");
}