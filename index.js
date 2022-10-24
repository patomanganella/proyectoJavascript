let perfil1 = "Conservador";
let perfil2 = "Moderado";
let perfil3 = "Agresivo";

const conocerActivos = [];
const carrito =[]

//Creacion de Objetos mediante CLASS

class ActivosFinancieros {
    constructor(id,nombre, tipoDeMercado,perfil){
        this.id = id;
        this.nombre = nombre;
        this.tipoDeMercado = tipoDeMercado;
        this.perfil = perfil;
    }
    mostrarActivosFinacieros(){
        console.log("id: "+this.id +"\nNombre: "+this.nombre+"\nTipo de Mercado: "+this.tipoDeMercado+"\nPerfil: "+this.perfil);
    }
    //me falta un metodo - idea podria mostrar en una card una explicacion sobre el activo
}


const activosFinancieros1 = new ActivosFinancieros ("1","Plazos Fijos","cualquiera",perfil1);
const activosFinancieros2 = new ActivosFinancieros ("2","Fondos Comunes de Inversión","Mercado de Valores",perfil1);
const activosFinancieros3 = new ActivosFinancieros ("3","Compra de USD","Mercado Cambiario",perfil1);
const activosFinancieros4 = new ActivosFinancieros ("4","Fondos Comunes de Inversión de renta mixta","Mercado de Valores",perfil2);
const activosFinancieros5 = new ActivosFinancieros ("5","Materias primas","Mercado de Valores o Mercado de Futuros",perfil2);
const activosFinancieros6 = new ActivosFinancieros ("6","Bajo porcentaje de acciones Argentinas","Bolsa de valores Argentina - Merval",perfil2);
const activosFinancieros7 = new ActivosFinancieros ("7","Acciones Argentinas","Bolsa de valores Argentina - Merval",perfil3);
const activosFinancieros8 = new ActivosFinancieros ("8","Cedears","Bolsa de valores Argentina - Merval",perfil3);
const activosFinancieros9 = new ActivosFinancieros ("9","Criptomonedas","Mercado de Criptomonedas",perfil3);



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


//Creación de array de info al usuario

const nuestrosActivos = [activosFinancieros1,activosFinancieros2,activosFinancieros3,activosFinancieros4,activosFinancieros5,activosFinancieros6,activosFinancieros7,activosFinancieros8,activosFinancieros9];
//console.log(nuestrosActivos);


//Creación de Arrays
//BUSCADOR en la pagina de inicio
const servicios = [
    {
      id:1,
      servicio:"Test del Inversor",
      precio:"Gratuito"
    },
    {
      id:2,
      servicio:"Apertura de cuenta en Broker Nacional",
      precio:"Gratuito"
  
    },
    {
      id:3,
      servicio:"Asesoría Personalizada",
      precio:1500
  
    },
    {
      id:4,
      servicio:"Curso Introducción a los Mercados Financieros",
      precio:3000  
    } 
  ];
  
  //console.log(servicios);


//Aplicacion metodo Filter sobre Servicios - en un boton de busqueda proximamente
const buscador = servicios.filter((a) => a.precio < 2000);
console.log(buscador);


//DOM creando cartas en el index para servicios 
let articuloCartas = document.getElementById("cards");
for(const servicio of servicios){
  let carta = document.createElement("div");
  carta.className="card col-4"
  carta.innerHTML += `
  <div class="card-body">
   <h5 class="card-title">${servicio.servicio}</h5>
   <p class="card-text">Precio: $ ${servicio.precio}.</p>
    <button id='btn${servicio.id}'class="btn btn-primary">Solicitar</button>
  </div>
  `;
  articuloCartas.append(carta);

}
//Evento Servicios para agregar al carro

servicios.forEach((servicio)=>{
  //evento para cada boton
  document.getElementById(`btn${servicio.id}`).addEventListener("click",function(){
    agregarAlCarrito(servicio);
  })
})



function agregarAlCarrito(servicioAAgregar){
  carrito.push(servicioAAgregar);
  console.table(carrito)
  alert("Servicio agregado al carro con éxito!!");
}





//DOM creando cartas en el index de los activos
let articuloActivos = document.getElementById("activos");
for(const activo of nuestrosActivos){
  let cartaActivo = document.createElement("div");
  cartaActivo.className="card col-3"
  cartaActivo.innerHTML = `
  <div class="card-body">
   <h5 class="card-title">${activo.nombre}</h5>
       <a href="#" id="btn-activos" class="btn btn-primary">Conoce más</a>
  </div>
  `;
  articuloActivos.append(cartaActivo);
}


//Informacion al usuario sobre los activos - Porximamente cards con una breve explicacion de cada uno - tocar el boton y que gire la carta






// let opcionActivos ="Sobre que activo te gustaria conocer más? - Escribí el activo"

// for ( activo of nuestrosActivos){
//   opcionActivos += `\n ${activo.id} - ${activo.nombre}`
// }

