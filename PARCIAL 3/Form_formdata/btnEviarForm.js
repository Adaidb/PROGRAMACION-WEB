document.getElementById("btnEnviar").addEventListener("click", async function (event) {
    const formulario = document.getElementById("formulario");
    const datosForm = new FormData(formulario); 
 
    fetch('http://localhost:3000/Formulario', {
        method: 'POST',
        body: datosForm
    })
    .then(response => response.blob())
      .then (archivoPDF=>{
        let urlDeArchivo = URL.createObjectURL(archivoPDF);
        window.open(urlDeArchivo);
      })
         .catch(err => console.error('Error:', err));
});
