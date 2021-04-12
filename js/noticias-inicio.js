function cargarJson() {
    var url = "http://demo6497253.mockable.io/noticias";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(error => {});
}

function generarNoticias(json) {
    const tabla = document.getElementById("tabla");

    for (let i = 0; i < 25; i++) {

        tabla.innerHTML += `<tr> <td>${json[i].fecha_de_notificaci_n}</td>
                        <td>${json[i].ciudad_municipio_nom}</td>
                        <td>${json[i].recuperado}</td>
                        <td>${json[i].edad}</td>
                        <td>${json[i].sexo}</td>
                        <td>${json[i].tipo_recuperacion}</td>
                        <td>${json[i].estado}</td>
                        <td>${json[i].ubicacion}</td>
                        </td>`
    }
}