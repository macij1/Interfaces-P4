//Metodo high contrast
document.addEventListener("DOMContentLoaded", function() {
  var tema = localStorage.getItem('tema');
  if(tema == "default"){
      document.body.classList.remove('alto-contraste');
  }else{
      document.body.classList.add('alto-contraste');
  }

  //Se guardan los cupones para cualquier usuario, si todavía no se han registrado
  let cupones = localStorage.getItem('cuponesGuardados');
  if (!cupones) {
    let cupones = {
      "MAKI": 10,
      "WAKAME": 20,
      "SHUSHITA23": 35
    };
    let diccionarioTexto = JSON.stringify(cupones);
    localStorage.setItem('cuponesGuardados', diccionarioTexto)
    } 

});
function changeTheme(){
    var tema = localStorage.getItem('tema');
    if(tema == "default"){
      localStorage.setItem('tema', "high_contrast");
      document.body.classList.add('alto-contraste');
    }else{
      localStorage.setItem('tema', "default");
      document.body.classList.remove('alto-contraste');
    }
  
  }

function goInicio(){
  window.location.href = "../pagina-inicio.html";
}

