"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// The in-memory database of tweets. It's a basic object with an array in it.
const db = require("mongodb").MongoClient;

//do we have 2 ports???

// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint).
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:
const DataHelpers = require("./lib/data-helpers.js")(db);

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.

//so datahelpers object interacts w data here (the path is created ??) maybe elaborate
const tweetsRoutes = require("./routes/tweets")(DataHelpers);
//above all our routes are now "created!"

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
