const express = require("express");

const hrouter = express.Router(); 

hrouter.get("/",(req,res)=>{
    // res.send("Access to this page is successful");
    res.render('index',{});
});

exports.hrouter = hrouter; //another way of exporting modules
// module.exports = router