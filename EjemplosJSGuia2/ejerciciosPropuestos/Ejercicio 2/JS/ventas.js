// Arrays globales para almacenar los montos de cada venta por categoría
let ventasAltas = [];
let ventasMedias = [];
let ventasBajas = [];

// 1. Función Principal (Controladora)
function agregarVenta() {
  const input = document.getElementById("venta");
  const monto = parseFloat(input.value);

  // Validación: Solo montos mayores a 0
  if (!validarMonto(monto)) {
    alert("⚠️ Por favor, ingrese un monto válido mayor a 0.");
    return;
  }

  // Procesamiento
  clasificarVenta(monto);
  actualizarResultados();
  
  // Limpieza del campo
  input.value = ""; 
}

// 2. Función de Validación
function validarMonto(monto) {
  return !isNaN(monto) && monto > 0;
}

// 3. Función de Clasificación (Usando los rangos solicitados)
function clasificarVenta(monto) {
  if (monto > 200) {
    ventasAltas.push(monto);
  } else if (monto >= 70 && monto <= 200) {
    ventasMedias.push(monto);
  } else {
    ventasBajas.push(monto);
  }
}

// 4. Función auxiliar para sumar los elementos de un array
function sumarArray(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}

// 5. Función de actualización del DOM
function actualizarResultados() {
  // Cálculos por categoría usando .length y nuestra función de suma
  const cantAltas = ventasAltas.length;
  const totalAltas = sumarArray(ventasAltas);

  const cantMedias = ventasMedias.length;
  const totalMedias = sumarArray(ventasMedias);

  const cantBajas = ventasBajas.length;
  const totalBajas = sumarArray(ventasBajas);

  // Cálculos Globales
  const totalGeneral = totalAltas + totalMedias + totalBajas;
  const totalCantidad = cantAltas + cantMedias + cantBajas;
  const promedio = totalCantidad > 0 ? totalGeneral / totalCantidad : 0;

  // Renderizado en el DOM (Ventas Altas)
  document.getElementById("cantAltas").innerText = cantAltas;
  document.getElementById("totalAltas").innerText = totalAltas.toFixed(2);

  // Renderizado en el DOM (Ventas Medias)
  document.getElementById("cantMedias").innerText = cantMedias;
  document.getElementById("totalMedias").innerText = totalMedias.toFixed(2);

  // Renderizado en el DOM (Ventas Bajas)
  document.getElementById("cantBajas").innerText = cantBajas;
  document.getElementById("totalBajas").innerText = totalBajas.toFixed(2);

  // Renderizado de Globales
  document.getElementById("totalGeneral").innerText = totalGeneral.toFixed(2);
  document.getElementById("promedio").innerText = promedio.toFixed(2);
}