function vaciarSessionStorage(){
    sessionStorage.clear();
}

document.querySelector("#cerrar_sesion").addEventListener('click', vaciarSessionStorage);