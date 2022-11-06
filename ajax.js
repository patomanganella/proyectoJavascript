//Solicitud de API USERS

function obtenerDatos(){
    const URLGET="https://reqres.in/api/users?page=2";
    fetch(URLGET)
        .then(resultado => resultado.json())//convertimos a objeto
        .then(data => {
            console.log(data);
            const datos=data.data;
            console.log(datos);
             datos.forEach( dato => {
                 document.getElementById("equipo").innerHTML += `

                        <img src=${dato.avatar}></img>
                        <p>${dato.first_name}</p>
                       
                        
                    
                
                `;
             })
    })
};

obtenerDatos();