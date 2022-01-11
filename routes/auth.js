const {Router}=require('express');
const { logIn, singUp } = require('../controllers/auth');
const router=Router()

router.post('/login',logIn);
router.post('/signup',singUp)






module.exports=router
