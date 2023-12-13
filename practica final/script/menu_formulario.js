/*COMPROBACIONES PARA EL FORMIULARIO DE LA RESERVA*/
function validarNombre(){
    var nombreInput = document.getElementById("nombre").value;
    var pattern = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
    
    if (pattern.test(nombreInput)) {
        nombreValido = true;
      } else {
        nombreValido = false;
      }
}

function validarTelefono() {
    var telefonoInput = document.getElementById("telefono").value;
    var pattern = /^[0-9]{9}$/;

    if (pattern.test(telefonoInput)) {
        telefonoValido = true;
    } else {
        telefonoValido = false;
    }
}

function validarCorreo() {
    var correoInput = document.getElementById("correo").value;
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (pattern.test(correoInput)) {
        correoValido = true;
    } else {
        correoValido = false
    }
}
