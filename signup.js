const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res)=>{
    let n = req.body.floatingFirstName;
    let s = req.body.floatingSurname;
    let e = req.body.floatingEmail;
    console.log(n + " " + s + " " + e);
});


app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})