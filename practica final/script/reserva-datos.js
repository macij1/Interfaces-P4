document.addEventListener('DOMContentLoaded', () => {
    var sesion = sessionStorage.getItem("sesionIniciada");
    if(sesion){
        window.location.href = "../pestañas/reservar-final.html";
    }
});

function setSessionData(name, value) {
    sessionStorage.setItem(name, JSON.stringify(value));
}

function getSessionData(name) {
    var data = sessionStorage.getItem(name);
    return data ? JSON.parse(data) : {};
}

function guardarDatosUsuario() {
    var userData = getSessionData("usuario");

    var nombreInput = document.getElementById("name");
    var apellidoInput = document.getElementById("surname");
    var telefonoInput = document.getElementById("phone");
    var correoInput = document.getElementById("email");

    var nombrePattern = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
    var apellidoPattern = /^[A-Za-z ]+$/;
    var telefonoPattern = /^[0-9]{9}$/;
    var correoPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (nombrePattern.test(nombreInput.value)) {
        userData.nombre = nombreInput.value;
    }

    if (apellidoPattern.test(apellidoInput.value)) {
        userData.apellido = apellidoInput.value;
    }

    if (telefonoPattern.test(telefonoInput.value)) {
        userData.telefono = telefonoInput.value;
    }

    if (correoPattern.test(correoInput.value)) {
        userData.correo = correoInput.value;
    }

    setSessionData("usuario", userData);
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    guardarDatosUsuario();
    
    window.location.href = "reservar-final.html";
});
