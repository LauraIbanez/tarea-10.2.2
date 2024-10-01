
function MostrarLocalData() {
    const datos= document.getElementById('data');
    const miInputValues = localStorage.getItem('miInputValue');
  
    console.log(datos.textContent = `${miInputValues}`)}

    document.addEventListener('DOMContentLoaded', () => {
        MostrarLocalData();
    });