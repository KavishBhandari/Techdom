let mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0/crud").then(()=>console.log("connect")).catch((err)=>console.log(err));