
//Aplicacion de ciclo Usuario y contraseña con ciclo FOR


for(let i=1;i<=3;i++){
    let usuario= prompt("Bienvenido Inversor :)"+"\nCreá tu Usuario para empezar");
    let contrasenia=prompt("Crea una contraseña para "+usuario);
    
    if((usuario!="")&&(contrasenia!="")){
        alert("Excelente!! "+"\nUsuario Creado" +"\nBienvenido a la web de Finanzas by Patricio Manganella!");
        break;
    }else{
        alert("Usuario y/o contraseña erroneos! Restan "+(3-i)+" intentos");
    
    }
    }



//Aplicacion de condicional
let pregunta1 = (prompt("¿En que activo invertirias? - Elige la opción: "+"\n a) Plazos Fijos"+"\n b) Fondos comunes de Inversión"+"\n c) Bonos"));
let pregunta2 = parseInt((prompt(" ¿Cuántos años estarias dispuesto a mantener la inversion? (solo digita el numero)")));
let pregunta3 = (prompt("¿Qué edad tienes? - Elige la opción "+"\n a) Mayor de 18 y menor de 25 años"+"\n b) Mayor de 25 y menor de 50 años"+"\n c) Mayor de 50 años"));



let perfil1 = "Conservador";
let perfil2 = "Moderado";
let perfil3 = "Agresivo";


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


//Funcion base - sobre esta funcion trabaje y especifique dentro del ciclo
/*
const mostrarActivos = (activos) => "Los activos que se ajustan a tu perfil son: "+activos;
console.log(mostrarActivos("\n - Plazos fijos" +"\n - FCI"+"\n - Cauciones"+"\n - Compra de USD"));
*/
