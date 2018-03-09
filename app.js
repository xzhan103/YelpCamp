var express = require("express");
var app =  express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image:"https://pixabay.com/get/e136b80728f31c2ad65a5854ee4d459fe270e7c818b4134197f0c779a5ee_340.jpg"},
    {name: "Granite Hill", image:"https://pixabay.com/get/eb35b70b2df6033ed95c4518b7444795ea76e5d004b0144395f2c17fa7efb6_340.jpg"},
    {name:"Mountain Goat's Rest", image:"https://pixabay.com/get/ea36b70928f21c2ad65a5854ee4d459fe270e7c818b4134197f0c779a5ee_340.jpg"}
    ];

app.get("/", function(req, res){
    res.render("landing");
});
    
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Sever!");
});