const { response } = require("express")
const { postUsuario } = require("./user")
const { createWiseUser } = require("./wise")


const logIn=(req,res)=>{
const {correo,password}=req.body
console.log(req.body)
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
return res.json({
    message:'El usuario ah accedido con exito'
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