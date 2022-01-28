const Beneficiario=require('../models/beneficiario')

const propiedad=(req,res,next)=>{
  const {id}=req.params
  const usuario=req.usuario
  const beneficiario= Beneficiario.findById(id)
  
  if(!(beneficiario.usuario_id==usuario._id)){
    return res.json({
        message:'No esta autorizado para esta operacion',
        beneficiario,
        usuario
    })
  } 
 return next()
 

}

module.exports={
    propiedad
}