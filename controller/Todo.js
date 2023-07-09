let express = require("express");
let app = express();

require("../db/connection");

let Collection = require("../model/schema");

let router = require("../routes/student");

app.use(express.json());

let poststurouter = async (req,res)=>{
    try{
        let insertdata = new Collection(req.body);
        let result = await insertdata.save();
        res.send(result);
    }

    catch(err)
    {
        res.send(err);
    }
    
}

let getsturouter = async (req,res)=>{
    try{
        let readdata = await Collection.find();
        res.send(readdata);
    }

    catch(err)
    {
        res.send(err);
    }
    
}

let getstubyidrouter = async (req,res)=>{
    try{
        let _id = req.params.id;
        let readdata1 = await Collection.findById(_id);
        res.send(readdata1);
    }

    catch(err)
    {
        res.send(err);
    }
    
}

let updatestubyrouter = async (req,res)=>{
    try{
        let _id1 = req.params.id;
        let updatedata = await Collection.findByIdAndUpdate(_id1, req.body);
        res.send(updatedata);
    }

    catch(err)
    {
        res.send(err);
    }
    
}

let deletestubyrouter = async (req,res)=>{
    try{
        let _id2 = req.params.id;
        let deletedata = await Collection.findByIdAndDelete(_id2);
        res.send(deletedata);
    }

    catch(err)
    {
        res.send(err);
    }
    
}

module.exports =  {poststurouter, getsturouter, getstubyidrouter, updatestubyrouter, deletestubyrouter} ;

