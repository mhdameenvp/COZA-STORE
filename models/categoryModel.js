const mongoose = require('mongoose');


const categoriesSchema= new mongoose.Schema({
    catName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    is_blocked:{
        type:Boolean,
         default:false
    }

})
module.exports=mongoose.model("categories",categoriesSchema)