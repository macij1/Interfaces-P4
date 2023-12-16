var usuario = {};

function obtenerRegistro() {
    var registrados = getCookie("usuariosRegistrados");
    return registrados ? JSON.parse(registrados) : [];
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

function guardarRegistro(usuario) {
    var usuariosRegistrados = obtenerRegistro();
    usuariosRegistrados.push(usuario);
    setCookie("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
}

function validarNombreUsuario() {
    userNameInput = document.getElementById("userName");
    var nuevoUsuario = userNameInput.value;

    // Obtener la lista de usuarios registrados y verificar si el nombre de usuario ya existe
    var usuariosRegistrados = obtenerRegistro();
    var usuarioExistente = usuariosRegistrados.find(usuario => usuario.username === nuevoUsuario);

    if (usuarioExistente) {
        userNameInput.value = ""; 
    } else {
        userNameInput.style.color = 'green';
        usuario.username = nuevoUsuario;
    }
}

function validarContraseña() {
    contrasenaInput = document.getElementById("password");
    var contrasenaPattern = /^[A-Za-z0-9]{2,}$/;
    if (contrasenaPattern.test(contrasenaInput.value)) {
        contrasenaInput.style.color = 'green';
        usuario.contrasena = contrasenaInput.value;
    } else {
        contrasenaInput.style.color ='red';
    }
}

function validarNombre() {
    nombreInput = document.getElementById("name");
    var nombrePattern = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
    if (nombrePattern.test(nombreInput.value)) {
        nombreInput.style.color = 'green';
        usuario.nombre = nombreInput.value;
    } else {
        nombreInput.style.color ='red';
    }
}

function validarApellido() {
    apellidoInput = document.getElementById("surname");
    var apellidoPattern = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
    if (apellidoPattern.test(apellidoInput.value)) {
        apellidoInput.style.color = 'green';
        usuario.apellido = apellidoInput.value;
    } else {
        apellidoInput.style.color = 'red';
    }
}

function validarTelefono() {
    telefonoInput = document.getElementById("phone");
    var telefonoPattern = /^[0-9]{9}$/;
    if (telefonoPattern.test(telefonoInput.value)) {
        telefonoInput.style.color = 'green';
        usuario.telefono = telefonoInput.value;
    } else {
        telefonoInput.style.color = 'red';
    }
}

function validarCorreo() {
    correoInput = document.getElementById("email");
    var correoPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (correoPattern.test(correoInput.value)) {
        correoInput.style.color ='green';
        usuario.correo = correoInput.value;
    } else {
        correoInput.style.color ='red';
    }
}

function submitFormR(event) {
    event.preventDefault();
    guardarRegistro(usuario);
    window.location.href = "../pagina-inicio.html";
}