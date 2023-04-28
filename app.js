const express = require("express");
const port = 4500;

const app = express();

// app.get('PORT',4500);

app.listen(port,()=>{
    console.log(`application is running and listening on port ${port}`)
});
