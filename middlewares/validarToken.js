const jwt=require('jsonwebtoken')

const validarToken=(req,res,next)=>{
const token=req.header('token')
if(!token){
    return res.status(401).json({
        message:'No esta autorizado para realizar esta operacion'
    })
}
try{
const decoded = jwt.verify(token, process.env.SECRETKEY);
const {id:usuario_id}=decoded
req.id=id
next()
}catch(e){
    return res.status(401).json({
        message:'El token no es valido',
        e
    })
}





}







module.exports={
validarToken
}