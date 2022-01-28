const { Router } = require("express");
const { check } = require("express-validator");
const { validarToken } = require("../middlewares/validarToken");
const {
  getBeneficiarios,
  postBeneficiario,
  putBeneficiario,
} = require("../controllers/beneficiario");
const { validarCampos } = require("../middlewares/validar_campos");
const { propiedad } = require("../middlewares/validar_propiedad");
const router = Router();

router.get("/", [validarToken], getBeneficiarios);

router.post(
  "/",
  [
    check("nombre", "El nombre no puede estar vacio").notEmpty(),
    check("nombre", "El nombre no puede ser un numero").isString(),
    check("tarjeta", "La tarjeta no es valida").isLength(16),
    validarCampos,
    validarToken,
  ],
  postBeneficiario
);

router.put(
  "/:id",
  [
    check("id", "No es un id Valido").isMongoId(),
    check("nombre", "El nombre no puede ser un numero").isString(),
    check("tarjeta", "La tarjeta no es valida").isLength(16),
    validarCampos,
    validarToken,
    propiedad,
  ],
  putBeneficiario
);

router.delete(
  "/:id",
  [
    check("id", "No es un id Valido").isMongoId(),
    validarCampos,
    validarToken,
    propiedad,
  ],
  deleteBeneficiario
);

module.exports = router;
