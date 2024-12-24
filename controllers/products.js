const { query } = require("express");
const Product = require("../models/product");

const getAllProducts = async (req,res) => {
    const {company,name,feature,sort,select} = req.query;
    const queryObject = {}

    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex: name, $options: "i"}; //i for case insensitive searches
    }
    if(feature){
        queryObject.feature = feature ==="true";
    }
    let apiData = Product.find(queryObject);
    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page -1) * limit;
    apiData = apiData.skip(skip).limit(limit);
    console.log(queryObject);

    const Products = await apiData;
    res.status(200).json({Products, nbHits:myData.length});
}
const getAllProductsTesting = async (req,res) => {
    const myData = await Product.find({}).select("name company");
    res.status(200).json({myData});
}
module.exports = {getAllProducts, getAllProductsTesting}