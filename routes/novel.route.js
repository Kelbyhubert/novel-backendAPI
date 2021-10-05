const express = require("express");
const novelController = require("../controllers/novel.controller");
const { isLogin, isAuthor, isAdmin } = require("../middlewares/auth/index");
const Router = express.Router();


Router.route("/")
    .get(novelController.showAllNovel);

Router.route("/:novel_id")
    .get(novelController.showNovel);


Router.route("/:novel_id/update")
    .put(isLogin, isAuthor, novelController.updateNovel);

Router.route("/:novel_id/delete")
    .delete(isLogin , isAdmin , novelController.deleteNovel);

Router.route("/create")
    .post(isLogin , novelController.createNovel);


module.exports = Router;