$(document).ready(function() {
  console.log("ready");
  document
    .getElementById("stream-items-id")
    .childNodes[3].childNodes[1].click();
  setTimeout(function() {
    document
      .getElementsByClassName("permalink-inner permalink-tweet-container")[0]
      .getElementsByClassName("stream-item-footer")[0]
      .getElementsByClassName("js-actionRetweet")[0]
      .click();
  }, 2500);
  var button = document.getElementById("btn-retweet-charity");
  button.innerHTML = "retweet for MIRI";
});
