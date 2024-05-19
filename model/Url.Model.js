const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    originalUrl : {
        type : String
    },
    shortenedUrl : {
        type : String,
        unique : true
    }
});

const UrlModel = mongoose.model("Urls",UrlSchema);

module.exports = UrlModel