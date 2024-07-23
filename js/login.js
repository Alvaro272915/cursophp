class Login{
    constructor(){
        this.usuarios = [
            {
                username: "a",
                password: "1",
                nombreusuario: "Prueba de Usuario"
            },
            {
                username: "Alvaro",
                password: "Cami272915++",
                nombreusuario: "ALVARO URREGO VIANA"
            }
        ]
    }

    autenticacion(usuariodig , contrasenadig) {

        if (this.usuarios.some (info => info.username === usuariodig && info.password === contrasenadig)){
            let elemntoencontrado = this.usuarios.find (info => info.username === usuariodig && info.password === contrasenadig)
            const nombreusuario = localStorage.setItem("nombreusuario", elemntoencontrado.nombreusuario)
            return true
        }else{
            return false
        }
    }        
}
class ValidacionFormulario{
    constructor(formulario){
        this.formulario = formulario ;
        this.campos = this.formulario.querySelectorAll('input')
        this.errorMessage = {
            usuario: "El usuario no puede estar en Blanco, Por Fvaor Ingrese Información"
        }
        this.errorMessagepass = {
            contrasena: "La Contraseña no puede estar en Blanco, Por Fvaor Ingrese Información"
        }
        this.errorValidapass = {
            contrasena: "debe Digitar una contraseña Valida asi : Contener Una Mayuscula, Minuscula, Numero, Caracter Especial"
        }
    }
    validacionUsuario (){
        const usuarioInput = this.formulario.querySelector("#usuario")
        const usuario =  usuarioInput.value.trim() ;
        if (usuario === ''){
            this.mostrarError(usuarioInput,this.errorMessage.usuario)
            return false
        }
        return true
    }
    
    validacioncontrasena(){
        const passwordInput = this.formulario.querySelector('#pass')
        const contrasena =  passwordInput.value.trim() ;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%+=*])[0-9a-zA-Z!@#$%+=*]{8,}$/;
        const validacionPassword = passwordRegex.test(passwordInput.value)
        if (contrasena === ''){
            this.mostrarError(passwordInput,this.errorMessagepass.contrasena)
            return false
        }
        if (validacionPassword === false){
            this.mostrarError(passwordInput,this.errorValidapass.contrasena)
            return false
        }
        return true
    }
    
    mostrarError (input, mensaje){
        const contenerMensaje = document.createElement('div')
        contenerMensaje.className = "error"
        contenerMensaje.innerText = mensaje
        input.parentNode.appendChild(contenerMensaje)
        window.alert(mensaje)
    }

    limpiarErrores(){
        const errores = this.formulario.querySelectorAll('.error') 
        errores.forEach(error => error.remove())
    }

    ValidaFormulario(){
        this.limpiarErrores()
        if (this.validacionUsuario() && this.validacioncontrasena()){
            return true
        } else {
            return false
        }

    }
    inicioFormulario(){
        this.formulario.addEventListener('submit', this.ValidacionFormulario.bind(this))
    }

}

function enviosformulario(event){
    event.preventDefault() ;

    const selectForm = document.getElementById("login") 
    const validacionCampos = new ValidacionFormulario(selectForm)
    
    const usuario = document.getElementById ("usuario").value ;
    const contrasena = document.getElementById("pass").value ;
    const validacionlogin = new Login () ;

    if(validacionCampos.ValidaFormulario()){
        if (validacionlogin.autenticacion(usuario,contrasena)) {
            window.location.href =  'PaginaInicio.html'
        }
        else{
            window.alert("Usuario y/o Contraseña Invalidos")
        }
    }
}

