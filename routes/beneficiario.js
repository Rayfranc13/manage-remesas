const {Router}=require('express');
const { check } = require('express-validator');
const {getBeneficiarios,postBeneficiario, putBeneficiario, deleteBeneficiario} = require('../controllers/beneficiario');
const {validarCampos}=require('../middlewares/validar_campos')
const {existeCorreo, existeUsuarioById}=require('../helpers/db_validator')
const router=Router()


router.get('/',getBeneficiarios)
router.post('/',postBeneficiario)
router.put('/:id',putBeneficiario)
router.delete('/:id',deleteBeneficiario)