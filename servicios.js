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
  

  //Informacion al usuario sobre los servicios - Porximamente cards de cada uno con precios
let opcionServicios ="Estos son nuestros servicios"

for ( servicio of servicios){
  opcionServicios += `\n ${servicio.id} - ${servicio.servicio} - $ ${servicio.precio}`
}

alert(opcionServicios);



  //console.log(servicios);







