// Función externa que establece el tamaño base
function tamanoFuente(tamanioInicial) {
  let tamanoActual = tamanioInicial;

  // Closure que actualiza el tamaño y devuelve la cadena CSS
  return function(cambio) {
    tamanoActual += cambio;
    return `${tamanoActual}px`;
  };
}

// Inicializamos la fuente base en 16px
const ajustarTitulo = tamanoFuente(16);

// Simulamos la interacción en el DOM
document.getElementById("btn-agrandar").addEventListener("click", () => {
  const nuevoTamano = ajustarTitulo(2); 
  document.getElementById("titulo-principal").style.fontSize = nuevoTamano;
});

document.getElementById("btn-reducir").addEventListener("click", () => {
  const nuevoTamano = ajustarTitulo(-2);
  document.getElementById("titulo-principal").style.fontSize = nuevoTamano;
});
