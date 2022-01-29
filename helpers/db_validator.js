const Usuario=require('../models/usuario')
const Beneficiario=require('../models/beneficiario')

const existeCorreo=async(correo='')=>{
const existe= await Usuario.findOne({correo})
if(existe){
    throw new Error('El correo ya esta registrado')
}
}


const existeUsuarioById=async(id)=>{
    const existe= await Usuario.findOne({_id:id})
    if(!existe){
        throw new Error(`El usuario de id(${id}) no existe`)
    }
    }

    const existeActiveUsuarioById=async(id)=>{
        const existe= await Usuario.findOne({estado:true,_id:id})
        if(!existe){
            throw new Error(`El usuario de id(${id}) no existe`)
        }
        }

    const existeBeneficiarioById=async(id)=>{
        const existe= await Beneficiario.findById(id)
        if(!existe){
            throw new Error(`EL beneficiario de id(${id}) no existe`)
        }
    }

module.exports={
    existeCorreo,
    existeUsuarioById,
    existeBeneficiarioById,
    existeActiveUsuarioById
}