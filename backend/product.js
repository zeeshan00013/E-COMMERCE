const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
    trim: true,
  },
  product_price: {
    type: Number,
    required: true,
    min: 0,
  },
  product_discount:{
    type:Number,
    min:0,
    max:100,
    required:true,
  },
  product_description: {
    type: String,
    required: true,
  },
   product_type:{
    type:String,
    required:true,
 
  },
    product_category:{
    type:String,
    required:true,
   },
   product_size:{
    type:Array,
    required:true,
    
   },
  product_picture: {
    type: [String], // Store the image path or URL
    default: [],
  },
 quantity: {
        type: Number,
        default: 1 // Default quantity is 1 when adding to cart
    }
  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;