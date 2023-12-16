document.addEventListener('DOMContentLoaded', () => {
  //sessionStorage.setItem("sesionIniciada", false); 
  'use strict'
  const grande1 = document.querySelector(`.grande1`)
  const punto1 = document.querySelectorAll('.punto1')
  const grande2 = document.querySelector(`.grande2`)
  const punto2 = document.querySelectorAll('.punto2')
  const grande3 = document.querySelector(`.grande3`)
  const punto3= document.querySelectorAll('.punto3')
  var pos1 = 0;
  var desplazamiento1= 0;
  var pos2 = 0;
  var desplazamiento2= 0;
  var pos3 = 0;
  var desplazamiento3= 0;

  // Al hacer click en un punto
  //Saber la pos del punto
  //Aplicar un transform al grande
  punto1.forEach( (cadaPunto1, i)=> {
    punto1[i].addEventListener('click', ()=>{
    console.log("CLICK1")
    if(i == 1 && pos1>=0){
      desplazamiento1 = pos1-33.33
    }else if(i==0 && pos1<=0){
      desplazamiento1 = pos1+33.33
    }
    pos1 = desplazamiento1;
    grande1.style.transform = `translateX(${desplazamiento1}%)`
    });
  });


  punto2.forEach( (cadaPunto2, i)=> {
    punto2[i].addEventListener('click', ()=>{
    console.log("CLICK2")
    if(i == 1 && pos2>=0){
      desplazamiento2 = pos2-33.33
    }else if(i==0 && pos2<=0){
      desplazamiento2 = pos2+33.33
    }
    pos2 = desplazamiento2;
    grande2.style.transform = `translateX(${desplazamiento2}%)`
    });
  });

  punto3.forEach( (cadapunto3, i)=> {
    punto3[i].addEventListener('click', ()=>{
    console.log("CLICK3")
    if(i == 0 && pos3<0){
      desplazamiento3 = pos3+25
    }else if(i==1 && pos3>-75){
      desplazamiento3 = pos3-25
    }
    pos3 = desplazamiento3;
    grande3.style.transform = `translateX(${desplazamiento3}%)`
    });
  });

  // Función para crear el mapa
  function crearMapa(contenedorId, latitud, longitud, texto) {
    var map = L.map(contenedorId).setView([latitud, longitud], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    var marker = L.marker([latitud, longitud]).addTo(map);
    marker.bindPopup(`<b>${texto}</b><br>`).openPopup();
  }

  // Llama a la función para crear el mapa en cada contenedor específico
  crearMapa('mapa1', 40.425503450302024, -3.677563817625843, 'Localización General Diaz Porlier');
  crearMapa('mapa2', 40.38717285119627, -3.7031611194796916, 'Localización Olvido');

});

function ocultarFooter() {
  document.querySelector(".footer").style.display = "none";
  document.querySelector(".cookies-button").style.opacity =  0.8;
}

function mostrarFooter(){
  document.querySelector(".footer").style.display = "block";
  document.querySelector(".cookies-button").style.opacity = 0
}


