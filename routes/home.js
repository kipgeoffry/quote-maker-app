const { Router } = require("express");
const Quotes = require("../database/schemas/quotes")
const { findAuthor,findQuoteById } = require("../controllers/quotes")

//initialize the router object
const router = Router();

router.get("/", (req, res) => {
    res.render('index', {});
});

//ROUTES
//get all quotes
router.get("/quotes", async (req,res)=>{
    try {
        const myquotes = await Quotes.find();
        res.send(myquotes);
    } catch (error) {
        console.error({message:error});
    }  
   
});

//add a quote
router.post("/",async (req,res)=>{
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
        console.log(err);
    }; 

});

//get a quote by author

router.get("/author/:id",findAuthor,(req,res)=>{
    res.json(res.author);

});

//get a quote by id

router.get("/:id",findQuoteById, (req,res)=>{
    res.send(res.quote);
    
});

//update quote
router.patch("/:id",findQuoteById,async(req,res)=>{
    const { author, quote } = req.body;
    if (author != null){
        res.quote.author = author;
    }
    if (quote != null){
        res.quote.quote = quote;
    }
    try {
        const updatedQuote = await res.quote.save();
        res.send("record updated successfully");  
    } catch (error) {
        res.status(400).json({message:error});
    }
});
//delete quote
router.delete("/:id",findQuoteById,async(req,res)=>{
    const{ id } = res.quote
    try {
        await Quotes.deleteOne({_id:id}) 
        res.json({message:`quote deleted`})      
    } catch (error) {
        res.status(500).json({message:error});        
    }
})

//like a quote
 

module.exports = router