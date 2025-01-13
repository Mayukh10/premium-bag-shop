const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
     Fullname :{
        type: String,
        trim: true,
        minLength : 3,
     },
      email : String,
    password : String,
    picture: String,
    contact: Number,
    isadmin: Boolean,
    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    orders: 
        {
            type: Array,
            default: []
        } 
    
})

module.exports = mongoose.model("user", userSchema);