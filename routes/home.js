const express = require("express");
const path = require("path");

const hrouter = express.Router(); 

hrouter.get("/",(req,res)=>{
    // res.send("Access to this page is successful");
    res.render('index',{});
});
hrouter.post("/update",(req,res)=>{
    // res.send("updated successfully")
    console.log("request received")
    let uname = req.body.uname;
    let quote = req.body.quote;
    const fileName = path.join(process.cwd(),"public","quotes.txt");
    const updateDoc = (fileName,quote)=>{
        fs.appendFile(fileName,quote,(error)=>{
            if (error) throw console.log(`${error} + Something happened when updating the file`)
            else console.log("quote added");
        })
    };

});

exports.hrouter = hrouter; //another way of exporting modules
// module.exports = router