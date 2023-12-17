document.addEventListener('DOMContentLoaded', function() {

    let btnAbrirPopup = document.getElementById('btn-get-cupon');
    let overlay = document.getElementById('overlay');
    let mostrar_cupon = document.getElementById('cupon-calculado');
    let mostrar_descuento = document.getElementById('descuento-calculado');
    let cupon_ya_calculado = false;

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