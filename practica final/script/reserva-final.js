document.addEventListener("DOMContentLoaded", function() {
    var userDataString = sessionStorage.getItem("usuario");
    var fechaActual = sessionStorage.getItem("fechaSeleccionada");
    
    guardarFecha(fechaActual);

    var numero = sessionStorage.getItem("numeroPersonas");
    var hora = sessionStorage.getItem("hora");
    var ubicacion = sessionStorage.getItem("ubicacion");
    var mesa = sessionStorage.getItem("mesaSeleccionada");

    if (userDataString) {
        var userData = JSON.parse(userDataString);
        var fechaObj = new Date(fechaActual);
        var dia = fechaObj.getDate();
        var mes = fechaObj.getMonth() + 1; 
        var anio = fechaObj.getFullYear();
        var fechaFormateada = `${dia}/${mes}/${anio}`;

        document.getElementById("nombre").textContent = userData.nombre + " " + userData.apellido;
        document.getElementById("dia-hora").textContent = fechaFormateada + ", " + hora;
        document.getElementById("numero-personas").textContent = numero + " personas";
        document.getElementById("mesa").textContent = "Preferencia: " + mesa;
        document.getElementById("ubicacion").textContent = ubicacion;
    }
});

function setCookie(name, value, days) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    var expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

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

function obtenerFechasReservadas() {
    var reservadas = getCookie("fechasReservadas");
    return reservadas ? JSON.parse(reservadas) : [];
}

function guardarFecha(fechaSeleccionada){
    var fechasReservadas = obtenerFechasReservadas();
    fechasReservadas.push(fechaSeleccionada);
    setCookie("fechasReservadas", JSON.stringify(fechasReservadas), 90);
}
