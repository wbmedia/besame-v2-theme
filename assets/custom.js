window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

$(".qtybox .btnqty").on("click", function () {
  var qty = parseInt($(this).parent(".qtybox").find(".quantity-input").val());
  if ($(this).hasClass("qtyplus")) {
    qty++;
  } else {
    if (qty > 1) {
      qty--;
    }
  }
  qty = isNaN(qty) ? 1 : qty;
  $(this).parent(".qtybox").find(".quantity-input").val(qty);
});
