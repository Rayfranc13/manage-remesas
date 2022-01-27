const bcrypt=require('bcryptjs')
const Usuario=require('../models/usuario')


const existUserByEmail= async(req,res,next)=>{
const {correo,password}=req.body
const usuario= await Usuario.findOne({correo})
if(!usuario){
    return res.status(400).json({
        message:'El correo o el password son incorrectos',
        
    })
}

if(!usuario.estado){
    return res.status(400).json({
        message:'El correo o el password son incorrectos',      
    })
}

if(!(bcrypt.compareSync(password,usuario.password))){
    return res.status(400).json({
        message:'El correo o el password son incorrectos'
    })
}

const {pass:password,...resto}=usuario;
req.usuario=resto;

next()


}






module.exports={
   existUserByEmail
}