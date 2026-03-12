/**Product document structure
     a.productId (required)
     b.productName(required)
     c.price(required, min price 10000 and max price 50000)
     d.brand(required) */
     import {Schema,model} from 'mongoose'

     const productSchema=new Schema({
        productId:{
            type:Number,
            required:[true,"productID is required"]
        },
        productName:{
            type:String,
            required:[true,"productName is required"]
        },
        price:{
            type:Number,
            min:[10000,"min value is 10000"],
            max:[50000,"max is 50000"]
        },
        brand:{
            type:String,
            required:[true,"brand is required"]
        }
     })
     export const productModel=model("product",productSchema)