function cargarJson(url) {
    var url = "http://demo6497253.mockable.io/categoria/deporte";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(error => {});
}

function generarNoticias(json) {
    const tabla = document.getElementById("tabla-deportes");

    for (let i in json) {

        console.log(json)
        tabla.innerHTML += `<hr><tr>
                        <td>${json[i].titulo}</td>
                        </tr>`
    }
}
cargarJson();