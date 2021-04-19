function cargarJson() {
    var url = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(error => {});
}

function generarNoticias(json) {
    const tabla = document.getElementById("tabla-tecnologia");

    for (let i in json) {

        console.log(json)
        tabla.innerHTML += `<tr>
                        <td>${json[i].titulo}</td>
                        </tr>`
    }
}
cargarJson();