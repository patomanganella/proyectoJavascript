//Aplicación de STORAGE Y JSON

function entrar (){
  const usu = document.getElementById("mailUsuario").value;
  const nomUsu = document.getElementById("nombreUsuario").value;
  console.log("Usuario Ingresado: "+usu + ". "+ " Su nombre es "+nomUsu);
  

  if((usu == "pato@mail.com" && nomUsu == "patricio") || (usu == "griselda@mail.com" && nomUsu == "griselda")){
    alert("Usuario "+nomUsu + " "+ "registrado con éxito!");
    localStorage.setItem(usu,nomUsu);
   
console.log(usuNom);
  }else{
    alert("Los datos ingresados son erroneos")
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

/*
const pregunta1 =[ {
  pregunta: "Segun estos activos, cual consideras que se ajusta a un perfil de inversor conservador",
  respuesta:"Plazo Fijo",
  incorrecta1:"Bonos",
  incorrecta2:"Acciones",
  incorrecta3:"Criptomonedas"
},
]

const pregunta2 =[ {
  pregunta: "Segun estos activos, cual consideras que se ajusta a un perfil de inversor moderado",
  respuesta:"Bonos",
  incorrecta1:"Plazo Fijo",
  incorrecta2:"Acciones",
  incorrecta3:"Criptomonedas"
},
]
const pregunta3 =[ {
  pregunta: "Segun estos activos, cual consideras que se ajusta a un perfil de inversor agresivo",
  respuesta:"Criptomonedas",
  incorrecta1:"Plazo Fijo",
  incorrecta2:"Acciones",
  incorrecta3:"Bonos",
},
]

*/

escogerPregunta()

function escogerPregunta(n){

  
  document.getElementById("pregunta").innerHTML = pregunta.categoria;


  



}












//*************************************************************** */
//Armado de Array de preguntas

const contenedor = document.getElementById("test");
const botonRes = document.getElementById("botonTest");
const resultadoTest = document.getElementById("resultado");

// const preguntas = [
// {//pregunta 1
//     id:1,
//     pregunta: "1. ¿En que activo invertirias?",
//     respuestas: {
//       a: "Plazos Fijos",
//       b: "Fondos comunes de Inversión",
//       c: "Bonos"
//     },
//     opcion: ["a", "b","c"],
// },
// {//pregunta 2
//   id:2,
//   pregunta: "2. ¿Cuántos años estarias dispuesto a mantener la inversion?",
//   respuestas: {
//     a: "de 1 a 5 años",
//     b: "de 5 a 10 años",
//     c: "mas de 10 años"
//   },
//   opcion: ["a", "b","c"],  
// },
// {//pregunta 3
// id:3,
// pregunta: "3. ¿Qué edad tienes? ",
// respuestas: {
//   a: "Mayor de 18 y menor de 25 años",
//   b: "Mayor de 25 y menor de 50 años",
//   c: "Mayor de 50 años"
// },
// opcion: ["a", "b","c"],
// }

// ]
// console.log(preguntas);


//Aplicacion de condicional
// let pregunta1 = (prompt("¿En que activo invertirias? - Elige la opción: "+"\n a) Plazos Fijos"+"\n b) Fondos comunes de Inversión"+"\n c) Bonos"));
// let pregunta2 = parseInt((prompt(" ¿Cuántos años estarias dispuesto a mantener la inversion? (solo digita el numero)")));
// let pregunta3 = (prompt("¿Qué edad tienes? - Elige la opción "+"\n a) Mayor de 18 y menor de 25 años"+"\n b) Mayor de 25 y menor de 50 años"+"\n c) Mayor de 50 años"));





botonRes.addEventListener('click',mostrarResultado);
// console.log(mostrarResultado);


/*
if((pregunta1 =="a") && (pregunta2 <="100") && (pregunta3 !="")){
  alert("Tu perfil de inversión es "+perfil1);

  const mostrarActivos = (activos) => "Los activos que se ajustan a tu perfil son: "+activos;
  alert(mostrarActivos("\n - Plazos fijos" +"\n - FCI"+"\n - Cauciones"+"\n - Compra de USD")); }

else if((pregunta1 =="b") && (pregunta2 <="5") && (pregunta3 =="a")){
  alert("Tu perfil de inversión es "+perfil1); 

  const mostrarActivos = (activos) => "Los activos que se ajustan a tu perfil son: "+activos;
  alert(mostrarActivos("\n - Plazos fijos" +"\n - FCI"+"\n - Cauciones"+"\n - Compra de USD")); }

else if((pregunta1 =="b") && (pregunta2 <="5") && (pregunta3 !="a")){
  alert("Tu perfil de inversión es "+perfil2);

  const mostrarActivos = (activos) => "Los activos que se ajustan a tu perfil son: "+activos;
  alert(mostrarActivos("\n - Fondos comunes de Inversion de renta mixta" +"\n - Materias Primas (Oro, Plata) "+"\n - Bajo porcentaje en acciones Argentinas")); }

else if((pregunta1 =="b") && (pregunta2 >="6")  && (pregunta3 !="")){
  alert("Tu perfil de inversión es "+perfil2); 

  const mostrarActivos = (activos) => "Los activos que se ajustan a tu perfil son: "+activos;
  alert(mostrarActivos("\n - Fondos comunes de Inversion de renta mixta" +"\n - Materias Primas (Oro, Plata) "+"\n - Bajo porcentaje en acciones Argentinas"));}


else if((pregunta1 =="c") && (pregunta2 !="")  && (pregunta3 !="")){
  alert("Tu perfil de inversión es "+perfil3);

  const mostrarActivos = (activos) => "Los activos que se ajustan a tu perfil son: "+activos;
  alert(mostrarActivos("\n - Acciones Argentinas " +"\n - Cedears "+"\n - Opciones "+"\n - Criptomonedas"));}    

else{
  alert("No respondiste adecuadamente, por favor realiza nuevamente la consulta");
}

// Fin de Ciclo de Preguntas 

//Funcion base - sobre esta funcion trabaje y especifique dentro del ciclo
/*
const mostrarActivos = (activos) => "Los activos que se ajustan a tu perfil son: "+activos;
console.log(mostrarActivos("\n - Plazos fijos" +"\n - FCI"+"\n - Cauciones"+"\n - Compra de USD"));









//Creacion de Objetos mediante CLASS

class ActivosFinancieros {
  constructor(nombre, tipoDeMercado,perfil){
      this.nombre = nombre;
      this.tipoDeMercado = tipoDeMercado;
      this.perfil = perfil;
  }
  mostrarActivosFinacieros(){
      console.log("Nombre: "+this.nombre+"\nTipo de Mercado: "+this.tipoDeMercado+"\nPerfil: "+this.perfil);
  }
  //me falta un metodo - idea podria mostrar en una card una explicacion sobre el activo
}

const activosFinancieros1 = new ActivosFinancieros ("Plazos Fijos","cualquiera",perfil1);
const activosFinancieros2 = new ActivosFinancieros ("Fondos Comunes de Inversión","Mercado de Valores",perfil1);
const activosFinancieros3 = new ActivosFinancieros ("Compra de USD","Mercado Cambiario",perfil1);
const activosFinancieros4 = new ActivosFinancieros ("Fondos Comunes de Inversión de renta mixta","Mercado de Valores",perfil2);
const activosFinancieros5 = new ActivosFinancieros ("Materias primas","Mercado de Valores o Mercado de Futuros",perfil2);
const activosFinancieros6 = new ActivosFinancieros ("Bajo porcentaje de acciones Argentinas","Bolsa de valores Argentina - Merval",perfil2);
const activosFinancieros7 = new ActivosFinancieros ("Acciones Argentinas","Bolsa de valores Argentina - Merval",perfil3);
const activosFinancieros8 = new ActivosFinancieros ("Cedears","Bolsa de valores Argentina - Merval",perfil3);
const activosFinancieros9 = new ActivosFinancieros ("Bitcoin, Ethereum, Altcoins","Mercado de Criptomonedas",perfil3);

/* Console.log - Aplico metodo del objeto

console.log(activosFinancieros1);
activosFinancieros1.mostrarActivosFinacieros(); 
activosFinancieros2.mostrarActivosFinacieros(); 
activosFinancieros3.mostrarActivosFinacieros(); 
activosFinancieros4.mostrarActivosFinacieros(); 
activosFinancieros5.mostrarActivosFinacieros(); 
activosFinancieros6.mostrarActivosFinacieros();
activosFinancieros7.mostrarActivosFinacieros(); 
activosFinancieros8.mostrarActivosFinacieros(); 
activosFinancieros9.mostrarActivosFinacieros();  
*/




