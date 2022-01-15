const {response,request} =require('express')
const Usuario=require('../models/usuario')



    
const getUsuarios=(req,res)=>{
    res.send("Lista de Usuarios......")
}



const postUsuario=async (req=request,res=response)=>{
   const body=req.body
   const usuario=new Usuario(body);

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