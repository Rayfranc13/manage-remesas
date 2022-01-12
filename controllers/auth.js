const { postUsuario } = require("./user")


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

const singUp=postUsuario












module.exports={
logIn,
singUp

}