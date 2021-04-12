function cargarJsonNoticias() {
    var url = "http://demo6497253.mockable.io/noticias";

    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticiasInicio(data))
        .catch(error => {});
}

function generarNoticiasInicio(json) {
    const noticias = document.getElementById("noticias");

    for (let i in json) {

        noticias.innerHTML += `<div><h1>${json[i].titulo}- ${json[i].categoria} - ${json[i].fecha} </h1>
                            <h3>${json[i].descripcion}</h3>
                            <p>${json[i].detalle}</p>
                            <img src='${json[i].img}'></img></div><hr>`
    }
}
cargarJsonNoticias();