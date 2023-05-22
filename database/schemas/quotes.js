const { Mongoose, mongo } = require("mongoose");

const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema({
    author:{
        type:mongoose.SchemaTypes.String,
    },
    quote:{
        type:mongoose.SchemaTypes.String,
        require:true,
    },
    createdOn:{
        type:mongoose.SchemaTypes.Date,
        require:true,
        default:new Date(),
    },
});

module.exports = mongoose.model('quotes',quotesSchema); //compiling our schema into a Model called quotes