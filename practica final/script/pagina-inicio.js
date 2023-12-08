document.addEventListener('DOMContentLoaded', () => {
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
      if(i == 0 && pos1<0){
        desplazamiento1 = pos1+25
      }else if(i==1 && pos1>-75){
        desplazamiento1 = pos1-25
      }
      pos1 = desplazamiento1;
      grande1.style.transform = `translateX(${desplazamiento1}%)`
      });
    });
  
  
    punto2.forEach( (cadapunto2, i)=> {
      punto2[i].addEventListener('click', ()=>{
      console.log("CLICK2")
      if(i == 0 && pos2<0){
        desplazamiento2 = pos2+25
      }else if(i==1 && pos2>-75){
        desplazamiento2 = pos2-25
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
  });
  