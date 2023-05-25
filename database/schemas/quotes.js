const { Mongoose, mongo } = require("mongoose");

const mongoose = require("mongoose");

const schema = {
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
};

const quotesSchema = new mongoose.Schema(schema);

module.exports = mongoose.model('Quotes',quotesSchema); //compiling our schema into a Model called quotes