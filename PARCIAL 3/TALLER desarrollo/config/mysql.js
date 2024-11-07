const db =require('mysql2');
const dotenv= require ('dotenv');
dotenv.config();

const connection= db.createConnection({
    host: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect ((err)=>{
    if (err) throw err;
    console.info('conectado a ;la base de datos mysql')

});
module.exports=connection;


