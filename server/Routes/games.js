const gamesRouter = require("express").Router();
const {  getGames , addGame ,updateGame ,  deleteGame } = require("../Controllers/games")

gamesRouter.get("/" , getGames);
gamesRouter.post("/" , addGame);
gamesRouter.put("/:id" , updateGame)
gamesRouter.delete("/:id" , deleteGame);

module.exports = gamesRouter ;
