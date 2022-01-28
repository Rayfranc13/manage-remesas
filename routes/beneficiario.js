const { Router } = require("express");
const { check } = require("express-validator");
const { validarToken } = require("../middlewares/validarToken");
const {
  getBeneficiarios,
  postBeneficiario,
  putBeneficiario,
  deleteBeneficiario,
} = require("../controllers/beneficiario");
const { validarCampos } = require("../middlewares/validar_campos");
const { propiedad, propiedadBeneficiario } = require("../middlewares/validar_propiedad");
const { existeBeneficiarioById } = require("../helpers/db_validator");
const router = Router();

router.get("/", [validarToken], getBeneficiarios);

router.post(
  "/",
  [
    validarToken,
    check("nombre", "El nombre no puede estar vacio").notEmpty(),
    check("nombre", "El nombre no puede ser un numero").isString(),
    check("tarjeta", "La tarjeta no es valida").isLength(16),
    validarCampos,
    
  ],
  postBeneficiario
);

router.put(
  "/:id",
  [
    validarToken,
    check("id", "No es un id Valido").isMongoId(),
    check("nombre", "El nombre no puede ser un numero").isString(),
    check("tarjeta", "La tarjeta no es valida").isLength(16),
    check("id").custom(existeBeneficiarioById),
    validarCampos,
    propiedadBeneficiario,
  ],
  putBeneficiario
);

router.delete(
  "/:id",
  [
    validarToken,
    check("id", "No es un id Valido").isMongoId(),
    check("id").custom(existeBeneficiarioById),
    validarCampos,
   propiedadBeneficiario,
  ],
  deleteBeneficiario
);

module.exports = router;
