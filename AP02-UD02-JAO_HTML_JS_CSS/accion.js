let tiempoActual = document.getElementById("tiempoActual");
let diasRestantesBox = document.getElementById("dias");
let horasRestantesBox = document.getElementById("horas");
let minutosRestantesBox = document.getElementById("minutos");
let segundosRestantesBox = document.getElementById("segundos");

window.setInterval(cuentaAtras, 1000);

function cuentaAtras() {
  let ahora = new Date();
  let newYear = new Date(2025, 0, 1); 

  let fechaActualFormateada = ahora.toLocaleDateString('es-ES') + ', ' + ahora.toLocaleTimeString('es-ES');
  tiempoActual.textContent = fechaActualFormateada;


  let diferenciaEnMilisegundos = newYear.getTime() - ahora.getTime();
  let diasRestantes = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

  
  let horasRestantes = Math.floor((diferenciaEnMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutosRestantes = Math.floor(((diferenciaEnMilisegundos % (1000 * 60 * 60)) / (1000 * 60)));
  let segundosRestantes = Math.floor(((diferenciaEnMilisegundos % (1000 * 60)) / 1000));

  diasRestantesBox.textContent = diasRestantes;
  horasRestantesBox.textContent = horasRestantes;
  minutosRestantesBox.textContent = minutosRestantes;
  segundosRestantesBox.textContent = segundosRestantes;
}