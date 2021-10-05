const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const novelModel = new Schema({
    title: {
        required:true,
        type:String
    },
    coverImage: {
        default: `https://images.tokopedia.net/img/cache/700/VqbcmM/2020/9/17/a1d5cecc-dc76-4264-b01f-74bf7e14f721.jpg`,
        type : String
    },
    file: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    author: {
        id: {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
})

const novel = mongoose.model("Novel",novelModel);

module.exports = novel;