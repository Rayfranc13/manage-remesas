const {Usuario}=require('../models/usuario')

const existeCorreo=(correo='')=>{
const existe= await Usuario.findOne({correo})
if(!existe){
    throw new Error('El correo ya esta registrado')
}
}

module.exports={
    existeCorreo
}