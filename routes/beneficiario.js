const {Router}=require('express');
const {check}=require('express-validator');
const { validarToken } = require('../middlewares/validarToken');
const {getBeneficiarios}=require('../controllers/beneficiario')
const router=Router()


router.get("/",[
    validarToken
],getBeneficiarios)

module.exports=router
