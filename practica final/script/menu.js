document.addEventListener('DOMContentLoaded', function() {
    const cestaIcono = document.getElementById('cestaIcono');
    const cestaDesplegable = document.getElementById('cestaDesplegable');
    const cruzCompra= document.getElementById('CruzCesta')
    const productosSeleccionados = document.getElementById('productosSeleccionados');
  
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
      cestaDesplegable.style.right = '-200px';e
    });

});

  