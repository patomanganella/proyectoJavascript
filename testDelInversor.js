let btnFin = document.getElementById("input-submit");

//Aplicación de STORAGE Y JSON

function entrar (){
  const usu = document.getElementById("mailUsuario").value;
  const nomUsu = document.getElementById("nombreUsuario").value;
  console.log("Usuario Ingresado: "+usu + ". "+ " Su nombre es "+nomUsu);
  

  if((usu == "pato@mail.com" && nomUsu == "Patricio") || (usu == "griselda@mail.com" && nomUsu == "Griselda")){
    Swal.fire({
      icon: 'success',
      title: 'Yess!!...',
      text: 'Usuario '+nomUsu + " "+ "registado con éxito!" + "Bienvenido!!!",
      footer: '<a href="">Why do I have this issue?</a>'
    })
    // alert("Usuario "+nomUsu + " "+ "registrado con éxito!");
    localStorage.setItem(usu,nomUsu);

    
   
console.log(usuNom);
  }else{
     Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: 'Los datos ingresados son erróneos, por favor ingrese nuevamente',
  
})
  }

}


const boton =document.getElementById("butonUsu").addEventListener("click",function(){
  entrar()


});


/*


//Aplicacion de ciclo Usuario y contraseña con ciclo FOR
for(let i=1;i<=3;i++){
    let entrada= prompt("Bienvenido Inversor :)"+"\nCreá tu Usuario para empezar");
    let contrasenia=prompt("Crea una contraseña para "+entrada);
    
    if((entrada!="")&&(contrasenia!="")){
        alert("Excelente!! "+"\nUsuario Creado" +"\nBienvenido a la web de Finanzas by Patricio Manganella!");
        break;
    }else{
        alert("Usuario y/o contraseña erroneos! Restan "+(3-i)+" intentos");
    
    }
    }
//console.log(usuarios);

*/

//variables creadas
let perfil1 = "Conservador";
let perfil2 = "Moderado";
let perfil3 = "Agresivo";

function verificarRespuestas(){
  let total = 2;
  let puntos = 0;
  let miForm = document.forms["testForm"];
  
  const respuestas = ["a","d"];

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
  resultado.innerHTML = '<h3> Obtuviste <span>'+ puntos + '</span> de <span>'+ total + " "+ 'puntos </span></h3>';

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
   //destination: 'https://www.coderhouse.com'
  
  }).showToast();
}




//*************************************************************** */

