const {response,request} =require('express')
const  bcrypt=require('bcryptjs')
const Usuario=require('../models/usuario')




    
const getUsuarios=async(req,res)=>{
const {limite=3,desde=0}=req.query
const usuarios= await Usuario.find({estado:true})
.skip(Number(desde))
.limit(Number(limite))
const cant= await Usuario.countDocuments({estado:true})
    res.json({
        cantidad:cant,
        usuarios
    })
}



const postUsuario=async (req=request,res=response)=>{
    const {nombre,apellido,correo,password, rol}=req.body
    const usuario=new Usuario({nombre,apellido,correo,rol})
    const salt =bcrypt.genSaltSync()

    usuario.password=bcrypt.hashSync(password,salt)

    try{
    await usuario.save();
    }
    catch(e){
    res.status(400).json({
    message:'Ha habido un error',
        e
        }
    )
    }
    return res.json(
    {
        message:'El usuario se ah insertado',
        usuario
    }
)
}


const putUsuario=async(req,res)=>{
const {id}=req.params
const {password,google,correo,...rest}=req.body

if(password){
    const salt =bcrypt.genSaltSync()

    rest.password=bcrypt.hashSync(password,salt)
}

const usuario=await Usuario.findByIdAndUpdate(id,rest)

res.json({
    message:'El usuario se ha actualizado con exito',
    usuario
})
}

const deleteUsuario= async (req,res)=>{
    const {id}=req.params
 const usuario= await Usuario.findByIdAndUpdate(id,{estado:false})
 res.json({
     message:'El usuario se ha eliminado con exito',
     usuario
 })
}

const getMyInfo=(req,res)=>{
const {usuario}=req
res.json(
    usuario
)
}




module.exports={
    getUsuarios,
    getMyInfo,
    postUsuario,
    putUsuario,
    deleteUsuario
}