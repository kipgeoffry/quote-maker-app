const { json } = require("body-parser");
const { Router } = require("express");
const { link } = require("fs");
const path = require("path");

const hrouter = Router();

hrouter.get("/", (req, res) => {
    // res.send("Access to this page is successful");
    res.render('index', {});
});

const links = {
    "status": "Active",
    "ips": [
        {
            "Address": "197.248.209.239",
            "Mask": "255.255.255.255"
        },
        {
            "Address": "41.215.10.0",
            "Mask": "255.255.255.252"

        }
    ],
    "ci": "95014729",
    "capacity": "IFB 5Mbps"
};

hrouter.get("/links/:value",(req,res)=>{
    const {value} = req.params 
    console.log(value);

    const lin = {
        status: "Active",
        ips:[{
            Address:"197.248.10.10",
            Mask:"255.255.255.255"
        }]        
    };

    console.log(lin)
    res.send(lin);

})

// exports.hrouter = hrouter; //another way of exporting modules
module.exports = hrouter