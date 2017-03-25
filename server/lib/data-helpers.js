// "use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
const MONGODB_URI = "mongodb://localhost:27017/tweets";
// Defines helper functions for saving and getting tweets, using the database `db`

module.exports = function makeDataHelpers(mc) {
  return {
    saveTweet: function(newTweet, callback) {
      mc.connect(MONGODB_URI, (err, db) => {
        db.collection("tweets").insertOne(newTweet);
          callback(null);
      })
    },
    getTweets: function(callback) {
      mc.connect(MONGODB_URI, (err, db) => {

        // const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        // callback(null, db.tweets.sort(sortNewestFirst));
        db.collection("tweets").find().toArray(callback);
      });
    }


  }
  // return db.connect(MONGODB_URI, (err, db) => {
  //    console.log(`Connected to mongodb: ${MONGODB_URI}`);
  //     // Saves a tweet to `db`



  //     // Get all tweets in `db`, sorted by newest first

    // })
}