const {Router}=require('express');
const {check}=require('express-validator')
const { logIn, singUp } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar_campos');
const { existUserByEmail} = require('../middlewares/existe_usuario');
const router=Router()

router.post('/login',[
    check('correo','El correo no es valido').isEmail(),
    check('password','El password no es valido').not().isEmpty(),
    validarCampos,
    existUserByEmail
],logIn);
router.post('/signup',singUp)






module.exports=router
