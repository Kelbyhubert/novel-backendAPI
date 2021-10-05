const mongoose = require("mongoose");
const DBURL = 'mongodb://localhost:27017/novel';

mongoose.connect(DBURL, {useNewUrlParser: true})
.then(() => {
    console.log("database online")
}
).catch((err) => {
    console.log(err);
    console.log("there something wrong")
});


module.exports.User = require("./user.model");
module.exports.Novel = require("./novel.model")