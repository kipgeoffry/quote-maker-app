const { Router } = require("express");
const Quotes = require("../database/schemas/quotes")

//initialize the router object
const router = Router();

router.get("/", (req, res) => {
    res.render('index', {});
});

//ROUTES
//get all quotes
router.get("/quotes", async (req,res)=>{
    try {
        const myquotes = await quotemodel.find();
        res.send(myquotes);
    } catch (error) {
        console.error({message:error});
    }  
   
});

//add a quote
router.post("/quotes",async (req,res)=>{
    try{
        const { author, quote} = req.body;
        const newQuote = await Quotes.create({author,quote});
        //you can also use below to save a quote to DB
        // const newQuot = new Quotes({
        //     quote:req.body.quote,
        //     author:req.body.author
        // });
        // await newQuot.save();
        res.send("quote added successfully");
    }
    catch(err){
        console.log(err)
    }; 

});

//get a quote by author

//update quote

//delete quote

//like a quote

module.exports = router