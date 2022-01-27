const bcrypt=require('bcryptjs')
const Usuario=require('../models/usuario')


const existUserByEmail= async(req,res,next)=>{
const correo=req.correo
const usuario= await Usuario.findOne({correo})
if(!usuario){
    return res.status(400).json({
        message:'El correo o el password son incorrectos',
        usuario
    })
}

if(!usuario.status){
    return res.status(400).json({
        message:'El correo o el password son incorrectos',
        usuario
    })
}

if(!(bcrypt.compareSync(req.password,usuario.password))){
    return res.status(400).json({
        message:'El correo o el password son incorrectos'
    })
}

req.usuario=usuario;



}






module.exports={
   existUserByEmail
}