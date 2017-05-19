var express = require('express'),
  app = express(),
  port = process.env.PORT || 8800;
var http = require('http');

const UserFns=require("./userapi.js");

const dbUrl = require("./config/web.config.js").dbUrl;

const dbDirectory = "db";
const salt = 1234324235;


app.use(express.static('db'));

app.get('/users', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
    UserFns.getUsers(dbUrl).then((response)=>{
      res.send(response.data);
    }).catch(err=>{
        res.send("Unexpected Error!!");
    });
});

app.listen(port,function(){
  console.log('todo list RESTful API server started on: ' + port);
});

