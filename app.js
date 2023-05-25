const express = require("express");
require("./database/db"); //import db

//url routes
const homeUrl = require("./routes/home");
const storeRoute = require("./routes/stores");
const familyRoute = require("./routes/family");

//initializing express app
const app = express();
const port = process.env.PORT || 4500;

//application midlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //middleware to parse json before handlers.
app.use(checkUrl);//middleware that will console log the method and url that is accesses
app.use(homeUrl); //middleware that routes request with url "/" to the logic that handles it
app.use("/api/v1/stores",storeRoute); //url route to stores 
app.use("/family",familyRoute); //url route for family

//setting the templating engine used to render files
app.set('view engine', 'ejs');

function checkUrl(req,res,next){
    console.log(`${req.method}::${req.url}`);
    next();
}

app.listen(port,()=>{
    console.log(`application is running and listening on port ${port}`);
});
