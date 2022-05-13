const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB connected"))
.catch(() => console.log("DB connection error ..."));

module.exports = mongoose.connection;
