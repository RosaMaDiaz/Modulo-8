const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const curso = document.getElementById("curso");
const correo = document.getElementById("correo");

const contenedor = document.getElementById("contenedorEstudiantes");
const mensaje = document.getElementById("mensaje");
const totalEstudiantes = document.getElementById("totalEstudiantes");
const promedioEdad = document.getElementById("promedioEdad");

const btnRegistrar = document.getElementById("btnRegistrar");
const btnModo = document.getElementById("btnModo");
const busqueda = document.getElementById("busqueda");

let contadorCodigo = 1;

// EVENTOS
btnRegistrar.addEventListener("click", registrar);
btnModo.addEventListener("click", () => document.body.classList.toggle("modo-oscuro"));
busqueda.addEventListener("input", filtrar);

// GENERAR CODIGO
function generarCodigo(){
    return "EST-" + String(contadorCodigo++).padStart(3,"0");
}
// REGISTRAR
function registrar(){
    if(nombre.value==""||apellido.value==""||edad.value==""){
        mostrarMensaje("Complete los campos","red");
        return;
    }

    let codigo = generarCodigo();
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("tarjeta");
    
    tarjeta.innerHTML=`
        <p class="codigo">${codigo}</p>
        <h3>${nombre.value} ${apellido.value}</h3>
        <p>Edad: ${edad.value}</p>
        <p>Curso: ${curso.value}</p>
        <p>${correo.value}</p>

        <button class="btnEliminar">Eliminar</button>
    `;

    contenedor.appendChild(tarjeta);

    tarjeta.querySelector(".btnEliminar").onclick=()=>{
        tarjeta.remove();
        actualizarStats();
    }
    
    actualizarStats();
    mostrarMensaje("Estudiante registrado","#2563eb");
    limpiar();
}

// MENSAJE
function mostrarMensaje(texto,color){
    mensaje.textContent=texto;
    mensaje.style.background=color;
    mensaje.classList.add("activo");
    setTimeout(()=>mensaje.classList.remove("activo"),2000);
}

// LIMPIAR
function limpiar(){
    nombre.value="";
    apellido.value="";
    edad.value="";
    curso.value="";
    correo.value="";
}

// STATS
function actualizarStats(){
    let tarjetas=document.querySelectorAll(".tarjeta");
    totalEstudiantes.textContent=tarjetas.length;
    let suma=0;
    tarjetas.forEach(t=>{
        let e=parseInt(t.children[2].textContent.replace("Edad: ",""));
        suma+=e;
    
    });

    promedioEdad.textContent=tarjetas.length? (suma/tarjetas.length).toFixed(1):0;
}

// FILTRO
function filtrar(){

    let texto=busqueda.value.toLowerCase();
    document.querySelectorAll(".tarjeta").forEach(t=>{
        let nombre=t.querySelector("h3").textContent.toLowerCase();
        t.style.display= nombre.includes(texto) ? "block":"none";
    });
}