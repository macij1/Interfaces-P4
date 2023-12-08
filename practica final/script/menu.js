document.addEventListener('DOMContentLoaded', function() {
    const cestaIcono = document.getElementById('cestaIcono');
    const cestaDesplegable = document.getElementById('cestaDesplegable');
    const productosSeleccionados = document.getElementById('productosSeleccionados');
  
    cestaIcono.addEventListener('click', () => {
      // Cambiar la visibilidad del desplegable al hacer clic en la imagen de la cesta
      if (cestaDesplegable.style.display === 'none' || cestaDesplegable.style.display === '') {
        cestaDesplegable.style.display = 'block';
        cestaDesplegable.style.right = '8%'; // Mostrar el desplegable a la derecha
      } else {
        cestaDesplegable.style.display = 'none';
        cestaDesplegable.style.right = '-200px'; // Ocultar el desplegable nuevamente
      }
    });
  
});
  