
let agregarLista = (tareas) => {
    let ul = document.querySelector('ul');
    tareas.forEach(element =>{
        let elemento = document.createElement("li");
        elemento.innerHTML = element.id + " " + element.name + " " + element.fechaEntrega;
        ul.appendChild(elemento);
    });   
}

let getTareas = () => {
    axios.get("http://localhost:4000/tareas/")
        .then(response =>{
            let tareas = response.data.data;
            console.log(tareas);

            agregarLista(tareas);
        }).catch(error => console.error(error.response));
};

let createTarea = () => {
    let tarea = {
        id: parseInt(document.getElementById("id").value),
        name: document.getElementById("name").value,
        puntos: parseInt(document.getElementById("puntos").value),
        materia: document.getElementById("materia").value,
        fechaEntrega: document.getElementById("fecha").value
    };
    axios.post("http://localhost:4000/tareas/", tarea)
        .then(response => {
            let newTarea = response.data;
            console.log("NEW TAREA: "+newTarea);
            agregarLista([newTarea]);
        }).catch(error => console.error(error.response));
}
getTareas();
createTarea();