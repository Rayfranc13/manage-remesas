const{request,response}=require('express')
const Beneficiario=require('../models/beneficiario')

const getBeneficiarios=async(req=request,res)=>{
    const id=req.id

    const beneficiarios=await Beneficiario.find({usuario_id:id})
res.json({
    beneficiarios
})
}


const postBeneficiario=async(req,res)=>{
    const {nombre,apellido,tarjeta}=req.body
    const {_id:usuario_id}=req.usuario

    const beneficiario=new Beneficiario({nombre,apellido,tarjeta,usuario_id})
    try{
        await beneficiario.save()
    }catch(e){
        res.status(500).json({
            message:"Error al insertar beneficiario"
        })
    }

    res.status(201).json({
        message:"El beneficiario se ha insertado con exito",
        beneficiario
    })
}

const putBeneficiario=async(req,res)=>{
const {id}=req.param
const {_id:usuario_id}=req.usuario
try{
const beneficiario= await Beneficiario.findByIdAndUpdate({_id:id,usuario_id})

if(!beneficiario){
    return res.status(400).json({
        message:'El beneficiario no existe'
    })
}

return res.status(201).json({
    message:'El beneficiario se ha actualizado con exito',
    beneficiario
})
}catch(e){
  return res.status(500).json({
      message:'Error al actualizar beneficiario'
  })
}
}

module.exports={
    getBeneficiarios,
    postBeneficiario,
    putBeneficiario
}