// Variables
const enviarBtn = document.querySelector("#enviar");

// EventListeners
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", iniciarApp);
}

// Funciones
function iniciarApp() {
  enviarBtn.disabled = true;
  enviarBtn.classList.add("cursor-not-allowed", "opacity-50");
}
