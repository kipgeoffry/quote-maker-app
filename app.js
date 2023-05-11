const express = require("express");
// const {hrouter} = require("./routes/home"); //same as import router from "./routes/home"
const homeUrl = require("./routes/home");
const storeRoute = require("./routes/stores");
const familyRoute = require("./routes/family");
// const bodyParser = require('body-parser')
const port = 4500;

const app = express();

// app.set('PORT',4500);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(checkUrl);//middleware that will console log the method and url that is accesses
app.use(homeUrl); //middleware that routes request with url "/" to the logic that handles it
app.use("/api/v1/stores",storeRoute); //url route to stores 
app.use("/family",familyRoute);


app.set('view engine', 'ejs');

function checkUrl(req,res,next){
    console.log(`${req.method}::${req.url}`);
    next();
}

app.listen(port,()=>{
    console.log(`application is running and listening on port ${port}`);
});
