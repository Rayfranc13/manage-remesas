const {response,request} =require('express')
const  bcrypt=require('bcryptjs')

const Usuario=require('../models/usuario')



    
const getUsuarios=(req,res)=>{
    res.send("Lista de Usuarios......")
}



const postUsuario=async (req=request,res=response)=>{
   if (!req.body.nombre&&req.body.correo&&req.body.password&&req.body.rol){
       res.status(400).json({
           message:'Parametros faltantes'
       })
   }
   
    const {nombre,correo,password, rol}=req.body
const usuario=new Usuario({nombre,correo,rol})

   const salt =bcrypt.genSaltSync()

   usuario.password=bcrypt.hashSync(password,salt)

   try{
       await usuario.save();
   }catch(e){
       res.status(400).json({
         message:'Ha habido un error',
         e
        }
       )
   }
   res.json(
       {
           message:'El usuario se ah insertado',
           usuario

       }
   )



}



  




module.exports={
    getUsuarios,
    postUsuario
}