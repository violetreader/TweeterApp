$(document).ready(function() {
  var maxCount = 140;
  $('.new-tweet textarea').on('keyup', function(e) {
//.val(); can only
    var contents = $(this).val();
    var contentLength = contents.length;
    var counter = $(".new-tweet .counter");
    var length = maxCount - contentLength;
    counter.text(maxCount - contentLength);
    if (length < 0) {
      $(counter).css("color", "red");
    } else {
      next();
    }
  });
});
