const Usuario=require('../models/usuario')

const existeCorreo=async(correo='')=>{
const existe= await Usuario.findOne({correo})
if(existe){
    throw new Error('El correo ya esta registrado')
}
}


const existeUsuarioById=async(id)=>{
    const existe= await Usuario.findById(id)
    if(!existe){
        throw new Error(`El usuario de id(${id}) no existe`)
    }
    }

module.exports={
    existeCorreo,
    existeUsuarioById
}