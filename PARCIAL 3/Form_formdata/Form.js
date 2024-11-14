const express = require('express');
const path = require ('path');
const multer = require('multer');
const app = express();

const folder= path.join(__dirname + '/archivos/');
const upload = multer ({dest:folder});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use (upload.single('archivo'));

app.post("/Formulario",(req,res)=>{
  console.log(req.body);
  res.send(`Hola ${req.body.nombre}`);
})


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});