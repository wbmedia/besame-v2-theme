window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


function hideAnnouncementBar() {
  var bar = document.getElementById("hide-announcement-bar").style = "display: none";
  return bar
}

function showClearSearch() {
  var show = document.getElementById("clear-search")
  textLength = show.value.length
  var hidden = document.getElementById("close").style = "display: none"
  if(show && textLength > 0 || show.value !== "") {
    var close = document.getElementById("close").style = "display: block";
    return close
  }else if(show.value === "") {
    var close = document.getElementById("close").style = "display: none";
    return close
  }else {
    return hidden
  }
}


function openMenuShop() {
  document.getElementById("shopMenu").style = "display: block"
}

function closeMenuShop() {
  document.getElementById("shopMenu").style = "display: none"
}