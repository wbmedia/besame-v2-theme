window.addEventListener("scroll", function () {
  var header = document.getElementById("navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function hideAnnouncementBar() {
  var bar = document.getElementById("hide-announcement-bar").style = "display: none";
  return bar
}

function showClearSearch() {
  var show = document.getElementById("clear-search")
  var val = show.value
  console.log(val)
  textLength = show.value.length
  var hidden = document.getElementById("close").style = "display: none"
  if(show.value != "" && textLength > 0) {
    var close = document.getElementById("close").style = "display: block";
    return close
  }else{
    return hidden
  }
}


function openMenuShop() {
  document.getElementById("shopMenu").style = "display: block"
}

function closeMenuShop() {
  document.getElementById("shopMenu").style = "display: none"
}