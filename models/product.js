const mongoose=require('mongoose')

const ProductSchema= new mongoose.Schema({
   Name:{type:String,require:true},
   Price:{type:Number,require:true},
   Quantity:{type:Number,require:true},
   Image:{type:String}
},
{ timestamps: true })
const Product=mongoose.model('Product',ProductSchema)
module.exports=Product