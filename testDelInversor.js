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
console.log(activosFinancieros1);
activosFinancieros1.mostrarActivosFinacieros(); 