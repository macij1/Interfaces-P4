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
      <span class="derecha">${precioGuardado}</span>
    </div>`;

    containerFichas.appendChild(ficha_total);
  });


function Boton1() {
  window.location.href = "../pestañas/menu.html";
}

function Boton2() {
  window.location.href = "../pestañas/menu_formulario.html";
}