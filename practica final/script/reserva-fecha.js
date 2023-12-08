src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/2.27.0/date-fns.min.js"
document.addEventListener("DOMContentLoaded", function() {
    var calendarioDiv = document.getElementById("calendario");
    /*var encabezadoDiv = document.getElementById("encabezado");*/
    var fechaActual = new Date();

    function construirCalendario(mes, anio) {
      calendarioDiv.innerHTML = "";
      /*encabezadoDiv.innerHTML = dateFns.format(new Date(anio, mes), 'MMMM yyyy');*/

      var tabla = document.createElement("table");

      var encabezado = tabla.createTHead();
      var filaEncabezado = encabezado.insertRow();
      var diasSemana = ["L", "M", "X", "J", "V", "S", "D"];

      for (var i = 0; i < diasSemana.length; i++) {
        var celda = filaEncabezado.insertCell();
        celda.innerHTML = diasSemana[i];
      }

      var primerDia = new Date(anio, mes, 1);
      var ultimoDia = new Date(anio, mes + 1, 0);
      var diaActual = 1;
      var diaSemana = (primerDia.getDay()+6)%7;
      var ultimaFila = tabla.insertRow();

      for (var i = 0; i < 6 * 7; i++) {
        var celda = ultimaFila.insertCell();

        if (i < diaSemana || diaActual > ultimoDia.getDate()) {
          celda.innerHTML = "&nbsp;";
        } else {
          celda.innerHTML = diaActual;
          celda.addEventListener("click", function() {
            var diaSeleccionado = this.innerHTML;
            var fechaSeleccionada = new Date(anio, mes, diaSeleccionado);
            alert("Fecha seleccionada: " + fechaSeleccionada.toDateString());
          });
          diaActual++;
        }

        if (i % 7 === 6) {
          ultimaFila = tabla.insertRow();
        }
      }

      calendarioDiv.appendChild(tabla);
    }

    function mostrarCalendario(mes, anio) {
      construirCalendario(mes, anio);

      var botonAnterior = document.createElement("button");
        botonAnterior.id = "btnAnterior";
        var imgAnterior = document.createElement("img");
        imgAnterior.src = "../imagenes/compartir2.jpeg";
        botonAnterior.appendChild(imgAnterior);
        botonAnterior.addEventListener("click", function() {
          fechaActual.setMonth(fechaActual.getMonth() - 1);
          mostrarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
        });
        calendarioDiv.appendChild(botonAnterior);

        // Botón para ir al mes siguiente
        var botonSiguiente = document.createElement("button");
        botonSiguiente.id = "btnSiguiente";
        var imgSiguiente = document.createElement("img");
        imgSiguiente.src = "../imagenes/compartir2.jpeg";
        botonSiguiente.appendChild(imgSiguiente);
        botonSiguiente.addEventListener("click", function() {
          fechaActual.setMonth(fechaActual.getMonth() + 1);
          mostrarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
        });
        calendarioDiv.appendChild(botonSiguiente);
    }

    mostrarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
  });