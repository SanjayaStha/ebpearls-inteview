var express = require("express")
var app = express()

let setUid = (req,res, next) =>{
    req.uid = "sanjaya"
    next()
}
app.use(setUid())

app.get("/", function(req, res){
    res.send(req.uid)
})


app.post("/validate", (req,res)=>{
    let name = req.body.name
    let email = req.body.email
    let token = req.headers["x-access-token"]
    let mailRegex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$']";

    if(!name || !email){
        res.send("Name or Email field empty!!!")
    }

    if(token !== "newtoken"){
        res.send("Unathorised user")
    }

    if(email.length > 254){
        res.send("Max lenght exceeded")
    }

    if(!mailRegex.test(email.toLoerCase())){
        res.send("Email not valid")
    }

    res.send("Valid!!!")


})
var server = app.listen(4000, function(){
    var host = server.address().address
    var port = server .address().port

    console.log("App listening at port 4000")
})