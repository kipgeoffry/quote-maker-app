const { Router } = require("express");
const hrouter = require("./home");

const router = Router();

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

//this code filters stores based on ratings it is using query parameter(rating)//use filter method
router.get("/",(req,res)=>{
    const {rating} = req.query;
    const parsedRating = parseInt(rating);
    if(!isNaN(parsedRating)){
        const findStore = stores.filter(store=>store.rating <= parsedRating);
        res.json(findStore);
    } else res.json(stores);   ////this code dispalys all available stores
    
})

 //this code finds a store when store id is provided using route parameters //use find methos
router.get("/:id",(req,res)=>{
    const {id} = req.params;
    const findStore = stores.find(store=>store.id == id);
    res.json(findStore);
});

//this code adds a store in the stores array
router.post("/",(req,res)=>{
    stores.push(req.body);
    res.send("store added successfully")
});

module.exports = router;

