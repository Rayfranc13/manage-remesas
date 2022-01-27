const {Router}=require('express');
const {check}=require('express-validator');
const { validarToken } = require('../middlewares/validarToken');
const router=Router()


router.get("/",[
    validarToken,
],getBeneficiarios)
