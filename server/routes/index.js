const express =require ('express');
const router=express.Router();
const authRouter =require ( './authRoutes.js');

router.use('/',authRouter)

module.exports=router;