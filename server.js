
const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");


dotenv.config({path: './config.env'});

//connecting app to database
mongoose.connect("mongodb://localhost:27017/MYtoDO").then(()=>{
    console.log("Connection to DB successful");
});

//Creating express app & setting server

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}...`);
})





