const express = require("express");
const https = require("https");
const app = express();
const path = require('path');
// var exphbs  = require('express-handlebars');

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","hbs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);

    const url = "https://us10.api.mailchimp.com/3.0/lists/ce20253291"

    const options = {
        method: "POST",
        auth: "sphere:562ff4de26ee46b4a418677e34b071ad-us10"
        
    }
    const request = https.request(url,options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();

});

app.get("/",(req,res)=>{
    res.render("signup");
});

app.listen(3000,function(){
    console.log("Server is up and running at port 3000");
}); 

// Mailchimp API key
// 562ff4de26ee46b4a418677e34b071ad-us10

// List ID
// ce20253291