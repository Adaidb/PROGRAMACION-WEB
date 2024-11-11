const express = require('express');
const path= require('path');
const app = express();


app.use(express.json());

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

app.get('/administrativos', (req, res) => {
    console.log(req.query);
   // res.send('Servidor contestando a la petición');
    res.render('admin');
  });


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});