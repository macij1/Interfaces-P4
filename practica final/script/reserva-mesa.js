document.addEventListener("DOMContentLoaded", function() {
    sessionStorage.setItem("mesaSeleccionada", ""); 
});
function reservarMesa(mesa){
    var imagen = document.getElementById(mesa);
    var mesaS = sessionStorage.getItem("mesaSeleccionada");

    if (mesaS){
        imagen.src = "../imagenes/mesa-individual.png";
        switch(mesa){
            case "mesa1":
                imagen.style.top = "210px";
                imagen.style.left = "132px";
                break;
            case "mesa2":
                imagen.style.top = "251px";
                imagen.style.left = "205px";
                break;
            case "mesa3":
                imagen.style.top = "147px";
                imagen.style.left = "236px"; 
                break;
        }
        if (mesaS == mesa){
            mesaS = "";
        } 
    }else{
        imagen.src = "../imagenes/mesa-individual-reservada.png";
        mesaS = mesa;
        //Ajustar imagenes mesas
        switch(mesa){
            case "mesa1":
                imagen.style.top = "206px";
                imagen.style.left = "116px";
                break;
            case "mesa2":
                imagen.style.top = "248px";
                imagen.style.left = "190px";
                break;
            case "mesa3":
                imagen.style.top = "144px";
                imagen.style.left = "220px"; 
                break;
        }
    }
    sessionStorage.setItem("mesaSeleccionada", mesaS);
}
function redirigir(){
    var mesaS = sessionStorage.getItem("mesaSeleccionada");
    if (mesaS){
        window.location.href = "reservar-datos.html";
    }
}