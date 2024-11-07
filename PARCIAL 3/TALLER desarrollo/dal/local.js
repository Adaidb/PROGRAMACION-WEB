const db= require ('../config/local');

exports. selectEventos=()=>{
    console.log(db.eventos);
    return db.eventos;
};

exports.selectEvento= (id)=> {
    const evento= db.eventos.find(x => x.id === id);
    return evento;

}
exports.insertEvento= (nombre,descripcion)=>{
    const id= db.eventos[db.eventos.length -1].id+1;
    db.eventos.push ({
        id,
        nombre,
        descripcion,
        fecha,
        lugar
    })
    return id;
}
exports.updateEvento=(id,nombre,descripcion )=>{
  const evento= db.evento.find(evento=> evento.id==id);
  evento.nombre=nombre;
  evento.descripcion=descripcion;
  evento.fecha=fecha;
  evento.lugar=lugar;
  return id;
  
}
exports.deleteEvento=(id)=>{
    const index= db.eventos.findIndex(evento=> evento.id==id);
    db.eventos=db.eventos.splice(index, 1);
    return id;
}