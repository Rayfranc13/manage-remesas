const {Router}=require('express');
const { check } = require('express-validator');
const {getUsuarios,postUsuario, putUsuario} = require('../controllers/user');
const {validarCampos}=require('../middlewares/validar_campos')
const {existeCorreo}=require('../helpers/db_validator')
const router=Router()

router.get('/',getUsuarios)
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('apellido','El apellido es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(existeCorreo),
    check('password','El password deve tener al menos 6 caracteres').isLength({min:6}),
    check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
],postUsuario)
router.put('/:id',putUsuario)
router.delete('/:id',)







module.exports=router;