const {Router}=require('express');
const { check } = require('express-validator');
const {getUsuarios,postUsuario, putUsuario, deleteUsuario} = require('../controllers/user');
const {validarCampos}=require('../middlewares/validar_campos')
const {existeCorreo, existeUsuarioById}=require('../helpers/db_validator')
const router=Router()

router.get('/',[
    check('limite','El limite es un numero').isNumeric(),
    check('desde','EL origen no es un numero').isNumeric(),
    validarCampos
],getUsuarios)

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre','El nombre no puede ser un numero').isString(),
    check('apellido','El apellido es obligatorio').not().isEmpty(),
    check('apellido','El apellido no puede ser un numero').isString(),
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(existeCorreo),
    check('password','El password deve tener al menos 6 caracteres').isLength({min:6}),
    check('password','El password deve tener al menos 6 caracteres').isStrongPassword(),
    check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
],postUsuario)

router.put('/:id',[
     check('id','No es un id Valido').isMongoId(),
     check('id').custom(existeUsuarioById),
     validarCampos
],putUsuario)

router.delete('/:id',[
    check('id','No es un id Valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos
],deleteUsuario)







module.exports=router;