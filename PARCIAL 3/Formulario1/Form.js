const express = require('express');

const app = express();


app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.post("/Formulario1",(req,res)=>{
  console.log(req.body);
  res.send(`Hola ${req.body.nombre}`);
})


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});