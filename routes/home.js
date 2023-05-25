const { Router } = require("express");
const quotemodel = require("../database/schemas/quotes")

//initialize the router object
const router = Router();

router.get("/", (req, res) => {
    res.render('index', {});
});

//ROUTES
//get all quotes
router.get("/quotes",  async (req,res)=>{
   const myquotes = await quotemodel.find();
   res.send(myquotes);
});

//add a quote
router.post("/quotes", async (req,res)=>{
    try{
        const { author, quote} = req.body;
        const newQuote = await quotemodel.create({author,quote});
        //you can also use
        // const newQuot = new Quotes({
        //     quote:req.body.quote,
        //     author:req.body.author
        // });
        // newQuot.save();
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