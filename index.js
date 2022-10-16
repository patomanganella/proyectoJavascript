let perfil1 = "Conservador";
let perfil2 = "Moderado";
let perfil3 = "Agresivo";


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


//Creación de Arrays
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


