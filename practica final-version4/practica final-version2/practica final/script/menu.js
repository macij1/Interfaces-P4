document.addEventListener('DOMContentLoaded', function() {
    /* Cesta*/ 
    const cestaIcono = document.getElementById('cestaIcono');
    const cestaDesplegable = document.getElementById('cestaDesplegable');
    const cruzCompra= document.getElementById('CruzCesta');
    const fichaProducto0 = document.getElementById(`ficha-producto-0`);
    const texto_variable= document.getElementsByClassName('texto_variable')[0];
    const precio_total_Element= document.getElementById('precio_total');
    let total_cantidad_productos=0;
    let precio_total=0;
    let matriz_precios=[0,15,15,9,9,14,13,10,10,15,15,13,18];

    cestaIcono.addEventListener('click', () => {
      // Cambiar la visibilidad del desplegable al hacer clic en la imagen de la cesta
      if (cestaDesplegable.style.display === 'none' || cestaDesplegable.style.display === '') {
        cestaDesplegable.style.display = 'block';
        cestaDesplegable.style.right = '6%'; 
      } else {
        cestaDesplegable.style.display = 'none';
        cestaDesplegable.style.right = '-200px'; 
      }
    });

    cruzCompra.addEventListener('click', () => {
      cestaDesplegable.style.display = 'none';
      cestaDesplegable.style.right = '-200px';
    });


    for (let i = 1; i <= 12; i++) {
      const boton = document.getElementById(`boton${i}`);
      const suma = document.getElementById(`suma${i}`);
      const resta = document.getElementById(`resta${i}`);
      boton.addEventListener('click', () => manejarClickBoton(i));
      suma.addEventListener('click', () => manejarSuma(i));
      resta.addEventListener('click', () => manejarResta(i));
    }

    function manejarClickBoton(numeroBoton) {
      const fichaProducto = document.getElementById(`ficha-producto-${numeroBoton}`);
      const cantidadElement = document.getElementById(`cantidad-producto-${numeroBoton}`);
    
      /* Si el producto no esta en la cesta */ 
      if (fichaProducto.style.display === 'none'){
        /* Si es el primer producto en añadirse a la cesta */ 
        if (fichaProducto0.style.display != 'none'){
          fichaProducto0.style.display = 'none';
          fichaProducto.style.display = 'flex';
        }
        else{
            /* Si  no es el primer producto en añadirse */
            fichaProducto.style.display = 'flex';
        }
      }
      else{
        /* Si el producto está en la cesta */ 
        let cantidad = parseInt(cantidadElement.textContent);
        cantidad++;
        cantidadElement.textContent = cantidad.toString();
      }
  
      /* Si la cesta no esta abierta */
      if (cestaDesplegable.style.display === 'none' || cestaDesplegable.style.display === ''){
        cestaDesplegable.style.display = 'block';
        cestaDesplegable.style.right = '6%'; 
      }

      total_cantidad_productos++;
      precio_total+= matriz_precios[numeroBoton];

      if(total_cantidad_productos==1){
        texto_variable.textContent= "1 producto";
      }
      else{
        texto_variable.textContent= total_cantidad_productos.toString()+ " productos";
      }

      precio_total_Element.textContent= precio_total.toString() + " €";
    }

    function manejarSuma(numeroProducto){
      const cantidadElement = document.getElementById(`cantidad-producto-${numeroProducto}`);
      let cantidad = parseInt(cantidadElement.textContent);
      cantidad++;
      cantidadElement.textContent = cantidad.toString();

      total_cantidad_productos++;
      precio_total+= matriz_precios[numeroProducto];
      texto_variable.textContent= total_cantidad_productos.toString()+ " productos";
      precio_total_Element.textContent= precio_total.toString() + " €";
    }

    function manejarResta(numeroProducto){
      const fichaProducto = document.getElementById(`ficha-producto-${numeroProducto}`);
      const cantidadElement = document.getElementById(`cantidad-producto-${numeroProducto}`);
      let cantidad = parseInt(cantidadElement.textContent);
      cantidad--;
      if (cantidad==0){
        fichaProducto.style.display = 'none';
      }
      else{
        cantidadElement.textContent = cantidad.toString();
      }

      total_cantidad_productos--;
      if(total_cantidad_productos==1){
        texto_variable.textContent= "1 producto";
      }
      else{
        texto_variable.textContent= total_cantidad_productos.toString()+ " productos";
      }
      if(total_cantidad_productos==0){
        fichaProducto0.style.display='flex';
      }

      precio_total-= matriz_precios[numeroProducto];
      precio_total_Element.textContent= precio_total.toString() + " €";
    }

});

function VerBolsa() {
  let lista_fichas_producto = [];
  for (let i = 1; i <= 12; i++) {
    const fichaProducto = document.getElementById(`ficha-producto-${i}`);
    if (fichaProducto.style.display != 'none') {
      const imagen = fichaProducto.querySelector('.imagen img').getAttribute('src');
      const nombre = fichaProducto.querySelector('.nombre-precio h4').textContent;
      const precio = fichaProducto.querySelector('.nombre-precio p').textContent;
      const cantidad = fichaProducto.querySelector('.cantidad p').textContent;

      const ficha = {
        imagen: imagen,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
      };

      lista_fichas_producto.push(ficha);
    }
  }


  const precio_total_Element= document.getElementById('precio_total');
  localStorage.setItem("precio", precio_total_Element.textContent);
  localStorage.setItem("lista_fichas_producto", JSON.stringify(lista_fichas_producto));
  window.location.href = "../pestañas/menu_cesta.html";
}

function Boton2() {
  window.location.href = "../pestañas/menu_formulario.html";
}
  