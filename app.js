let express = require("express");

let Router = require("./routes/student")

let authroute = require("./routes/auth")

let app = express();


app.use(express.json());

app.use("", Router);

app.use("/authroute", authroute);



app.listen(9001, ()=>{
    console.log("it is listening on 9001 port");
})