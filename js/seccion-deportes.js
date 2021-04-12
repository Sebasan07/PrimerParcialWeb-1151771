function cargarJsonDeportes() {
    var url = "http://demo6497253.mockable.io/categoria/deporte";

    fetch(url)
        .then(response => response.json())
        .then(data => generarDeportes(data))
        .catch(error => {});
}

function generarDeportes(json) {
    const tabla = document.getElementById("tabla-deportes");

    for (let i in json) {

        tabla.innerHTML += `<hr><tr>
                        <td>${json[i].titulo}</td>
                        </tr>`
    }
}
cargarJsonDeportes();