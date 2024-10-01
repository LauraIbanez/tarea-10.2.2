
// Obtener referencias a los elementos
const miInput = document.getElementById('inputText');
const guardarBtn = document.getElementById('buttonText');

// Función para guardar el valor en localStorage
function guardarEnLocalStorage() {
    const valor = miInput.value;
    localStorage.setItem('miInputValue', valor);
}

// Función para cargar el valor desde localStorage
function cargarDesdeLocalStorage() {
    const valorGuardado = localStorage.getItem('miInputValue');
    if (valorGuardado !== null) {
        miInput.value = valorGuardado;
    }
}

// Cargar el valor cuando la página se carga
document.addEventListener('DOMContentLoaded', cargarDesdeLocalStorage);

// Guardar el valor en localStorage cuando se hace clic en el botón
guardarBtn.addEventListener('click', guardarEnLocalStorage)
