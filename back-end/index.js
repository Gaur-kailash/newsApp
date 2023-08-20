const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/newsApp');
app.use(express.json());
app.use(cors());

const newsSchema = new mongoose.Schema({
    title:String,
    description:String,
    urlToImage:String,
    url:String
})

const newsItem = mongoose.model('watchlist',newsSchema);

app.get("/getNews",async (req,res)=>{
    let news = await newsItem.find()
    res.send(news);
})
app.post("/addNews",async (req,res)=>{
    let news = new newsItem(req.body)
    let result = await news.save();
    res.send(result);
})
app.post("/removeNews",async (req,res)=>{
    let news = await newsItem.deleteOne(req.body);
})

app.listen(5000);