function setCookie(name, value) {
    var cookie = name + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = cookie;
}

function getCookie(name) {
    var cookiesArr = decodeURIComponent(document.cookie).split(';');
    for(var i = 0; i < cookiesArr.length; i++) {
        var cookiePair = cookiesArr[i].split('=');
        if(name == cookiePair[0].trim()) {
            return cookiePair[1];
        }
    }
    return null;
}

function obtenerDatosUsuarios(){
    var userData = getCookie("usuario");
    return userData ? JSON.parse(userData) : {};
}

function validarNombre() {
    nombreInput = document.getElementById("name");
    var nombrePattern = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
    if (nombrePattern.test(nombreInput.value)) {
        nombreInput.style.color = 'green';
        var userData = obtenerDatosUsuarios();
        userData.nombre = nombreInput.value;
        setCookie("usuario", JSON.stringify(userData));
    } else {
        nombreInput.style.color ='red';
    }
}

function validarApellido() {
    apellidoInput = document.getElementById("surname");
    var apellidoPattern = /^[A-Za-z ]+$/;
    if (apellidoPattern.test(apellidoInput.value)) {
        apellidoInput.style.color = 'green';
        var userData = obtenerDatosUsuarios();
        userData.apellido = apellidoInput.value;
        setCookie("usuario", JSON.stringify(userData));
    } else {
        apellidoInput.style.color = 'red';
    }
}

function validarTelefono() {
    telefonoInput = document.getElementById("phone");
    var telefonoPattern = /^[0-9]{9}$/;
    if (telefonoPattern.test(telefonoInput.value)) {
        telefonoInput.style.color = 'green';
        var userData = obtenerDatosUsuarios();
        userData.telefono = telefonoInput.value;
        setCookie("usuario", JSON.stringify(userData));
    } else {
        telefonoInput.style.color = 'red';
    }
}

function validarCorreo() {
    correoInput = document.getElementById("email");
    var correoPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (correoPattern.test(correoInput.value)) {
        correoInput.style.color ='green';
        var userData = obtenerDatosUsuarios();
        userData.correo = correoInput.value;
        setCookie("usuario", JSON.stringify(userData));
    } else {
        correoInput.style.color ='red';
    }
}
