const {Router}=require('express');
const {check}=require('express-validator');
const { validarToken } = require('../middlewares/validarToken');
const {getBeneficiarios, postBeneficiario}=require('../controllers/beneficiario')
const router=Router()


router.get("/",[
    validarToken
],getBeneficiarios)

router.post('/',[
    check('nombre','El nombre no puede estar vacio').notEmpty(),
    check('nombre','El nombre no puede ser un numero').isString(),
    check('password','El password deve incluir mayusculas,numeros y caracteres especiales').isStrongPassword(),
    check('tarjeta','La tarjeta no es valida').isLength(16)
],postBeneficiario)

module.exports=router
