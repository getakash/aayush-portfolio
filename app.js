var express = require("express"),
    app = express();
const path =require('path');

app.use(express.static("css"));
app.use(express.static("img"));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen( process.env.PORT  || 3000, function(){
    console.log("server started");
})