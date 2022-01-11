const {response,request} =require('express')




    
const getUsuarios=(req,res)=>{
    res.send("Lista de Usuarios......")
}

const postUsuario=async (req=request,res=response)=>{
const {nombre,apellido,correo,password}=req.body.userData
if(!nombre){
   return res.status(401).json({
        message:'El nombre es necesario'
    })
}
if(!apellido){
   return res.status(401).json({
        message:'El apellido es necesario'
    })
}

if(!correo){
  return  res.status(401).json({
        message:'El correo es necesario'
    })
}

if(!password){
  return  res.status(401).json({
        message:'El password es necesario'
    })
}

const user={
    nombre,
    apellido,
    correo,
    password

}

return res.status(201).json({
      message:'Resource created',
      user
})

}




module.exports={
    getUsuarios,
    postUsuario
}