const {UrlModel} = require("./../model");
const { generateUniqueId }  = require("../utils/")

const shortenUrl = async (req,res) => {
    try{
        const {originalURL} = req.body;
        const shortURL = `http://${req.headers.host}/${generateUniqueId()}`;

        const url = new UrlModel({
            "originalUrl" : originalURL,
            "shortenedUrl" : shortURL
        })

        await url.save();
        res.status(201).json({
            message : "Short url creation succesfull",
            shortUrl : shortURL
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            error: "SOMETHING WENT WRONG"
        })
    }
}

const redirectToURL = async (req,res) => {
    try{
        const {urlId} = req.params;
        const shortUrl = `http://${req.headers.host}/${urlId}`;
        console.log(shortUrl)
        const doc = await UrlModel.findOne({shortenedUrl:shortUrl});
        if(!doc){
            res.status(400).json({
                error: "NO MATCHING DATA FOUND"
            })
        }

        res.redirect(doc.originalUrl);
    } catch(err){
        console.log(err);
        res.status(500).json({
            error:"SOMETHING WENT WRONG"
        })
    }
}

module.exports = {
    shortenUrl,
    redirectToURL
}