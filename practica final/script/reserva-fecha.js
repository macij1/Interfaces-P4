src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/2.27.0/date-fns.min.js"
document.addEventListener("DOMContentLoaded", function() {
    var calendarioDiv = document.getElementById("calendario");
    var fechaActual = new Date();
    var fechaActualReal = new Date();

    function obtenerFechasReservadas() {
        var reservadas = localStorage.getItem("fechasReservadas");
        return reservadas ? JSON.parse(reservadas) : [];
    }

    function construirCalendario(mes, anio) {
      calendarioDiv.innerHTML = "";
      
      var encabezadoMes = document.createElement("p");
      var diasMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      encabezadoMes.innerHTML = diasMes[mes] +" "+ anio;
      calendarioDiv.appendChild(encabezadoMes)
      
      var tabla = document.createElement("table");
      
      var encabezado = tabla.createTHead();
      var filaEncabezado = encabezado.insertRow();
      var diasSemana = ["L", "M", "X", "J", "V", "S", "D"];

      for (var i = 0; i < diasSemana.length; i++) {
        var celda = document.createElement("th");
        celda.innerHTML = diasSemana[i];
        filaEncabezado.appendChild(celda);
      }

      var primerDia = new Date(anio, mes, 1);
      var ultimoDia = new Date(anio, mes + 1, 0);
      var diaActual = 1;
      var diaSemana = (primerDia.getDay()+6)%7;
      var ultimaFila = tabla.insertRow();

      var fechasReservadas = obtenerFechasReservadas();

      for (var i = 0; i < 6 * 7; i++) {
        var celda = ultimaFila.insertCell();

        if (i < diaSemana || diaActual > ultimoDia.getDate()) {
          celda.innerHTML = "&nbsp;";
        } else {
          celda.innerHTML = diaActual;
          var fecha = new Date(anio, mes, diaActual);
            if (fecha < fechaActualReal || fechasReservadas.includes(fecha.toDateString())){
                celda.style.backgroundColor ="rgb(103, 103, 103,0.5)";
                celda.style.borderRadius = "50%";
                celda.style.textDecoration = "line-through";
            } else {
                celda.addEventListener("click", function() {
                    var diaSeleccionado = this.innerHTML;
                    var fechaSeleccionada = new Date(anio, mes, diaSeleccionado);
                    if(fechaSeleccionada > fechaActualReal){
                        localStorage.setItem("fechaSeleccionada", fechaSeleccionada.toDateString());
                        // Añadir a las fechas reservadas
                        var fechasReservadas = obtenerFechasReservadas();
                        fechasReservadas.push(fechaSeleccionada.toDateString());
                        localStorage.setItem("fechasReservadas", JSON.stringify(fechasReservadas));
                        window.location.href="../pestañas/reservar-datos.html";
                    }
                });
            }
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
        imgAnterior.src = "../imagenes/flecha-calendario_izquierda.png";
        botonAnterior.appendChild(imgAnterior);
        botonAnterior.addEventListener("click", function() {
            fechaActual.setMonth(fechaActual.getMonth() - 1);
          if (fechaActual >= fechaActualReal){
            mostrarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
          }else{
            fechaActual.setMonth(fechaActual.getMonth() + 1);
          }
        });
        calendarioDiv.appendChild(botonAnterior);

        // Botón para ir al mes siguiente
        var botonSiguiente = document.createElement("button");
        botonSiguiente.id = "btnSiguiente";
        var imgSiguiente = document.createElement("img");
        imgSiguiente.src = "../imagenes/flecha-calendario_derecha.png";
        botonSiguiente.appendChild(imgSiguiente);
        botonSiguiente.addEventListener("click", function() {
            fechaActual.setMonth(fechaActual.getMonth() + 1);
            if (fechaActual <= fechaActualReal.setMonth(fechaActualReal.getMonth() + 2)) {
              fechaActualReal.setMonth(fechaActualReal.getMonth()-2);
              mostrarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
            } else {
              fechaActualReal.setMonth(fechaActualReal.getMonth()-2)
              fechaActual.setMonth(fechaActual.getMonth() - 1);
            }
        });
        calendarioDiv.appendChild(botonSiguiente);
    }

    mostrarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());
  });