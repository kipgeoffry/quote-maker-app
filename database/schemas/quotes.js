const { Mongoose, mongo } = require("mongoose");

const mongoose = require("mongoose");

const schema = {
    author:{
        type:String,
    },
    quote:{
        type:String,
        require:true,
    },
    createdOn:{
        type:Date,
        require:true,
        default:Date.now, //new Date() can also be used
    },
};

const quotesSchema = new mongoose.Schema(schema);

module.exports = mongoose.model('Quotes',quotesSchema); //compiling our schema into a Model called Quotes this also maps to collection called quote