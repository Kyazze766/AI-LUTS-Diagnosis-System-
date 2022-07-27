var express = require("express");
var path = require("path");
var routes =require("./routes.js");


var app=express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(app.get("port"), function (){
    app.use(routes);
    app.use(express.static(path.join(__dirname, '/public')));

    console.log("The Server has started at Port " + app.get("port"));

});