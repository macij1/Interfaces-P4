/*Guardar los datos de las reservas*/
var userData = {};
var soldOutDates = [];

function SaveLocation(ubicacion){
    userData[location] = ubicacion;
}
function SaveNumber(number){
    userData[number] = number;
}
function SaveTime(time){
    userData[time] = time;
    localStorage.setItem("usuario",userData);
}
function SaveDate(){
    var fechaSeleccionada = new Date(localStorage.getItem("fechaSeleccionada"));
    userData[date] = fechaSeleccionada;
    soldOutDates.append(fechaSeleccionada);
    localStorage.setItem("fechaAgotadas", soldOutDates);
}

/*Guardar datos formulario y validar*/
var apellidoValido = false;
var telefonoValido = false;
var correoValido = false;
var nombreValido = false;


function validarNombre(){
    var nombreInput = document.getElementById("nombre").value;
    var pattern = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
    
    if (pattern.test(nombreInput)) {
        nombreValido = true;
      } else {
        nombreValido = false;
      }
}

function validarApellido(){
    var nombreInput = document.getElementById("apellido").value;
    var pattern = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
    
    if (pattern.test(nombreInput)) {
        apellidoValido = true;
      } else {
        apellidoValido = false;
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

function enviarInformacion() {
    if (dniValido && telefonoValido && correoValido && nombreValido) { 
        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var telefono = document.getElementById("telefono").value;
        var correo = document.getElementById("correo").value;
    
        // Guardar los datos en una cookie
        //document.cookie = "nombre=" + nombre;
        //document.cookie = "apellido=" + apellido;
        //document.cookie = "telefono=" + telefono;
        //document.cookie = "correo=" + correo;
    
        // Guardar los datos en el almacenamiento local (Local Storage)
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("apellido", apellido);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("correo", correo);

        // Mostrar mensaje de éxito
        alert("Los datos del usuario se han guardado correctamente.");
    }
    else if (!nombreValido) {
        alert("Introduce el nombre correctamente");
    } else if (!apellidoValido) {
        alert("Introduce el nombre correctamente");
    } else if (!telefonoValido) {
        alert("Introduce el teléfono correctamente");
    } else if (!correoValido) {
        alert("Introduce el correo electrónico correctamente");
    } else {
        alert("Se ha producido un error inesperado");
    }
    var nuevaPestaña = '../pestañas/reservar-final.html';
    window.location.href = nuevaPestaña;
}
