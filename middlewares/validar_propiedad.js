const Beneficiario=require('../models/beneficiario')

const propiedad=async(req,res,next)=>{
  const {id}=req.params
  const usuario=req.usuario
  const beneficiario= await Beneficiario.findById(id)
  
  if(!(beneficiario.usuario_id==usuario._id)){
    return res.json({
        message:'No esta autorizado para esta operacion',
       
    })
  } 
 return next()
 

}

module.exports={
    propiedad
}