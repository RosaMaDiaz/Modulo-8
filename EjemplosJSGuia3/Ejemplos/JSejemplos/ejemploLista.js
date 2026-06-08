let cursos = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap"
];

cursos.forEach (function(curso){
        
    let item = document.createElement("li");

    item.textContent = curso;

    document.getElementById("listaCursos")
        .appendChild(item);

});
