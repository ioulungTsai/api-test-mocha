const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

module.exports = app;