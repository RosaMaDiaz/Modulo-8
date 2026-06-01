const input = document.getElementById("tareaInput");
const lista = document.getElementById("lista");
const total = document.getElementById("total");
const completadas = document.getElementById("completadas");
const pendientes = document.getElementById("pendientes");
const btnAgregar = document.getElementById("btnAgregar");
const btnModo = document.getElementById("btnModo");
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
// EVENTOS
btnAgregar.addEventListener("click", agregarTarea);
btnModo.addEventListener("click", () => document.body.classList.toggle("modo-oscuro"));
// AGREGAR
function agregarTarea(){
let texto = input.value.trim();
if(texto===""){
alert("Ingrese una tarea");
return;
}
tareas.push({texto, completada:false});
guardar();
render();
input.value="";
}
// RENDER
function render(){
lista.innerHTML="";
tareas.forEach((t, i)=>{
let li=document.createElement("li");
li.classList.toggle("completada", t.completada);
li.innerHTML=`
<span>${t.texto}</span>
<div class="botones">
<button class="btnEditar">✏️ </button>
<button class="btnEliminar">X</button>
</div>
`;
// toggle estado
li.querySelector("span").onclick=()=>{
t.completada = !t.completada;
guardar();
render();
};
// eliminar
li.querySelector(".btnEliminar").onclick=()=>{
tareas.splice(i,1);
guardar();
render();
};
// editar
li.querySelector(".btnEditar").onclick=()=>{
let nuevo = prompt("Editar tarea", t.texto);
if(nuevo){
t.texto = nuevo;
guardar();
render();
}
};
lista.appendChild(li);
});
actualizarStats();
}
// FILTRO
function filtrar(tipo){
let items = document.querySelectorAll("li");
items.forEach((li, i)=>{
let t = tareas[i];
if(tipo==="todas") li.style.display="flex";
else if(tipo==="completadas" && t.completada) li.style.display="flex";
else if(tipo==="pendientes" && !t.completada) li.style.display="flex";
else li.style.display="none";
});
}
// STATS
function actualizarStats(){
total.textContent = tareas.length;
let comp = tareas.filter(t=>t.completada).length;
completadas.textContent = comp;
pendientes.textContent = tareas.length - comp;
}
// LOCAL STORAGE
function guardar(){
localStorage.setItem("tareas", JSON.stringify(tareas));
}
// INICIAL
render();
