const express= require('express');
    const dotenv= require('dotenv');
const eventRoutes= require('./routes/eventRoutes');

  //  const db= require('./config/db');
    dotenv.config();

    const app=express();
    app.use(express.json());
    
   app.use('/api/eventos', eventRoutes);
    const PORT=process.env.PORT|| 3000;
    app.listen(PORT, ()=>{  
        console.info( `HOLA MUNDO `);
        console.info(`servidor corriendo en el puerto ${PORT}`);
    });
    
    
