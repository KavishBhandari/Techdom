let express = require("express");
let app = express();

let router = express.Router();

let  auth = require("../controller/auth");

router.post("/register", auth.register_user)

router.post("/login", auth.login)

module.exports = router