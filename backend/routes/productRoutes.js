const express =require('express');
const router =express.Router();

const {getAllProducts ,   getProductsById} = require('../controller/productcontrollers');



router.get('/' , getAllProducts);



router.get('/:id' ,  getProductsById);




module.exports=router;