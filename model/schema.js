
let mongoose = require("mongoose");

let schema = new mongoose.Schema({
    F_Name:{
        type : String,
        required : true
    },

    L_Name:{
        type : String,
        required : true
    },


    Email:{
        type: String,
        required : true
    },

    IsActive:{
        type: String,
        required : true
    },

    Roles:{
        type: String,
        required : true
    }

    /*Mobile:{
        type:Number,
        required : true
    },

    Address:{
        type: String,
        required : true
    }*/
})

let Collection = new mongoose.model("Collection", schema);

module.exports = Collection;

