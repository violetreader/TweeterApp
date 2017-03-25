/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {


  function renderTweets(arrTweetsObj) {
    for (key in arrTweetsObj) {
      $("main #appendNewTweetsHere").append(createTweetElement(arrTweetsObj[key]));
      $("time.timeago").timeago();
    }
  }

  //$(".container form").on("submit", function(event){});
  function createTweetElement(obj) {

    var $tweet = $("<article>").addClass("tweet");
    var $header = $("<header>");
    var $atUser = $("<p>").addClass("atUser").text(obj.user.handle);
    var $img = $("<img>").addClass("smiley").attr("src", obj.user.avatars.regular);
    var $username = $("<h6>").text(obj.user.name);
    var $content = $("<p>").addClass("tweetContent").text(obj.content.text);
    var $footer = $("<footer>");
    var $time = $("<time>").addClass("timeago").attr("datetime", new Date(obj.created_at).toISOString());

    $header.append($atUser);
    $header.append($img);
    $header.append($username);
    $footer.append($time);

    $tweet.append($header);
    $tweet.append($content);
    $tweet.append($footer);

    return $tweet;
  }



  $("main form").on("submit", function(event) {

    event.preventDefault();
    if ($("main textarea").val() === "") {
      alert("please don't leave field blank :}")
      return;
    }

    if ($("main textarea").val().length > 140) {
      alert("Please do not exceed 140 characters")
      return;
    }

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize()
    }).done(function(){
      $("main textarea").val("");
      $("main textarea").focus();
      window.location.reload(true);
    })
  });

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(obj) {
        // console.log('my ajax works!!!', obj)
        obj.reverse();
        renderTweets(obj);
      },
      error: function() {
        alert("this is an error with loading a tweet");
      }
    });
  }
  loadTweets();


  $("nav input").on("click", function(event){
    console.log("button pressed!", event);
    $("main .new-tweet").toggle();
  });


});




