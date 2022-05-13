require("dotenv").config();
require("./DB/index");
const express = require("express");
const cors = require("cors");

const app = express();

const usersRouter = require("./Routes/users");
const reviewsRouter = require("./Routes/reviews");
const gamesRouter = require("./Routes/games");
const favoritesRouter = require("./Routes/favorites");

// const { verifyAccess } = require("./Middlewares/users")

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/games" , gamesRouter);
app.use("/reviews" , reviewsRouter);
app.use("/favorites" , favoritesRouter);

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => {
  console.log(`server running , PORT : ${PORT}`);
});


