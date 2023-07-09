let Collection = require("../model/schema");

let jwt = require("jsonwebtoken");

let config = require("../config/config");

const create_token = async(id)=>{
    try{
       const token = await jwt.sign({_id:id}, config.secret_jwt);
       return token;
    }

    catch(error)
    {
        res.status(400).send(error.message);
    }
}

const register_user = async (req,res)=>{

    try{
        
        const Schema_Name = new Collection({
            F_Name : req.body.F_Name,
            L_Name : req.body.L_Name,
            Email :  req.body.Email,
            IsActive: req.body.IsActive,
            Roles: req.body.Roles
        });
    
        const userdata = await Collection.findOne({email:req.body.Email})
    
        if(userdata)
        {
            res.status(200).send({success:false , msg:"it is a existing email."});
            
        }
    
        else{
            const user_data = await Schema_Name.save();
            res.status(200).send({success:true , data:user_data});
        }
    }

    catch(error)
    {
        res.status(400).send(error.message);
    }
    
}

const login = async (req,res, next)=>{

    try
    {
        let email = req.body.Email;

        let logindata = await Collection.findOne({Email:email});

        if(logindata)
        {
            const tokendata = await create_token(logindata._id);

            const Showdata = {
                _id:logindata._id,
                F_Name : logindata.F_Name,
                L_Name : logindata.L_Name,
                Email : logindata.Email,
                IsActive : logindata.IsActive,
                Roles : logindata.IsActive,
                token : tokendata
            
            }

            const response = {
                success : true,
                msg : "show data",
                data : Showdata
            }
            res.status(200).send(response)
        }
        else{
            res.status(200).send({success:false, msg:"login details are incorrect"});
        }

    }

    catch(error)
    {
        res.error(400).send(error.message);
    }
}

module.exports ={
    register_user,
    login
}
