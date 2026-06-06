document.addEventListener("DOMContentLoaded", iniciar);
function iniciar(){
    cargarDias();
    cargarMeses();
    document
    .getElementById("btnCalcular")
    .addEventListener("click", calcularEdad);
}

function cargarDias(){
    let dia = document.getElementById("dia");
    for(let i=1; i<=31; i++){
        let opcion =
        document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        dia.appendChild(opcion);
    }
}

function cargarMeses(){
    let meses = [
        "Enero","Febrero","Marzo",
        "Abril","Mayo","Junio",
        "Julio","Agosto","Septiembre",
        "Octubre","Noviembre","Diciembre"
    ];

    let combo =
    document.getElementById("mes"); 
    for(let i=0; i<meses.length; i++){
        let opcion =
        document.createElement("option");
        opcion.value = i;
        opcion.textContent = meses[i];
        combo.appendChild(opcion);
    }
}

function calcularEdad(){
    let dia =
        parseInt(
        document.getElementById("dia").value
    );

    let mes =
        parseInt(
        document.getElementById("mes").value
    );

    let anio =
        parseInt(
        document.getElementById("anio").value
    );

    let fechaNacimiento =
        new Date(anio, mes, dia);
    let hoy =
        new Date();
        let edad =
            hoy.getFullYear() -
            fechaNacimiento.getFullYear();

            let mesActual =
                hoy.getMonth();
                if(
                    mesActual < mes ||
                    (
                        mesActual === mes &&
                        hoy.getDate() < dia
                    )
                ){

                    edad--;

                }
document.getElementById("resultado")
    .textContent =
    "Edad calculada: " +
    edad +
    " años";
}