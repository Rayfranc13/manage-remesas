const { propiedad, propiedadUsuario } = require("./validar_propiedad");

const permisos = async (req, res, next) => {
  const { rol } = req.usuario;

  if (rol === "ADMIN_ROLE") {
    return next();
  } else {
    return propiedadUsuario(req, res, next);
  }
};

module.exports = {
  permisos,
};
