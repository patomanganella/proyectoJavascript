let carrito =[]
let btnFin = document.getElementById("finalizar");

//Creación de Arrays
//BUSCADOR en la pagina de inicio
const servicios = [
  {
    id:1,
    servicio:"Test del Inversor",
    precio:0
  },
  {
    id:2,
    servicio:"Apertura de cuenta en Broker Nacional",
    precio:0

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
  //alert("Servicio agregado al carro con éxito!!");
   //Sweet alert
   Swal.fire({
    title:servicioAAgregar.servicio,
    text: 'Se agrego al carrito correctamente!!',
    // background:"blue",
    // color:"red",
    // backdrop:"red",

   })
  document.getElementById("tablabody").innerHTML +=`
      <tr>
        <td>${servicioAAgregar.id}</td>
        <td>${servicioAAgregar.servicio}</td>
        <td>${servicioAAgregar.precio}</td>
  `;

  let totalCarrito = carrito.reduce((acumulador,serv)=>acumulador+serv.precio,0);
  document.getElementById("total").innerText="total a pagar $: "+totalCarrito;

  }

  btnFin.onclick = () => {
    carrito=[];
    document.getElementById("tablabody").innerHTML="";
    document.getElementById("total").innerText = "Total a pagar $: ";
    //Remover la clave del carrito en el STORAGE

   //Toast
   Toastify({
    text: "Nos contactaremos en un plazo de 24hs para coordinar los servicios contratados",        
    duration: 4000,
    gravity: 'top',
    position: 'center',
    //style: {
      // background: 'linear-gradient(to right, #00b09b, #96c92d)',
    //},
    //destination: 'https://www.coderhouse.com'
   
   }).showToast();
  
}