const products = require('../data/products');
const Products = require('../models/Product');

const getAllProducts = async (req , res)=>{
    try{
        const products= await Products.find({});
        res.json(products);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'Server Error'});

    }
}


const getProductsById = async (req ,res)=>{
    try{
        const product = await Products.findById(req.params.id);
        res.json(product);
    }
    catch{
        console.log(error);
        res.status(500).json({message:"Server Error"});  
    }
}

module.exports= {
    getAllProducts,
    getProductsById
}