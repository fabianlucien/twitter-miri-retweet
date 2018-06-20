/* Inject the button*/
$(document).ready(function() {
  var menu = document.getElementById("global-actions");
  var li = document.createElement("li");
  var button = document.createElement("a");
  button.setAttribute("id", "btn-retweet-charity");
  button.style.cssText =
    "margin: 12px; background-color: #ffffff; color: #183A65; border: 1px solid #183A65; border-radius: 4px; height: 23px; line-height: 23px; padding: 0px 12px; pointer: cursor;";
  button.style.cursor = "pointer";
  button.innerHTML = "retweet for MIRI (1)";
  button.onclick = function() {
    window.open("https://twitter.com/supportmiri?retweet=true", "_self");
  };
  li.appendChild(button);
  menu.appendChild(li);
});
