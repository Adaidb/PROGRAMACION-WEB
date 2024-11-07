const db = require('../config/mysql');

const {
    selectEventos,
    selectEvento,
    insertEvento,
    updateEvento,
     deleteEvento
} = require('../dal/mysql');

exports.getEvento = async(req, res) => {
    const { id } = req.params;
    try{
        // const evento= eventos.find(evento => evento.id == id);
        // if(!evento){
        //     return res.status(404).json('El evento buscado no existe');
        // }
        // res.status(200).json();

        // db.query(
        //     'SELECT id, nombre, descripcion FROM eventos WHERE id = ?',
        //     [id],
        //     (err, results) => {
        //         if (err) return res.status(500).json(err);
        //         res.status(200).json(results[0]);
        //     }
        // )

        const evento =selectEventos(id);
        if(!evento){
            res.status(404).json('El evento o existe');
        } else{
            res.status(200).json(evento);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
    
}

exports.getEventos = async (req, res) => {
    const eventos = await selectEventos();

   res.status(200).json(eventos);

    // db.query('SELECT * FROM eventos', (err, results) => {
    //     if (err) return res.status(500).json(err);
    //     res.status(200).json(results);
    // })
    //res.status(200).json(eventos);
}

exports.editEvento =async (req, res) => {
    const {id}= req.params;
    const {nombre, descripcion,fecha,lugar} = req.body;
    

    // const evento = eventos.find(evento => evento.id == id);
    // eventos.nombre = nombre;
    // eventos.descripcion = descripcion

    // console.info(eventos);

    // const editId = updateEvento(id, nombre, descripcion);
    // if(!editId){
    //     res.status(404).json('No existe el id');
    // } else{
    //     res.status(200).json('Se realizaron modificaciones en el evento '+ editId);
    // }

    const filasAfectadas = await updateEvento(id,nombre,descripcion,fecha,lugar);

    res.status(200).json('Se realizaron cambios en el evento ' + id);
}

exports.createEvento=(req, res) => {
    const {nombre, descripcion, fecha, lugar}=req.body;

    if(!nombre){
        res.status(400).json('El nombre no es valido');
        return;
    }
    

    const id =insertEvento(nombre, descripcion, fecha, lugar);
    // const id = eventos.length+1;
    // const evento = {
    //     id,
    //     nombre,
    //     descripcion
    // };
    // eventos.push(evento);
    // console.info(eventos);
    

    res.status(200).json('Se creo el evento '+ nombre + ' con id: '+ id)
}

exports.deleteEvento=async (req, res)=>{
    try{
        const{id}=req.params;

       const filasAfectadas= await deleteEvento(id);
        // const nombre = eventos.find(evento => evento.id == id).nombre;
        // eventos = eventos.filter(evento => evento.id != id);
    
        // console.info(eventos);
    if(filasAfectadas == 1){
      res.status(200).json('Se elimino el evento '+ id );
    } 
    else{
      res.status(404).json('no se afecto ninguna fila');
    }
       
    } catch (error) {
        res.status(500).json(error);
    }
    
}