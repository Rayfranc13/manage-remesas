const Beneficiario=require('../models/beneficiario')

const propiedad=(req,res,next)=>{
  const {id}=req.params
  const usuario=req.usuario
  const beneficiario= Beneficiario.findById(id)
  if(beneficiario.usuario_id===usuario._id){
      return next()
  } 

  return res.status(401).json({
      message:'No esta autorizado para esta operacion'
  })

}

module.exports={
    propiedad
}