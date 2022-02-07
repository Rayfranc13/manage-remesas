const jwt=require('jsonwebtoken')
const { postUsuario } = require("./user")
const Usuario=require('../models/usuario')
const { options } = require('../routes/auth')


const logIn=async(req,res)=>{
    const {_id,...usuario}=req.usuario

const token=jwt.sign({id},process.env.SECRETKEY,{
    expiresIn:'2h'
})


return res.json({
    message:'El usuario ah accedido con exito',
    usuario,
    token
})

}





const singUp= (req,res)=>{
    
    const {correo,password}=req.body
    
    if(!correo){
        return res.status(400).json({
            message:'El email es requerido'
        })
    }
    
    if(!password){
        return res.status(400).json({
            message:'El password es requerido'
        })
    }
  createWiseUser(correo,password).then(response=>{
res.send(response)
})
.catch(e=>{
    res.status(400).send(e)
})
    
  


}












module.exports={
logIn,
singUp

}