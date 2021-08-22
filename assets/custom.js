window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


function hideAnnouncementBar() {
  var bar = document.getElementById("hide-announcement-bar").style = "display: none";
  return bar
}