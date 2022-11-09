let perfil1 = "Conservador";
let perfil2 = "Moderado";
let perfil3 = "Agresivo";

const conocerActivos = [];
let carrito =[]
let btnFin = document.getElementById("finalizar");

//Creacion de Objetos mediante CLASS

class ActivosFinancieros {
    constructor(id,nombre, tipoDeMercado,perfil,descripcion){
        this.id = id;
        this.nombre = nombre;
        this.tipoDeMercado = tipoDeMercado;
        this.perfil = perfil;
        this.descripcion = descripcion;
    }
    mostrarActivosFinacieros(){
        console.log("id: "+this.id +"\nNombre: "+this.nombre+"\nTipo de Mercado: "+this.tipoDeMercado+"\nPerfil: "+this.perfil+"\nPerfil: "+this.descripcion);
    }
    //me falta un metodo - idea podria mostrar en una card una explicacion sobre el activo
}


const activosFinancieros1 = new ActivosFinancieros ("1","Plazos Fijos","Metodo de Ahorro",perfil1,"Es un instrumento de ahorro, no de inversión. Se trata de un depósito de dinero que podés hacer por un tiempo determinado. Concluido ese tiempo, el banco te devuelve el dinero que invertiste más los intereses generados.");
const activosFinancieros2 = new ActivosFinancieros ("2","Fondos Comunes de Inversión","Mercado de Valores",perfil1,"Un Fondo Común de Inversión es un patrimonio formado por los aportes de un grupo de personas. Dichos aportes son administrados por un grupo de profesionales y son invertidos en distintos instrumentos tales como Plazo Fijo, Bonos y/o Acciones, locales o internacionales, cuando se ingresa a un Fondo de Inversión uno compra pequeñas partes del fondo, a estas partes se las denomina cuotapartes, de modo que cuando una persona realiza una Suscripción (invierte) en un Fondo Común de Inversión lo que está haciendo es comprar una cantidad de cuotapartes, a un determinado valor.");
const activosFinancieros3 = new ActivosFinancieros ("3","Compra de USD","Mercado Cambiario",perfil1,"Compra dólares: es cuando un banco, entidad financiera o casa de cambio compra dólares y los paga en la moneda en circulación de tu país. Es decir, tú le vendes a ellos tus dólares porque necesitas recibir a cambio moneda de tu país." + "\nVenta de dólares: es cuando una entidad financiera, casa de cambio o banco te vende dólares. Es decir, tú das les das tu dinero en la moneda de tu país a cambio de recibir dólares");
// const activosFinancieros4 = new ActivosFinancieros ("4","Fondos Comunes de Inversión de renta mixta","Mercado de Valores",perfil2);
const activosFinancieros5 = new ActivosFinancieros ("5","Materias primas","Mercado de Valores o Mercado de Futuros",perfil2,"Los commodities, o materias primas, son productos básicos que utilizan las personas y las industrias. Las mismas incluyen minerales, como oro y plata; alimentos como aceite, azúcar, trigo y carne; y reservas de energía; como petróleo y gas.");
// const activosFinancieros6 = new ActivosFinancieros ("6","Bajo porcentaje de acciones Argentinas","Bolsa de valores Argentina - Merval",perfil2,"");
const activosFinancieros7 = new ActivosFinancieros ("7","Acciones","Bolsa de valores",perfil3,"Las acciones son las partes en las que se divide el capital de una empresa. Cada inversor de una compañía posee un número determinado de acciones, por lo que será dueño del porcentaje que esos títulos representen de la compañía. El valor de todas las acciones de la compañía es su capitalización de mercado.");
const activosFinancieros8 = new ActivosFinancieros ("8","Cedears","Bolsa de valores Argentina - Merval",perfil3,"Los Cedears (Certificados de Depósito Argentinos) son papeles que siguen cotizaciones de compañías extranjeras en mercados globales y que se suscriben en pesos -también en dólares- pero siguen las fluctuaciones del dólar Contado con Liquidación (CCL). Los costos son los mismos que para operar con acciones en el mercado local y no se necesita una cuenta en el exterior.");
const activosFinancieros9 = new ActivosFinancieros ("9","Criptomonedas","Mercado de Criptomonedas",perfil3,"Una criptomoneda es un activo digital que emplea un cifrado criptográfico para garantizar su titularidad y asegurar la integridad de las transacciones, y controlar la creación de unidades adicionales, es decir, evitar que alguien pueda hacer copias. Estas monedas no existen de forma física: se almacenan en una billetera digital.");

console.log(ActivosFinancieros);



//Creación de array de info al usuario

const nuestrosActivos = [activosFinancieros1,activosFinancieros2,activosFinancieros3,activosFinancieros5,activosFinancieros7,activosFinancieros8,activosFinancieros9];
//console.log(nuestrosActivos);


//Elimino OBJETO y aplico metodo SPLICE
nuestrosActivos.splice(5,1);


//Creación de Arrays
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
  
  //console.log(servicios);




//DOM creando cartas en el index de los activos
let articuloActivos = document.getElementById("activos");
for(const activo of nuestrosActivos){
  let cartaActivo = document.createElement("div");
  cartaActivo.className="card m-3"
  cartaActivo.innerHTML = `
  <div id="tarjeta" class=""card border-dark m-3" >
  <div id="tarjeta-header" class="card-header">${activo.tipoDeMercado} </div>
  <div class="card-body text-dark">
   <h5 id="tarjeta-h5" class="card-title">${activo.nombre}</h5>
   <p id="tarjeta-p" class="card-text">${activo.descripcion}</p>
       <a href="./pages/servicios.html" id="btn-activos" class="btn btn-primary">Conoce más</a>
  </div>
  `;
  articuloActivos.append(cartaActivo);

}





