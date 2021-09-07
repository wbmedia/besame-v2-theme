window.addEventListener("scroll", function () {
  var header = document.getElementById("navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function hideAnnouncementBar() {
  var bar = (document.getElementById("hide-announcement-bar").style =
    "display: none");
  return bar;
}

function showClearSearch() {
  var show = document.getElementById("clear-search");
  var val = show.value;
  console.log(val);
  textLength = show.value.length;
  var hidden = (document.getElementById("close").style = "display: none");
  if (show.value != "" && textLength > 0) {
    var close = (document.getElementById("close").style = "display: block");
    return close;
  } else {
    return hidden;
  }
}

function openMenuShop() {
  document.getElementById("shopMenu").style = "display: block";
  const blur = document.getElementById("PageContainer")
  blur.classList.toggle('active')
}

function closeMenuShop() {
  document.getElementById("shopMenu").style = "display: none";
  const removeBlur = document.getElementById("PageContainer")
  removeBlur.classList.remove('active');
}

function openDiscoveryMenu() {
  document.getElementById("discoverMenu").style = "display: block";
  const blur = document.getElementById("PageContainer")
  blur.classList.toggle('active')
}

function closeDiscoveryMenu() {
  document.getElementById("discoverMenu").style = "display: none";
  const removeBlur = document.getElementById("PageContainer")
  removeBlur.classList.remove('active');
}

function openMegaMenu() {
  document.getElementById("SiteNavLabel-face").style = "display: block";
}

function closeMegaMenu() {
  document.getElementsByClassName("site-nav__dropdown").style = "display: none";
  console.log('click and close')
}


function openChatBoot() {
  document.getElementById("gobot").style = "display: block";
  const chat = document.getElementById("gobot-wrapper")
  chat.classList.add('gobot-open')
}

const active = document.getElementById("showMenuShop")
let btns = active.getElementsByClassName("text-span-bottom")
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("actives");
  current[0].className = current[0].className.replace(" actives", "");
  this.className += " actives";
  });
}


