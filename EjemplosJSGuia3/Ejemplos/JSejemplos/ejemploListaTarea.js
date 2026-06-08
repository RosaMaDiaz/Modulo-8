function agregarTarea() {

    let texto =
        document.getElementById("tarea").value;

    let item =
        document.createElement("li");
    
    item.textContent = texto;

    item.onclick = function() {
        this.remove();
    };
    
    document.getElementById("lista")
        .appendChild(item);

}