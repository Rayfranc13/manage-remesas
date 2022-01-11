const {Router}=require('express');
const {getUsuarios,postUsuario} = require('../controllers/user');
const router=Router()

router.get('/',getUsuarios)
router.post('/',postUsuario)
router.put('/',)
router.delete('/',)







module.exports=router;