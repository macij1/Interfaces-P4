document.addEventListener("DOMContentLoaded", function() {
    var tema = localStorage.getItem('tema');
    if(tema == "default"){
        document.body.classList.remove('alto-contraste');
    }else{
        document.body.classList.add('alto-contraste');
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