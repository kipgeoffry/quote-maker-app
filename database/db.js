const mongoose = require("mongoose");
mongoose
    .connect('mongodb://kigen:kalya@192.168.5.43:27017/quotesdb')
    .then(()=>console.log('Connected to DB'))
    .catch((err)=>console.log(err));