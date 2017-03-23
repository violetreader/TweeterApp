/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function renderTweets(arrTweetsObj) {
  for (key in arrTweetsObj) {
    $("main #appendNewTweetsHere").append(createTweetElement(arrTweetsObj[key]));
  }
}

//$(".container form").on("submit", function(event){});
function createTweetElement(obj) {
  // var tweetContents = $("main textarea").val();

  var $tweet = $("<article>").addClass("tweet");
  var $header = $("<header>");
  var $atUser = $("<p>").addClass("atUser").text(obj.user.handle);
  var $img = $("<img>").addClass("smiley").attr("src", obj.user.avatars.regular);
  var $username = $("<h6>").text(obj.user.name);
  var $content = $("<p>").addClass("tweetContent").text(obj.content.text);
  var $footer = $("<footer>");
  var $time = $("<p>").addClass("time").text(obj.created_at);

  $header.append($atUser);
  $header.append($img);
  $header.append($username);
  $footer.append($time);

  $tweet.append($header);
  $tweet.append($content);
  $tweet.append($footer);
  // $("main #appendNewTweetsHere").append('<article class="tweet"><header></header><p class="atUser">@Suzy101</p><img class="smiley" src="https://usercontent1.hubstatic.com/7241270_f520.jpg"><h6>Susanne Cup</h6><p class="tweetContent">Little tweet here</p><footer></footer><p class="time">10 days ago</p></article>')
  // $(".tweet .atUser").text(obj.handle);
  // $(".tweet .smiley").text(obj.user.avatars.regular);
  // $(".tweet h6").text(obj.user.name);
  // $(".tweet .tweetContent").text(tweetContents);
  // $(".tweet .time").text(obj.created_at);
  // // event.preventDefault();
  // $.ajax({
  //   url: '/',
  //   method: 'POST',
  //   data: {
  //     type: tweetContents
  //   }
  // }).done(function(){
      // $("main textarea").val('');
      // $("main textarea").focus();
  // });
  //am i grabbing the new atUser??
  return $tweet;
}


$(document).ready(function() {

  renderTweets(tweetData);
});





