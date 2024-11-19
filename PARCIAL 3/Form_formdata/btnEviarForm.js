document.getElementById("btnEnviar").addEventListener("click", async function (event) {
    const formulario = document.getElementById("Formulario");
    const datosForm = new FormData(formulario); 
 
    fetch('http://localhost:3000/Formulario', {
        method: 'POST',
        body: datosForm
    })
    .then(response => response.json())
      .then (dato=> console.log(dato))
      .catch(err => console.error('Error:', err));
      });
        
    
