function SaveLocation(ubicacion){
    var userData = obtenerDatosUsuarios();
    userData.ubicacion = ubicacion;
    setCookie("usuario", JSON.stringify(userData));}

function SaveNumber(number){
    var userData = obtenerDatosUsuarios();
    userData.numero = number;
    setCookie("usuario", JSON.stringify(userData)); 
}

function SaveTime(time){
    var userData = obtenerDatosUsuarios();
    userData.hora = time;
    setCookie("usuario", JSON.stringify(userData)); 
}

/*Codigo para guardar y extraer datos de las cookies*/
function setCookie(name, value) {
    var cookie = name + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = cookie;
}
function getCookie(name) {
    // Decodificar las cookies y dividirlas en un array
    var cookiesArr = decodeURIComponent(document.cookie).split(';');

    for(var i = 0; i < cookiesArr.length; i++) {
        var cookiePair = cookiesArr[i].split('=');

        if(name == cookiePair[0].trim()) {
            // Retornar el valor de la cookie
            return cookiePair[1];
        }
    }

    // Si no se encuentra la cookie, retornar null
    return null;
}

/*Funcion para obtener los datos de los usuarios de las cookies*/
function obtenerDatosUsuarios(){
    var userData = getCookie("usuario");
    return userData ? JSON.parse(userData) : {};
}