const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/failure", (req, res)=>{
    res.redirect("/");
});

app.post("/success", (req, res)=>{
    res.redirect("/");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res)=>{
    let n = req.body.floatingFirstName;
    let s = req.body.floatingSurname;
    let e = req.body.floatingEmail;
    console.log(n + " " + s + " " + e);
    if(n === "Marek")
        res.sendFile(__dirname + "/failure.html");
    else
        res.sendFile(__dirname + "/success.html");

});


app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})