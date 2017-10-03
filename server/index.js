const express = require('express'),
  app = express(),
  port = process.env.PORT || 8800;
const http = require('http');

const UserFns=require("./userapi.js");

const dbUrl = require("./config/web.config.js").dbUrl;

const dbDirectory = "db";
const salt = 1234324235;
const bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(dbDirectory));

app.get('/users', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
    UserFns.getUsers(dbUrl).then((response)=>{
      res.send(response);
    }).catch(err=>{
        res.send("Unexpected Error!!");
    });
});
app.post('/users/add',function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
    UserFns.writeUserData(req.body)
    res.send("success");

})
app.listen(port,function(){
  console.log('todo list RESTful API server started on: ' + port);
});

