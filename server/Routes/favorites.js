const favoritesRouter = require("express").Router();
const {getUserFavorites ,addToFavorites ,deleteFromFavorites} = require("../Controllers/favorites")

favoritesRouter.get("/:id" , getUserFavorites);
favoritesRouter.post("/:id" , addToFavorites);
favoritesRouter.delete("/:id" , deleteFromFavorites);

module.exports = favoritesRouter ;