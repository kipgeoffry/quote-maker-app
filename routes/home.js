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
        const myquotes = await Quotes.find();
        res.send(myquotes);
    } catch (error) {
        console.error({message:error});
    }  
   
});

//add a quote
router.post("/quote",async (req,res)=>{
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

router.get("/quote/author/:id",findAuthor,(req,res)=>{
    console.log(res.author);
    res.json(res.author);

});

//get a quote by id

router.get("/quote/:id",findQuoteById, (req,res)=>{
    console.log(res.quote)
    res.send(res.quote)
    
});

//update quote
router.patch("/quote/:id",findQuoteById,async(req,res)=>{
    const { author, quote } = req.body;
    if (author != null){
        res.quote.author = author;
    }
    if (quote != null){
        res.quote.quote = quote;
    }
    try {
        const updatedQuote = await res.quote.save();
        res.send("record updated successfully")
        
    } catch (error) {
        res.status(400).json({message:error})
    }
});
//delete quote
router.delete("/quote/:id",findQuoteById,async(req,res)=>{
    const{ id } = res.quote
    try {
        await Quotes.deleteOne({_id:id}) 
        res.json({message:`quote deleted`})      
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error});        
    }
})

//like a quote

//function to find by author

async function findAuthor(req,res,next){
    const { id } = req.params;
    let author = null;
    try {
    author = await Quotes.find({author:id});
    if (author == null) return res.status(404).json({message:`No quotes by author ${id} found`})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message});        
    }
    res.author = author;
    next()
    };

async function findQuoteById(req,res,next){
    const { id } = req.params;
    let quote = null;
    try {
        quote = await Quotes.findById(id);
        if (quote == null) return res.status(404).json({message:`No quote by id ${id}`});
        // return res.status(200).send(quote);        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error});        
    }    
    res.quote = quote;
    next();
}
    

module.exports = router