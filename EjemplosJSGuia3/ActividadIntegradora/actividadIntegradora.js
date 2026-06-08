 let participantes = [];
        function agregarCurso() {
            let curso =
                document.getElementById("curso").value;

                if (curso === "") {
                    return;

                }
                participantes.push({
                    curso: curso

                });

            let facilitador =
                document.getElementById("facilitador").value;

                if (facilitador === "") {
                    return;

                }
                participantes.push({
                    facilitador: facilitador

                });

            let tarjeta =
                document.createElement("div");
            tarjeta.classList.add("tarjeta");
            tarjeta.innerHTML =
                "<h3>" + curso + "</h3>" +
                "<h3>" + facilitador + "</h3>" +
                "<p>Curso y Facilitador registrado</p>";

            document.getElementById("tarjetas")
                .appendChild(tarjeta);

            document.getElementById("curso").value = "";
            document.getElementById("facilitador").value = "";
        }
