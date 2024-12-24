require("dotenv").config()
const mongoose = require("mongoose")
// const uri = "mongodb+srv://nabilaakhtar99:nab%40DB12@cluster0.fx1zl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = (uri) => {
  console.log('MONGODB_URI:', process.env.MONGODB_URI); // Add this for debugging


  if (!uri) {
  console.error('MongoDB URI is not defined');
  process.exit(1); // Exit the process if the URI is not available
  }
    console.log("Connected to DB");
    
    return mongoose.connect(uri).then(res=>{
        console.log("DB Connected!")
}).catch(err => {
  console.log(Error, err.message);
})
}

module.exports = connectDB;