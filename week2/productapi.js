//create mini exp route
import exp from 'express'
export const productApp=exp.Router()



//-------------------------------------product---------------------------

let products=[]
//product API
//create a product ({ productID,name,brand,price})
productApp.post('/products',(req,res)=>{
    //send request to client
    const newProduct=req.body
    products.push(newProduct)
    res.json({message:"product created"})
})
//read all
productApp.get('/products',(req,res)=>{
    //send response to clients
res.json({message:"this res for get product req",payload:products})//this is a js obj and it is turned into a json and sent 
})

//read all product by brand
productApp.get('/products/:brand',(req,res)=>{
    //send response to clients
let brandOfurl=req.params.brand
console.log(req.params.brand)
let find=products.find(obj=>obj.brand===brandOfurl)
if(find===undefined){
    return res.json({message:"product not found"})
}
    res.json({message:"this is from id",payload:find})
})
//update a product
productApp.put('/products',(req,res)=>{
//send request to client
//get modifies user from client
//get index of existing user in array 
//update user with index
//send response 
let modified=req.body
let index=products.findIndex(obj=>obj.productID==modified.productID)
if(index===-1){
    return res.json({message:"not found"})
}
products.splice(index,1,modified)
    res.json({message:"this res for update products req"})
})


//delete a product
productApp.delete('/products/:productID',(req,res)=>{
    let idOfp=Number(req.params.productID) 
    console.log(req.params.productID) 
//findIndex
let index1=products.findIndex(obj=>obj.productID===idOfp)
if(index1===-1){
    return res.json({message:"not found"})
}
products.splice(index1,1)
//use splice 
res.json({message:"this res for delete products request"})
})