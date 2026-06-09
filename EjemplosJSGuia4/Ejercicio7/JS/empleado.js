let empleados = [];
let indiceEditar = -1;
const tabla = document.getElementById("tablaEmpleados");
const mensaje = document.getElementById("mensaje");
document
.getElementById("btnGuardar")
.addEventListener("click", guardarEmpleado);
document
.getElementById("btnActualizar")
.addEventListener("click", actualizarEmpleado);
function guardarEmpleado(){
let codigo =
document.getElementById("txtCodigo").value.trim();

let nombre =
document.getElementById("txtNombre").value.trim();
let cargo =
document.getElementById("txtCargo").value.trim();
let departamento =
document.getElementById("selDepartamento").value;
let salario =
document.getElementById("txtSalario").value;
if(
codigo === "" ||
nombre === "" ||
cargo === "" ||
departamento === "" ||
salario === ""
){
mensaje.textContent =
"Complete todos los campos.";
mensaje.style.color = "red";
return;
}
let empleado = {
codigo: codigo,
nombre: nombre,
cargo: cargo,
departamento: departamento,
salario: salario
};
empleados.push(empleado);
mostrarEmpleados();
document.getElementById("frmEmpleado").reset();
mensaje.textContent =
"Empleado registrado correctamente.";
mensaje.style.color = "green";
}
function mostrarEmpleados(){
tabla.innerHTML = "";
empleados.forEach(function(empleado, indice){
let fila =
`
<tr>
<td>${empleado.codigo}</td>
<td>${empleado.nombre}</td>
<td>${empleado.cargo}</td>
<td>${empleado.departamento}</td>
<td>RD$ ${empleado.salario}</td>

<td>
<button
class="btnEditar"
onclick="editarEmpleado(${indice})">
Editar
</button>
<button
class="btnEliminar"
onclick="eliminarEmpleado(${indice})">
Eliminar
</button>
</td>
</tr>
`;
tabla.innerHTML += fila;
});
}
function editarEmpleado(indice){
let empleado = empleados[indice];
document.getElementById("txtCodigo").value =
empleado.codigo;
document.getElementById("txtNombre").value =
empleado.nombre;
document.getElementById("txtCargo").value =
empleado.cargo;
document.getElementById("selDepartamento").value =
empleado.departamento;
document.getElementById("txtSalario").value =
empleado.salario;
indiceEditar = indice;
mensaje.textContent =
"Empleado cargado para edición.";
mensaje.style.color = "#f59e0b";
}
function actualizarEmpleado(){
if(indiceEditar === -1){
mensaje.textContent =
"Seleccione un empleado para editar.";
mensaje.style.color = "red";

return;
}
empleados[indiceEditar].codigo =
document.getElementById("txtCodigo").value;
empleados[indiceEditar].nombre =
document.getElementById("txtNombre").value;
empleados[indiceEditar].cargo =
document.getElementById("txtCargo").value;
empleados[indiceEditar].departamento =
document.getElementById("selDepartamento").value;
empleados[indiceEditar].salario =
document.getElementById("txtSalario").value;
mostrarEmpleados();
document.getElementById("frmEmpleado").reset();
indiceEditar = -1;
mensaje.textContent =
"Empleado actualizado correctamente.";
mensaje.style.color = "green";
}
function eliminarEmpleado(indice){
let respuesta =
confirm(
"¿Está seguro de eliminar este empleado?"
);
if(respuesta){
empleados.splice(indice, 1);
mostrarEmpleados();
mensaje.textContent =
"Empleado eliminado correctamente.";
mensaje.style.color = "#dc2626";
}
}