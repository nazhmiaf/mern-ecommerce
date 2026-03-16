import mongoose from "mongoose";
const {Schema} = mongoose;

const productSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [true, "Product name is required"],
    
  }, 
  price : {
    type : Number,
    required : [true, "Product price is required"],
  },
  description : {
    type : String,
    required : [true, "Product description is required"],
  },
  category : {
    type : Schema.Types.ObjectId,
    ref : "Category",
    required : [true, "Product category is required"],
  },  
  stock : {
    type : Number,
    required : [true, "Product stock is required"],
  },
  sold : {
    type: Number,
    default: 0,
    set: v => v ?? 0
  },
  images: {
    type: [String], 
    default: ["/images/placeholder.jpg"],
  },
  createdAt : {
    type : Date,
    default : Date.now
  }
})

const Product = mongoose.model('Product', productSchema);

export default Product;