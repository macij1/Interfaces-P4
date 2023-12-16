function submitLoginForm(event) {
    event.preventDefault();

    // Obtener valores de nombre de usuario y contraseña
    var userName = document.getElementById("userNameLogin").value;
    var password = document.getElementById("passwordLogin").value;

    // Obtener la lista de usuarios registrados
    var usuariosRegistrados = obtenerRegistro();

    // Verificar si el usuario y la contraseña son válidos
    var usuarioValido = usuariosRegistrados.find(usuario => usuario.username === userName && usuario.contrasena === password);

    if (usuarioValido) {
        var datosUsuario = {
            nombre: usuarioValido.nombre,
            apellido: usuarioValido.apellido,
            telefono: usuarioValido.telefono,
            correo: usuarioValido.correo
        };
        sessionStorage.setItem("usuario", JSON.stringify(datosUsuario));
        sessionStorage.setItem("sesionIniciada", true); 
        window.location.href = "../pagina-inicio.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
}

function obtenerRegistro() {
    var registrados = getCookie("usuariosRegistrados");
    return registrados ? JSON.parse(registrados) : [];
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
