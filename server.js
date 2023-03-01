const express = require("express");
const https = require("https");
const app = express();
const path = require('path');
var exphbs  = require('express-handlebars');

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","hbs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
});

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/public/signup.html");
// });

app.listen(3000,function(){
    console.log("Server is up and running at port 3000");
}); 
