const express = require("express");
// const {hrouter} = require("./routes/home"); //same as import router from "./routes/home"
const homeUrl = require("./routes/home");
const port = 4500;

const app = express();

// app.set('PORT',4500);
app.use(homeUrl.hrouter); //middleware that routes request with url "/" to the logic that handles it

app.listen(port,()=>{
    console.log(`application is running and listening on port ${port}`);
});
