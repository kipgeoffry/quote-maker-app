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

const family = {
    name: "kigen",
    Age: 20,
    family: {
        father: "Moses",
        mother: "penina",
        children: ["june", "Jael"]
    }
};
const shoppingList = ["banana","lemon","cabbage","carrot"]

const stores = [
    {
      id: 1,
      name: 'Walmart',
      distance: 2.5, // in miles
      rating: 2.2,
    },
    {
      id: 2,
      name: 'Target',
      distance: 3.8, // in miles
      rating: 3.5,
    },
    {
      id: 3,
      name: 'Costco',
      distance: 6.2, // in miles
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Safeway',
      distance: 1.1, // in miles
      rating: 3.9,
    },
    {
      id: 5,
      name: 'Whole Foods',
      distance: 4.5, // in miles
      rating: 4.7,
    }
    // add more stores as needed
  ];

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

//this code filters stores based on ratings it is using query parameter//use filter method
hrouter.get("/stores",(req,res)=>{
    const {rating} = req.query;
    const parsedRating = parseInt(rating);
    if(!isNaN(parsedRating)){
        const findStore = stores.filter(store=>store.rating <= parsedRating);
        res.json(findStore);
    } else res.json(stores);   ////this code dispalys all available stores
    
})

 //this code finds a store when store id is provided using route parameters //use find methos
hrouter.get("/stores/:id",(req,res)=>{
    const {id} = req.params;
    const findStore = stores.find(store=>store.id == id);
    res.json(findStore);
});

//this code adds a store in the stores array
hrouter.post("/stores",(req,res)=>{
    stores.push(req.body);
    res.send("store added successfully")
})


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