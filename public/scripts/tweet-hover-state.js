$(document).ready(function() {
  $("article.tweet").on("mouseover", function(event) {
    $(this).css("font-weight", "bold");
    $("section h6").css("color", "#0e1740");
  });
  $("article.tweet").on("mouseout", function(event) {
    $(this).css("font-weight", "normal");
    $("article.tweet h6").css("color", "#97989d")
  });
});