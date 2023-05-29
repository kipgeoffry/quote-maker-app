const Quotes = require("../database/schemas/quotes");

//funstion to find quote by author
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
    
//this fundtion finds quote by id
async function findQuoteById(req,res,next){
    const { id } = req.params;
    let quote = null;
    try {
        quote = await Quotes.findById(id);
        if (quote == null) return res.status(404).json({message:`No quote by id ${id}`});       
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error});        
    }    
    res.quote = quote;
    next();
}

module.exports = {findAuthor,findQuoteById}