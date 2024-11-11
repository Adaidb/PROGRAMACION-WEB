const express = require('express');
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.get('/administrativos', (req, res) => {
  console.log(req.query);
  res.send('Servidor contestando a la petición');
});

app.get('/maestros', (req, res) => {
  console.log(req.body); 
  res.send('Servidor contestando a la petición');
});

app.get('/estudiantes/:carrera', (req, res) => {
  console.log(req.params.carrera);
  console.log(req.query.control);
  res.send('Servidor contestando a la petición');
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});