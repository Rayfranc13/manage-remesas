const {Router}=require('express');
const {getUsuarios} = require('../controllers/user');
const router=Router()

router.get('/',getUsuarios)
router.post('/',)
router.put('/',)
router.delete('/',)







module.exports=router;