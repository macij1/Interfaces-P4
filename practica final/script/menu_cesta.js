document.addEventListener('DOMContentLoaded', function() {
  const containerFichas = document.querySelector('.container-fichas');
  let lista_fichas_producto = JSON.parse(localStorage.getItem("lista_fichas_producto"));

  lista_fichas_producto.forEach((ficha, index) => {
      const fichaDiv = document.createElement('div');
      fichaDiv.classList.add('ficha-producto');
      fichaDiv.id = `ficha-producto-${index + 1}`;
  
      fichaDiv.innerHTML = `
        <div class="imagen">
          <img src="${ficha.imagen}" alt="${ficha.nombre}" />
        </div>
        <div class="nombre-precio">
          <h4>${ficha.nombre}</h4>
          <p>${ficha.precio}</p>
        </div>
        <div class="cantidad">
          <p>x${ficha.cantidad}</p>
        </div>
      `;
    
      containerFichas.appendChild(fichaDiv);
    });
  
  const precioGuardado = localStorage.getItem('precio')
  const ficha_total = document.createElement('div');
  ficha_total.classList.add('parte_inferior');


  ficha_total.innerHTML = `
  <div class="total">
    <span class="izquierda">Total:</span>
    <span class="derecha" id="precio">${precioGuardado}</span>
  </div>`;

  containerFichas.appendChild(ficha_total);

  // Canjear cupón
  document.getElementById('formulario').addEventListener('submit', validarCupon);
  
});


function Boton1() {
  window.location.href = "../pestañas/menu.html";
}

function Boton2() {
  window.location.href = "../pestañas/menu_formulario.html";
}

function validarCupon(event) {
 event.preventDefault(); // Evitar que el formulario se envíe

  let cuponInput = document.getElementById('cupon');
  let cuponValor = cuponInput.value.trim();
  let diccionario = JSON.parse(localStorage.getItem('cuponesGuardados'));
  let descuento = diccionario[cuponValor]

  if (descuento == undefined) {
      document.getElementById('mensaje-validacion').textContent = 'Cupón no válido';
  } else {
      document.getElementById('mensaje-validacion').textContent = 'Cupón correcto, descuento del '.concat(descuento.toString()).concat("% aplicado")
      let precio=document.getElementById('precio')
      let precio_numero= parseInt(precio.textContent)
      let precio_descuento= precio_numero-(precio_numero*descuento/100)
      precio.textContent= precio_descuento+ " €"
      cupones_aplicados+=1;
  }
}


