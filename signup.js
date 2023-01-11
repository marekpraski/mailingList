const express = require("Express");
const https = require("node:https");
const bodyParser = require("body-parser");
bodyParser.urlencoded({extended: true});

const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/signup.html");

});







app.listen("3000", ()=>{
    console.log("Listening on port 3000");
})