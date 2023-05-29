const mongoose = require("mongoose");
require('dotenv').config();

MONGO_URI = process.env.MONGO_URI;
mongoose
    .connect(MONGO_URI)
    .then(()=>console.log('Connected to DB'))
    .catch((err)=>console.log(err));