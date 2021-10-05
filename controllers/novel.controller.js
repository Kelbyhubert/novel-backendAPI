const db = require("../models");

const novelController = {
    createNovel: async (req,res ,next) => {
        const {title , coverImage , file} = req.body;
        const author = {id: req.user._id , username : req.user.username};
        const newNovel = {title , coverImage , file , author};

        await db.Novel.create(newNovel , function(err , novelCreate){
            if(err){
                console.log(err);
            }else{
                res.send(novelCreate);
            }
        });
    },

    showAllNovel: async (req,res ,next) => {
        const allNovel = await db.Novel.find({});
        res.json(allNovel);
    },

    showNovel: async (req,res, next) => {
        try{
            const {novel_id} = req.params;
            const findNovel = await db.Novel.findById(novel_id);  
           
            if(findNovel === null){
                return res.send("not found");
            }
            res.json(findNovel); 

        }catch(err){
            console.log(err);
            res.json("not found")
        }
    },

    updateNovel: async(req , res , next) =>{
        try{
            const {novel_id} = req.params;
            const updateData = req.body;
            const updateNovel = await db.Novel.findByIdAndUpdate(novel_id, updateData);
            
            if(updateNovel === null){
                return res.send("not found");
            }

            console.log(updateNovel);
            res.send(updateNovel);
            
           
        }catch(err){
            console.log(err);
            res.json("not found");
        }
    },

    deleteNovel: async(req , res, next) => {
        try{
            const {novel_id} = req.params;
            const deleteNovel = await db.Novel.remove(novel_id);
            res.send(deleteNovel);
        }catch(err){
            console.log(err);
            res.json("not found")
        }
    }
}


module.exports = novelController;