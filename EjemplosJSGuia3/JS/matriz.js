const matriz = [];

function agregarAsignatura() {
    if(matriz.length >= 4) {
        mostrarMensaje("Ya se registraron las 4 asignaturas.", "red");
        return;
    }

    const asignatura = document.getElementById("asignatura").value;
    const cal1 = Number(document.getElementById("cal1").value);
    const cal2 = Number(document.getElementById("cal2").value);
    const cal3 = Number(document.getElementById("cal3").value);
    const cal4 = Number(document.getElementById("cal4").value);

    if(asignatura === "" || isNaN(cal1) || isNaN(cal2) || isNaN(cal3) || isNaN(cal4)) {
        mostrarMensaje("Complete todos los campos.", "red");
        return;
    }

    // Calcular promedio individual de la materia como número
    const promedioNum = (cal1 + cal2 + cal3 + cal4) / 4;
    const promedio = promedioNum.toFixed(2);

    matriz.push([
        asignatura,
        cal1,
        cal2,
        cal3,
        cal4,
        promedio
    ]);

    limpiar();
    mostrarMensaje("Asignatura agregada correctamente.", "green");

    // Renderizar la tabla con los datos actuales
    generarReporte(); 

    // Cuando se completen las 4 asignaturas, calculamos la sección final de resultados
    if(matriz.length === 4) {
        calcularResultados();
    }
}

function generarReporte() {
    let html = `
    <table>
        <tr>
            <th>Asignatura</th>
            <th>Cal1</th>
            <th>Cal2</th>
            <th>Cal3</th>
            <th>Cal4</th>
            <th>Promedio</th>
        </tr>
    `;

    for(let f=0; f<matriz.length; f++) {
        html += `
        <tr>
            <td>${matriz[f][0]}</td>
            <td>${matriz[f][1]}</td>
            <td>${matriz[f][2]}</td>
            <td>${matriz[f][3]}</td>
            <td>${matriz[f][4]}</td>
            <td class="promedio">${matriz[f][5]}</td>
        </tr>
        `;
    }

    html += `
    <tr class="promedioGeneral">
        <td><strong>Promedios</strong></td>
    `;

    // Calcular promedios por columna adaptativo
    for(let c=1; c<=4; c++) {
        let suma = 0;
        for(let f=0; f<matriz.length; f++) {
            suma += Number(matriz[f][c]);
        }
        let promedioCol = matriz.length > 0 ? (suma / matriz.length).toFixed(2) : "0.00";
        html += `<td>${promedioCol}</td>`;
    }

    html += `
            <td>---</td>
        </tr>
    </table>
    `;

    document.getElementById("reporte").innerHTML = html;
}

function calcularResultados() {
    let mayorPromedio = -1;
    let menorPromedio = 101;
    let asignaturaMayor = "";
    let asignaturaMenor = "";
    let sumaPromediosTotales = 0;

    for (let f = 0; f < matriz.length; f++) {
        let nombreMateria = matriz[f][0];
        let promMateria = Number(matriz[f][5]);

        sumaPromediosTotales += promMateria;

        if (promMateria > mayorPromedio) {
            mayorPromedio = promMateria;
            asignaturaMayor = nombreMateria;
        }
        if (promMateria < menorPromedio) {
            menorPromedio = promMateria;
            asignaturaMenor = nombreMateria;
        }
    }

    let promedioGeneralFinal = (sumaPromediosTotales / matriz.length).toFixed(2);

    // Insertar los valores en las nuevas tarjetas
    document.getElementById("mayor").textContent = `${asignaturaMayor} (${mayorPromedio.toFixed(2)})`;
    document.getElementById("menor").textContent = `${asignaturaMenor} (${menorPromedio.toFixed(2)})`;
    document.getElementById("promedioGeneral").textContent = promedioGeneralFinal;
    
    // Capturamos el recuadro contenedor completo para pintarlo según la nota
    const tarjetaGeneral = document.querySelector(".de-general");
    
    // Limpiamos estilos de desempeño anteriores
    tarjetaGeneral.classList.remove("desempeño-excelente", "desempeño-regular", "desempeño-reprobado");

    // Aplicar colores según el rendimiento académico real
    if (promedioGeneralFinal >= 90) {
        tarjetaGeneral.classList.add("desempeño-excelente");
    } else if (promedioGeneralFinal >= 70) {
        tarjetaGeneral.classList.add("desempeño-regular");
    } else {
        tarjetaGeneral.classList.add("desempeño-reprobado");
    }
}

function reiniciarReporte() {
    matriz.length = 0; 
    document.getElementById("reporte").innerHTML = ""; 
    
    document.getElementById("mayor").textContent = "-";
    document.getElementById("menor").textContent = "-";
    document.getElementById("promedioGeneral").textContent = "-";
    
    // Resetear el contenedor del promedio general a su estado base blanco
    const tarjetaGeneral = document.querySelector(".de-general");
    tarjetaGeneral.classList.remove("desempeño-excelente", "desempeño-regular", "desempeño-reprobado");
    
    mostrarMensaje("El reporte ha sido reiniciado.", "blue");
}

function limpiar() {
    document.getElementById("asignatura").value = "";
    document.getElementById("cal1").value = "";
    document.getElementById("cal2").value = "";
    document.getElementById("cal3").value = "";
    document.getElementById("cal4").value = "";
}

function mostrarMensaje(texto, color) {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
    mensaje.style.color = color;
    
    setTimeout(() => {
        mensaje.textContent = "";
    }, 3000);
}