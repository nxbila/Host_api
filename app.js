require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const products_routes = require("./routes/products")
const connectDB = require ("./database/connect")

app.get("/", (req,res) => {
   res.send("Hi I am live.")
})

app.use("/api/products", products_routes)

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
           console.log(`${PORT} Yes i am connected`); 
        })
    }
    catch(error){
        console.log(error);
    }
}
start();