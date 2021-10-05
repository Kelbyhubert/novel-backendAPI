const db = require("../../models")

module.exports.isLogin = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.send("please login first");
}


module.exports.isAuthor = async (req,res,next) => {
    const {novel_id} = req.params
    const currentUser = req.user._id;
    const checkNovel = await db.Novel.findById(novel_id);

    if(!checkNovel.author.equals(currentUser)){
        return res.send("you are not the author");
    }
    next();
}


module.exports.isAdmin = (req , res , next) => {
    const currentUser = req.user.isAdmin;
    if(!currentUser){
        return res.send("you cant access this page")
    }
    next();

}
