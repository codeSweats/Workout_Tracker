const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require('./routes');
const PORT = process.env.PORT || 3001

// const Example = require("./exampleModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } );

app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!" + " ...Click on the link: " + `http://localhost:${PORT}/`);
});