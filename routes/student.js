let express = require("express");
let app = express();

let router = express.Router();

let  {poststurouter, getsturouter, getstubyidrouter, updatestubyrouter, deletestubyrouter} = require("../controller/Todo");

router.post("/poststudent", poststurouter);

router.get("/getstudent", getsturouter);

router.get("/getstudentbyid/:id", getstubyidrouter);

router.patch("/updatestudent/:id", updatestubyrouter);

router.delete("/deletestudent/:id", deletestubyrouter);

module.exports = router;
