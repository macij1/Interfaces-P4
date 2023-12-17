function validarDatosUsuario() {
    var nombreInput = document.getElementById("name");
    var apellidoInput = document.getElementById("surname");
    var telefonoInput = document.getElementById("phone");
    var correoInput = document.getElementById("email");
    var tarjetaInput = document.getElementById("tarjeta");

    var nombrePattern = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
    var apellidoPattern = /^[A-Za-z ]+$/;
    var telefonoPattern = /^[0-9]{9}$/;
    var correoPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    nombrePattern.test(nombreInput.value)
    apellidoPattern.test(apellidoInput.value)
    telefonoPattern.test(telefonoInput.value)
    correoPattern.test(correoInput.value)
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    validarDatosUsuario();
    
    window.location.href = "menu_final.html";
});
