require("dotenv").config();
const connectDB = require("./database/connect");
const Product = require("./models/product");

const ProductJson = require("./products");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}
start();