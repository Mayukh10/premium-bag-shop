const mongoose = require('mongoose');



const ownerSchema = mongoose.Schema({
     Fullname :{
        type: String,
        trim: true,
        minLength : 3,
     },
      email : String,
    password : String,
    contact: Number,
 
    products: 
        {
            type: Array,
            default: []
        } 
    
})

module.exports = mongoose.model("owner", ownerSchema);