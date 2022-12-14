let btnFin = document.getElementById("input-submit");

//Aplicación de STORAGE Y JSON
//Funcion entrar por medio del login
function entrar (){
  const usu = document.getElementById("mailUsuario").value;
  const nomUsu = document.getElementById("nombreUsuario").value;
  console.log("Usuario Ingresado: "+usu + ". "+ " Su nombre es "+nomUsu);
  

  if((usu == "pato@mail.com" && nomUsu == "Patricio") || (usu == "griselda@mail.com" && nomUsu == "Griselda")){
    Swal.fire({
      icon: 'success',
      title: 'Excelente!!!',
      text: 'Usuario '+nomUsu + " "+ "registado con éxito!" + " Bienvenido!!!",
      
    })
    
    localStorage.setItem("usuario","pato@mail.com");
    localStorage.setItem("usuario2","griselda@mail.com");

    let usuarioSesion = localStorage.getItem("usuario");
    let usuarioSesion2 = localStorage.getItem("usuario2");
    console.log(usuarioSesion) || console.log(usuarioSesion) ;
    }else{
     Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: 'Los datos ingresados son erróneos, por favor ingrese nuevamente',
  
})
  }

}

//Evento Boton de ingreso
const boton =document.getElementById("butonUsu").addEventListener("click",function(){
  entrar()


});

//variables creadas
let perfil1 = "Conservador";
let perfil2 = "Moderado";
let perfil3 = "Agresivo";

function verificarRespuestas(){
  let total = 10;
  let puntos = 0;
  let miForm = document.forms["testForm"];
  
  const respuestas = ["a","d","d","a","b","b","b","b","b","b"];

  for(let i = 1; i <= total; i++){
    if(miForm["p"+ i].value === null || miForm["p"+i].value === "" ){
      alert("Por favor responde la pregunta "+ i)
      return false;

    }else{
      if(miForm["p"+ i].value === respuestas[i - 1]){
        puntos++;

      }
    }
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = 
  Swal.fire({
    icon: 'info',
    title: 'Obtuviste:',
    text:  puntos + " respuestas correctas " + " sobre " + total + " preguntas posibles ",
    
  })

  return false
}


btnFin.onclick = () => {
  
  //Toast
  Toastify({
   text: "Recibiras tu pedido el dia "+entrega.toLocaleString(DateTime.DATE_FULL),        
   duration: 5000,
   gravity: 'top',
   position: 'center',
   style: {
      background: 'linear-gradient(to right, #00b09b, #96c92d)',
   },

  
  }).showToast();
}


