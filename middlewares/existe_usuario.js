const bcrypt=require('bcryptjs')
const Usuario=require('../models/usuario')


const existUserByEmail= async(req,res,next)=>{
const correo=req.correo
const usuario= await Usuario.find({correo})
if(!usuario){
    return res.status(400).json({
        message:'El correo o el password son incorrectos'
    })
}

if(!usuario.status){
    return res.status(400).json({
        message:'El correo o el password son incorrectos'
    })
}

if(!(await bcrypt.compareSync(req.password,usuario.password))){
    return res.status(400).json({
        message:'El correo o el password son incorrectos'
    })
}

req.usuario=usuario;

next()

}






module.exports={
   existUserByEmail
}