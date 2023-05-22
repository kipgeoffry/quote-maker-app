const { json } = require("body-parser");
const { Router } = require("express");
const quotemodel = require("../database/schemas/quotes")

const router = Router();



router.get("/", (req, res) => {
    // res.send("Access to this page is successful");
    res.render('index', {});
});

router.get("/quotes",  async (req,res)=>{
   const myquotes = await quotemodel.find();
   res.send(myquotes);
})
router.post("/quotes", async (req,res)=>{
    try{
        const { author, quote} = req.body;
        const newQuote = await quotemodel.create({author,quote});
        res.send("quote added successfully");
    }
    catch(err){
        console.log(err)
    }
  

});




// exports.hrouter = hrouter; //another way of exporting modules
module.exports = router