function cargarJson() {
    var url = "http://demo6497253.mockable.io/categoria/tecnologia";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(error => {});
}

function generarNoticias(json) {
    const tabla = document.getElementById("tabla-tecnologia");

    for (let i = 0; i < 25; i++) {

        console.log(json)
        tabla.innerHTML += `<hr><tr>
                        <td>${json[i].titulo}</td>
                        </tr>`
    }
}
cargarJson();