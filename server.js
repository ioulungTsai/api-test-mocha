const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();

router.get('/',function(req,res){
  res.json({
    "error" : false,
    "message" : "Hello World!"
  });
});

router.post('/add',function(req,res){
  res.json({
    "error" : false,
    "message" : "success",
    "data" : req.body.num1 + req.body.num2
  });
});

app.use('/',router);

app.listen(8080,function(){
  console.log("I am listening at PORT 8080");
})