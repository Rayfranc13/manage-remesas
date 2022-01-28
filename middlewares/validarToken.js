const validarToken=(req,res,next)=>{
const token=req.header('token')
if(!token){
    return res.status(401).json({
        message:'No esta autorizado para realizar esta operacion'
    })
}
const decoded = jwt.verify(token, process.env.SECRETKEY);
req.payload=(decoded.foo)
next()
}







module.exports={
validarToken
}