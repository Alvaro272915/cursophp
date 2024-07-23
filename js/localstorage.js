function getlocalstorage(){
    const htmlNombre = document.getElementById("nombreusuario");
    const nombreDelUsuario = localStorage.getItem('nombreusuario');
    htmlNombre.innerText = nombreDelUsuario
}
