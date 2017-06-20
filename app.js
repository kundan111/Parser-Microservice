// requiring all the modeules
var express = require("express");
var cors = require("cors");
var bodyParser= require("body-parser");
var useragent = require("express-useragent");

// Initialising the express app
var app = express();

//using the packages
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());


//url formation
var api ="/api/whoami";

app.get(api,function(req,res,next){

  var language= req.acceptsLanguages();
  var software=req.useragent;
  var ipaddress= req.ip;



res.json({"IP Address": ipaddress,"Language": language[0],"OS": software.os,"Browser":software.browser +" "+ software.version,"Platform":software.platform});
});





//listening to port
app.listen("3000",function(){

  console.log("connected to the port 3000!");

})
