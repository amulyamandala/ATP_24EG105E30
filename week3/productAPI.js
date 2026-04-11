import exp from 'express'
export const productApp =exp.Router()
import {productModel} from '../models/productModel.js'
import {verifyToken} from '../middleware/verifyToken.js'
/**REST API with
        a. Create product
//      b. Read all products
//      c. Read a product by productId
//      d. Update a product by productId
//      e. Delete a product by productId
 */

//create new product 
productApp.post("/products",async(req,res)=>{
    const newproduct=req.body
    const newproductDoc=new productModel(newproduct)
    await newproductDoc.save()
    res.status(200).json({message:"the new product is created"})
})

//read all products 
productApp.get("/products",async(req,res)=>{
    let productList=await productModel.find()
    res.status(200).json({message:"the new product list",payload:productList})
})
//read a product by its productid
productApp.get("/products/:productId",async(req,res)=>{
    const pid=req.params.productId
    const pobj=await productModel.findOne({productId:pid})
    if(!pobj){
        return res.status(400).json({message:"the product id is wrong"})
    }
    res.status(200).json({message:"found",payload:pobj})
})
// Update a product by productId
productApp.put("/products/:productId",verifyToken,async(req,res)=>{
    const modifiedproduct=req.body
    const pid=req.params.productId
    const updatedprod=await productModel.findOneAndUpdate(pid,{$set:{...modifiedproduct}},{new:true,runValidators:true})
    res.status(200).json({message:"updated",payload:updatedprod})

})
    // e. Delete a product by productId
    productApp.delete("/products/:productId",verifyToken,async(req,res)=>{
        //get id
        const pid=req.params.productId
        const deletedprod=await productModel.findByIdAndDelete(pid)
        //if the product is not there 
        if(!deletedprod){
             return res.status(404).json({message:"there is no product"})
        }
        res.status(200).json({message:"here is the product",payload:deletedprod})
    })
