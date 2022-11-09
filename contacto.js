const nombre = document.getElementById("name")
const email = document.getElementById("email")
const apellido = document.getElementById("apellido")
const comentario = document.getElementById("comentario")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <1){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }
    if(apellido.value.length <1){
        warnings += `El apellido no es válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El mail no es válido <br>`
        entrar = true
    }
    if(comentario.value.length <5){
        warnings += `El comentario está vacio <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
        
    }else{
        parrafo.innerHTML = warnings +  Swal.fire({
            icon: 'success',
            title: 'Excelente!!!',
            text: "Consulta enviada con éxito"
            
          });
          return false         
    }
    
})