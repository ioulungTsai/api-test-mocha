const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();

const ifPass = require("./helpers/ifPass");

// Create login route api
router.post('/login',function(req,res){
  const { email, password } = req.body
  if (ifPass(password)) {
    res.json({
      "error" : false,
      "message" : "success",
      "email" : email,
      "password" : password
    });
  } else {
    res.json({
      "message" : "Password requirements: at least 8 characters, a uppercase letter, a number"
    })
  }
});

app.use('/',router);

app.listen(8080,function(){
  console.log("I am listening at PORT 8080");
})

module.exports = app;