const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

function Person(firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
};


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
    if(n === "Marek"){
        res.sendFile(__dirname + "/failure.html");
    }
    else{
        doSomethingBrilliant(new Person(n, s, e));
        res.sendFile(__dirname + "/success.html");
    }
});

function doSomethingBrilliant(person){
    let s = JSON.stringify(person);     //zamienia przekazany obiekt w jsona
    let p2 = JSON.parse(s);         //zamienia jsona w obiekt; typ obiektu nie jest określony ale w zasadzie nie ma to znaczenia
    savePerson(p2);
};

function savePerson(p){
    let n = p.firstName;        // wyciąga z obiektu parametry, tak jakby było wiadomo że jest to obiekt typu Person
    let s = p.lastName;
    let e = p.email;
};


app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});