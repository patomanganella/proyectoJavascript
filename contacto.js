let miBoton = document.getElementById
("boton-contacto");

let formComentarios = document.getElementById("form-comentarios");

if(campoForm == Number){
alert("Campo invalido");
}else{

}



miBoton.onclick = () => { 
    if(formComentarios != " "){
        Swal.fire('Consulta enviada con exito!!')
    }else{
        alert("ERROR")
    }

  };

