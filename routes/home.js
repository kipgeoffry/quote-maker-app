const express = require("express");

const hrouter = express.Router(); 

hrouter.get("/",(req,res)=>{
    // res.send("Access to this page is successful");
    res.render('index',{});
});
hrouter.post("/update",(req,res)=>{
    // res.send("updated successfully")
    console.log("request received")
    // console.log(req)

});

exports.hrouter = hrouter; //another way of exporting modules
// module.exports = router