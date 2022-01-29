const { propiedad, propiedadUsuario } = require("./validar_propiedad");

const permisos = async (req, res, next) => {
  const { rol } = req.usuario;

  if (rol === "ADMIN_ROLE") {
    return next();
  } else {
    return propiedadUsuario(req, res, next);
  }
};


const isAdmin=async(req,res,next)=>{
  const { rol } = req.usuario;

  if (rol === "ADMIN_ROLE") {
    return next();
  } else {
    return res.status(400).json({
      message:'Usted no tiene acceso a esta operacion'
    })
  }
}





module.exports = {
  permisos,
  isAdmin
};
