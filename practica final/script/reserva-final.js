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
        //document.getElementById("mesa").textContent = "Preferencia: " + mesa;
        document.getElementById("ubicacion").textContent = ubicacion;
    }


    let btnAbrirPopup = document.getElementById('btn-get-cupon');
    let overlay = document.getElementById('overlay');
    let cupon_ya_calculado = false;
    let mostrar_cupon = document.getElementById('cupon-calculado');
    let mostrar_descuento = document.getElementById('descuento-calculado');
    let cupon = ""
    btnAbrirPopup.addEventListener('click', function(){
        overlay.classList.add('active');
        if(cupon_ya_calculado == false){
            let cupon = generarStringAleatorio();
            mostrar_cupon.textContent = cupon;
            console.log(cupon)
            cupon_ya_calculado = true;
            mostrar_descuento.textContent = añadirCupon(cupon)
            mostrar_descuento.textContent = mostrar_descuento.textContent.concat("%")
        }
        
    });

    let btnCerrarPopup = document.getElementById('btn-cerrar-popup')
    btnCerrarPopup.addEventListener('click', function(){
        overlay.classList.remove('active');
    });
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

function generarStringAleatorio() {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    let stringAleatorio = '';
    for (let i = 0; i < 3; i++) {
      const letraAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
      const numeroAleatorio = numeros.charAt(Math.floor(Math.random() * numeros.length));
      stringAleatorio += letraAleatoria + numeroAleatorio;
    }
    return stringAleatorio;
}
  
function añadirCupon(key){
    let diccionario = JSON.parse(localStorage.getItem('cuponesGuardados'));
    // Descuento del 10 al 90 %
    descuento = (Math.floor(Math.random() * 9) + 1) * 10 
    // Guardar de nuevo en local storage
    diccionario[key] = descuento;
    localStorage.setItem('cuponesGuardados', JSON.stringify(diccionario));
    return descuento
}