// ======================================
// Sistema de Pedido de Pizza
// ======================================

// Contador de pedidos
let numeroPedido = 1;

// ======================================
// Inicialización
// ======================================

window.addEventListener("load", iniciar);

function iniciar() {
    // Eventos para tamaños
    document
        .querySelectorAll('input[name="tamano"]')
        .forEach(function (radio) {

            radio.addEventListener(
                "change",
                actualizarTotal
            );
        });

        // Eventos para ingredientes
    document
        .querySelectorAll(".ingrediente")
        .forEach(function (checkbox) {

            checkbox.addEventListener(
                "change",
                actualizarTotal
            );
        });

        // Evento para generar recibo
        document
            .getElementById("btnRecibo")

            .addEventListener(
                "click",
                generarRecibo
            );

            // Mostrar total inicial
    actualizarTotal();
}

// ======================================
// Obtiene el total de la orden
// ======================================

function obtenerTotal() {
    let total = 0;

    // Tamaño seleccionado
    let tamanoSeleccionado =
        document.querySelector(
            'input[name="tamano"]:checked'
        );

        total += parseFloat(
            tamanoSeleccionado.value

        );

        // Ingredientes seleccionados
        let ingredientes =
            document.querySelectorAll(
                ".ingrediente:checked"
            );

            ingredientes.forEach(function (ingrediente) {

                total += parseFloat(

                    ingrediente.value

                );

            });

            return total;

}

// ======================================
// Actualiza el monto mostrado
// ======================================

function actualizarTotal() {

    let total = obtenerTotal();
    document
        .getElementById("lblTotal")
        .textContent =
        "$" + total.toFixed(2);
}

// ======================================
// Genera el recibo
// ======================================

function generarRecibo() {

    let cliente =
    document
        .getElementById("txtCliente")
        .value
        .trim();

        // Validación del nombre

        if (cliente === "") {

            alert(

                "Debe ingresar el nombre del cliente."

            );

            return;

        }

        // Obtiene total actual

        let total = obtenerTotal();

        // Obtiene pago

        let pago = parseFloat(

            document

            .getElementById("txtPago")

            .value

        );

        if (isNaN(pago)) {

            alert(

                "Debe ingresar el monto pagado."

            );

            return;

        }
    
        if (pago < total) {
            alert(
                "El monto pagado es insuficiente."
            );
            return;

        }

        let cambio = pago - total;

        // Obtiene tamaño seleccionado

        let tamano =

        document.querySelector(

            'input[name="tamano"]:checked'

        ).parentElement.textContent.trim();

        // Obtiene ingredientes seleccionados

        let ingredientes =

        document.querySelectorAll(

            ".ingrediente:checked"

        );

        let detalleIngredientes = "";


        ingredientes.forEach(function (item) {

            detalleIngredientes +=

            "✓ " +

            item.parentElement.textContent.trim() +

            "<br>";

        });

        if (detalleIngredientes === "") {

            detalleIngredientes =

            "Sin ingredientes adicionales";

        }

        // Construcción del recibo

        document

        .getElementById("resultado")

        .innerHTML = `

        <h3>PIZZERÍA LA WEB</h3>

        <div class="linea-recibo">

            <strong>Pedido No.:</strong> ${numeroPedido}

        </div>


        <div class="linea-recibo">

            <strong>Cliente:</strong> ${cliente}

        </div>


        <div class="linea-recibo">

            <strong>Tamaño:</strong> ${tamano}

        </div>


        <div class="linea-recibo">
            <strong>Ingredientes:</strong><br>
            ${detalleIngredientes}
        </div>


        <div class="linea-recibo">
            ${detalleIngredientes}

        </div>

    <hr>

    <div class="linea-recibo total-recibo">
        <strong>Total:</strong> $${total.toFixed(2)}
    </div>


    <div class="linea-recibo">
        <strong>Pagado con:</strong> $${pago.toFixed(2)}
    </div>


    <div class="linea-recibo devuelta">
        <strong>Devuelta:</strong> $${cambio.toFixed(2)}
    </div>

    <hr>


    <div class="linea-recibo mensaje-final">
        ¡Gracias por su compra!
    </div>
`;
// Incrementa número de pedido
numeroPedido++;
}