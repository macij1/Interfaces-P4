document.addEventListener("DOMContentLoaded", function() {
    var userData = JSON.parse(getCookie("usuario"));

    // La fecha seleccionada también deberá guardarse y recuperarse de una cookie si es necesario
    var fechaActual = getCookie("fechaSeleccionada");

    if (userData) {
        //Cambiar el formnato de la fecha de la reserva
        var fechaObj = new Date(fechaActual);
        var dia = fechaObj.getDate();
        var mes = fechaObj.getMonth() + 1; 
        var anio = fechaObj.getFullYear();
        var fechaFormateada = `${dia}/${mes}/${anio}`;

        document.getElementById("nombre").textContent = userData.nombre + " " + userData.apellido;
        document.getElementById("dia-hora").textContent = fechaFormateada+ ", " + userData.hora;
        document.getElementById("numero-personas").textContent = userData.numero + " personas";
        document.getElementById("ubicacion").textContent = userData.ubicacion;
    }
});

function getCookie(name) {
    var cookiesArr = decodeURIComponent(document.cookie).split(';');

    for(var i = 0; i < cookiesArr.length; i++) {
        var cookiePair = cookiesArr[i].split('=');

        if(name == cookiePair[0].trim()) {
            // Retornar el valor de la cookie
            return cookiePair[1];
        }
    }

    return null;
}