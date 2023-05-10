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
            "Address:": "197.248.209.239",
            "Mask": "255.255.255.255"
        },
        {
            "Address:": "41.215.10.0",
            "Mask": "255.255.255.252"

        }
    ],
    "ci": "95014729",
    "capacity": "IFB 5Mbps"
};

const family = {
    "name": "kigen",
    "Age": 20,
    "family": {
        "father": "Moses",
        "mother": "penina",
        "children": ["june", "Jael"]
    }
};
const shoppingList = ["banana","lemon","cabbage","carrot"]

hrouter.get("/family", (req, res) => {
    console.log(req.params);
    res.send(200);

    // const fileName = path.join(process.cwd(), "public", "quotes.txt");
    // const updateDoc = (fileName,quote)=>{
    //     fs.appendFile(fileName,quote,(error)=>{
    //         if (error) throw console.log(`${error} + Something happened when updating the file`)
    //         else console.log("quote added");
    //     })
    // };

});

hrouter.get("/links/:value",(req,res)=>{
    const {value} = req.params 
    console.log(value);
    console.log(links.value)
    res.send(links.value);

})

// exports.hrouter = hrouter; //another way of exporting modules
module.exports = hrouter