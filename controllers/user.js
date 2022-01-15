const {response,request} =require('express')
const Usuario=require('../models/usuario')



    
const getUsuarios=(req,res)=>{
    res.send("Lista de Usuarios......")
}



const postUsuario=async (req=request,res=response)=>{
   const body=req.body
   const usuario=new Usuario(body);

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